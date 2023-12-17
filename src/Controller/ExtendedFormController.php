<?php

namespace RustyMcFly\HogenbejnTheme\Controller;

use HogenbejnTheme\Content\Cart\WrapAsPresentLineItemFactory;
use HogenbejnTheme\Page\Offer\AbstractOfferFormRoute;
use Shopware\Core\Checkout\Cart\Cart;
use Shopware\Core\Checkout\Cart\LineItemFactoryRegistry;
use Shopware\Core\Checkout\Cart\SalesChannel\CartService;
use Shopware\Core\Framework\RateLimiter\Exception\RateLimitExceededException;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Shopware\Core\Framework\Validation\Exception\ConstraintViolationException;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(defaults={"_routeScope"={"storefront"}})
 *
 */
class ExtendedFormController extends StorefrontController
{

    public function __construct(private readonly AbstractOfferFormRoute $offerFormRoute, private readonly LineItemFactoryRegistry $lineItemFactoryRegistry, private readonly CartService $cartService)
    {
    }

    #[Route(path: '/checkout/wrap-as-present/add', name: 'frontend.checkout.wrap-as-present.add', defaults: ['XmlHttpRequest' => true], methods: ['POST'])]
    public function addLineItems(Cart $cart, Request $request, SalesChannelContext $context): Response
    {
        try {

            $item = $this->lineItemFactoryRegistry->create([
                "type" => WrapAsPresentLineItemFactory::TYPE,
                "id" => Uuid::randomHex()
            ], $context);
            $cart = $this->cartService->add($cart, $item, $context);

            $this->addFlash(self::SUCCESS, $this->trans('checkout.cartUpdateSuccess'));

            return $this->createActionResponse($request);
        } catch (\Exception $exception) {
            dump($exception);
            die();
        }
    }

    /**
     * @Route("/form/offer", name="frontend.form.offer.send", methods={"POST"}, defaults={"XmlHttpRequest"=true, "_captcha"=true})
     */
    public function offer(RequestDataBag $data, SalesChannelContext $context): JsonResponse
    {

        $response = [];

        try {
            $message = $this->offerFormRoute
                ->load($data->toRequestDataBag(), $context)
                ->getResult()
                ->getIndividualSuccessMessage();

            if (!$message) {
                $message = $this->trans('offer.success');
            }
            $response[] = [
                'type' => 'success',
                'alert' => $message,
            ];
        } catch (ConstraintViolationException $formViolations) {
            $violations = [];
            foreach ($formViolations->getViolations() as $violation) {
                $violations[] = $violation->getMessage();
            }
            $response[] = [
                'type' => 'danger',
                'alert' => $this->renderView('@Storefront/storefront/utilities/alert.html.twig', [
                    'type' => 'danger',
                    'list' => $violations,
                ]),
            ];
        } catch (RateLimitExceededException $exception) {
            $response[] = [
                'type' => 'info',
                'alert' => $this->renderView('@Storefront/storefront/utilities/alert.html.twig', [
                    'type' => 'info',
                    'content' => $this->trans('error.rateLimitExceeded', ['%seconds%' => $exception->getWaitTime()]),
                ]),
            ];
        }

        return new JsonResponse($response);
    }

}
