<?php

namespace HogenbejnTheme\Page\Offer;

use HogenbejnTheme\Content\Struct\OfferFormRouteResponseStruct;
use Shopware\Core\Content\LandingPage\LandingPageDefinition;
use Shopware\Core\Content\Media\Exception\DuplicatedMediaFileNameException;
use Shopware\Core\Content\Media\File\FileFetcher;
use Shopware\Core\Content\Media\File\FileSaver;
use Shopware\Core\Content\Media\MediaService;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\Event\EventData\MailRecipientStruct;
use Shopware\Core\Framework\Plugin\Exception\DecorationPatternException;
use Shopware\Core\Framework\RateLimiter\RateLimiter;
use Shopware\Core\Framework\Routing\Annotation\Since;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Core\Framework\Validation\DataBag\DataBag;
use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Shopware\Core\Framework\Validation\DataValidationFactoryInterface;
use Shopware\Core\Framework\Validation\DataValidator;
use Shopware\Core\Framework\Validation\Exception\ConstraintViolationException;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 *
 * @Route(defaults={"_routeScope"={"store-api"}})
 */
class OfferFormRoute extends AbstractOfferFormRoute
{
    private MediaService $mediaService;
    protected DataValidationFactoryInterface $offerFormValidationFactory;
    protected DataValidator $validator;
    protected EventDispatcherInterface $eventDispatcher;
    protected SystemConfigService $systemConfigService;
    protected EntityRepository $cmsSlotRepository;
    protected EntityRepository $salutationRepository;
    protected EntityRepository $categoryRepository;
    protected EntityRepository $landingPageRepository;
    protected EntityRepository $productRepository;
    protected RequestStack $requestStack;
    protected RateLimiter $rateLimiter;
    private EntityRepository $offerUploadRepository;
    private EntityRepository $mediaRepository;

    /**
     * @internal
     */
    public function __construct(
        EntityRepository               $offerUploadRepository,
        MediaService                   $mediaService,
        EntityRepository     $mediaRepository,
        FileSaver                      $fileSaver,
        FileFetcher                    $fileFetcher,
        DataValidationFactoryInterface $offerFormValidationFactory,
        DataValidator                  $validator,
        EventDispatcherInterface       $eventDispatcher,
        SystemConfigService            $systemConfigService,
        EntityRepository               $cmsSlotRepository,
        EntityRepository               $salutationRepository,
        EntityRepository               $categoryRepository,
        EntityRepository               $landingPageRepository,
        EntityRepository               $productRepository,
        RequestStack                   $requestStack,
        RateLimiter                    $rateLimiter
    )
    {
        $this->fileFetcher = $fileFetcher;
        $this->offerUploadRepository = $offerUploadRepository;
        $this->mediaRepository = $mediaRepository;
        $this->mediaService = $mediaService;
        $this->fileSaver = $fileSaver;
        $this->offerFormValidationFactory = $offerFormValidationFactory;
        $this->validator = $validator;
        $this->eventDispatcher = $eventDispatcher;
        $this->systemConfigService = $systemConfigService;
        $this->cmsSlotRepository = $cmsSlotRepository;
        $this->salutationRepository = $salutationRepository;
        $this->categoryRepository = $categoryRepository;
        $this->landingPageRepository = $landingPageRepository;
        $this->productRepository = $productRepository;
        $this->requestStack = $requestStack;
        $this->rateLimiter = $rateLimiter;
    }


    public function getDecorated(): AbstractOfferFormRoute
    {
        throw new DecorationPatternException(self::class);
    }


    /**
     * @Since("6.2.0.0")
     * @Route("/store-api/offer-form", name="store-api.offer.form", methods={"POST"})
     */
    public function load(RequestDataBag $data, SalesChannelContext $context): OfferFormRouteResponse
    {

        $data->set('file', $this->requestStack->getCurrentRequest()->files->all()['file']);
        $violations = $this->validateOfferForm($data, $context);

        if (($request = $this->requestStack->getMainRequest()) !== null && $request->getClientIp() !== null) {
            $this->rateLimiter->ensureAccepted(RateLimiter::CONTACT_FORM, $request->getClientIp());
        }

        $mailConfigs = $this->getMailConfigs($context, $data->get('slotId'), $data->get('navigationId'), $data->get('entityName'));

        $salutationCriteria = new Criteria([$data->get('salutationId')]);
        $salutationSearchResult = $this->salutationRepository->search($salutationCriteria, $context->getContext());

        if ($salutationSearchResult->count() !== 0) {
            $data->set('salutation', $salutationSearchResult->first());
        }

        $productCriteria = new Criteria([$data->get('productId')]);
        $productSearchResult = $this->productRepository->search($productCriteria, $context->getContext());
        if ($productSearchResult->count() !== 0) {
            $data->set('product', $productSearchResult->first());
        }

        if (empty($mailConfigs['receivers'])) {
            $mailConfigs['receivers'][] = $this->systemConfigService->get('core.basicInformation.email', $context->getSalesChannel()->getId());
        }

        $recipientStructs = [];
        foreach ($mailConfigs['receivers'] as $mail) {
            $recipientStructs[$mail] = $mail;
        }
        $mediaId = Uuid::randomHex();
        $this->mediaRepository->create([[
            "id" => $mediaId
        ]], $context->getContext());

        $media = $this->mediaRepository->search(new Criteria([$mediaId]), $context->getContext())->first();

        $tempFile = tempnam(sys_get_temp_dir(), '');
        /**
         * @var UploadedFile $file
         */
        $file = $data->get('file');
        try {
            $uploadedFile = $this->fileFetcher->fetchBlob($file->getContent(), $file->getClientOriginalExtension(), $file->getClientMimeType());
            $destination = $data->get('email') .'_' .$file->getClientOriginalName() .'_' . (new \DateTime())->format('yyyd-m-Y-H-i-s');
            $this->fileSaver->persistFileToMedia(
                $uploadedFile,
                $destination,
                $mediaId,
                $context->getContext()
            );
        } catch (DuplicatedMediaFileNameException $exception) {
            $data->set('file', null);
            $this->validateOfferForm($data, $context);
        } finally {
            unlink($tempFile);
        }
        $upload = $this->offerUploadRepository->create([[
            "mediaId" => $media->getId(),
            "customerId" => $context->getCustomerId(),
            "salutationId" => $data->get('salutation')->getId(),
            "productId" => $data->get('product')->getId(),
            "firstname" => $data->get('firstName'),
            "lastname" => $data->get('lastName'),
            "email" => $data->get('email'),
            "subject" => $data->get('subject'),
            "privacy" => $data->get('privacy') === 'on',
            "message" => $data->get('comment'),
            "phone" => $data->get('phone'),
        ]], $context->getContext());

        $event = new OfferFormEvent(
            $context->getContext(),
            $context->getSalesChannel()->getId(),
            new MailRecipientStruct($recipientStructs),
            $data
        );

        $this->eventDispatcher->dispatch(
            $event,
            OfferFormEvent::EVENT_NAME
        );


        $result = new OfferFormRouteResponseStruct();
        $result->assign([
            'individualSuccessMessage' => $mailConfigs['message'] ?? '',
        ]);

        return new OfferFormRouteResponse($result);
    }


    private function validateOfferForm(DataBag $data, SalesChannelContext $context): ConstraintViolationList
    {
        $definition = $this->offerFormValidationFactory->create($context);
        $violations = $this->validator->getViolations($data->all(), $definition);
        if ($violations->count() > 0) {
            throw new ConstraintViolationException($violations, $data->all());
        }
        return $violations;
    }

    /**
     * @return array<string, string|array<int, string>>
     */
    private function getSlotConfig(string $slotId, string $navigationId, SalesChannelContext $context, ?string $entityName = null): array
    {
        $mailConfigs['receivers'] = [];
        $mailConfigs['message'] = '';

        $criteria = new Criteria([$navigationId]);

        switch ($entityName) {
            case ProductDefinition::ENTITY_NAME:
                $entity = $this->productRepository->search($criteria, $context->getContext())->first();

                break;
            case LandingPageDefinition::ENTITY_NAME:
                $entity = $this->landingPageRepository->search($criteria, $context->getContext())->first();

                break;
            default:
                $entity = $this->categoryRepository->search($criteria, $context->getContext())->first();
        }

        if (!$entity) {
            return $mailConfigs;
        }

        if (empty($entity->getSlotConfig()[$slotId])) {
            return $mailConfigs;
        }

        $mailConfigs['receivers'] = $entity->getSlotConfig()[$slotId]['mailReceiver']['value'];
        $mailConfigs['message'] = $entity->getSlotConfig()[$slotId]['confirmationText']['value'];

        return $mailConfigs;
    }

    /**
     * @return array<string, array<string, array<int, mixed>|bool|float|int|string|null>|string|mixed>
     */
    private function getMailConfigs(SalesChannelContext $context, ?string $slotId = null, ?string $navigationId = null, ?string $entityName = null): array
    {
        $mailConfigs['receivers'] = [];
        $mailConfigs['message'] = '';

        if (!$slotId) {
            return $mailConfigs;
        }

        if ($navigationId) {
            $mailConfigs = $this->getSlotConfig($slotId, $navigationId, $context, $entityName);
            if (!empty($mailConfigs['receivers'])) {
                return $mailConfigs;
            }
        }

        $criteria = new Criteria([$slotId]);
        $slot = $this->cmsSlotRepository->search($criteria, $context->getContext());
        $mailConfigs['receivers'] = $slot->getEntities()->first()->getTranslated()['config']['mailReceiver']['value'];
        $mailConfigs['message'] = $slot->getEntities()->first()->getTranslated()['config']['confirmationText']['value'];

        return $mailConfigs;
    }
}
