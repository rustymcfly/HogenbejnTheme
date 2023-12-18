<?php

namespace RustyMcFly\HogenbejnTheme\Service;

use RustyMcFly\HogenbejnTheme\Page\Coupon\CouponEvent;
use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Shopware\Core\Checkout\Cart\SalesChannel\CartService;
use Shopware\Core\Checkout\Promotion\Aggregate\PromotionIndividualCode\PromotionIndividualCodeCollection;
use Shopware\Core\Checkout\Promotion\Cart\PromotionItemBuilder;
use Shopware\Core\Checkout\Promotion\PromotionCollection;
use Shopware\Core\Checkout\Promotion\PromotionEntity;
use Shopware\Core\Framework\Adapter\Translation\AbstractTranslator;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\Checkout\Cart\CheckoutCartPageLoadedEvent;
use Shopware\Storefront\Page\Checkout\Offcanvas\OffcanvasCartPageLoadedEvent;
use Shopware\Storefront\Page\PageLoadedEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\Session;

class CouponService implements EventSubscriberInterface
{
    private PromotionItemBuilder $promotionItemBuilder;
    private CartService $cartService;
    private EventDispatcherInterface $eventDispatcher;
    private EntityRepository $promotionIndividualCodeRepository;
    private EntityRepository $promotionRepository;
    private AbstractTranslator $translator;
    private Session $session;

    private array $coupons;

    public function __construct(
        PromotionItemBuilder     $promotionItemBuilder,
        CartService              $cartService,
        EventDispatcherInterface $eventDispatcher,
        EntityRepository         $promotionIndividualCodeRepository,
        EntityRepository         $promotionRepository,
        AbstractTranslator       $translator,
        Session                  $session
    )
    {
        $this->session = $session;
        $this->promotionItemBuilder = $promotionItemBuilder;
        $this->cartService = $cartService;
        $this->eventDispatcher = $eventDispatcher;
        $this->promotionIndividualCodeRepository = $promotionIndividualCodeRepository;
        $this->promotionRepository = $promotionRepository;
        $this->translator = $translator;

        if (!is_array($this->session->get('coupons'))) {
            $this->session->set('coupons', []);
        }
        $this->coupons = $this->session->get('coupons');
    }

    public static function getSubscribedEvents()
    {
        return [
            OffcanvasCartPageLoadedEvent::class => "dumpCart",
            CheckoutCartPageLoadedEvent::class => "dumpCart"
        ];
    }


    public function getPromotion($couponCode, $context)
    {

        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('code', $couponCode));
        /**
         * @var PromotionIndividualCodeCollection $items
         */
        $items = $this->promotionIndividualCodeRepository->search($criteria, $context->getContext());

        if ($items->count()) {
            return $items->first()->getPromotion();
        } else {
            $criteria->addAssociation('discounts');
            /**
             * @var PromotionCollection $items
             */
            $items = $this->promotionRepository->search($criteria, $context->getContext());

            return $items->first();
        }

    }

    const NOT_FOUND = 0;
    const INACTIVE = 1;
    const INVALID_DATE = 2;
    const ACTIVE = 3;

    /**
     * @param PromotionEntity|null $promotion
     * @return int
     */
    private function promotionValidation(?PromotionEntity $promotion = null)
    {
        if (!$promotion instanceof PromotionEntity)
            return self::NOT_FOUND;
        if (!$promotion->isActive())
            return self::INACTIVE;

        $date = new \DateTime();
        if (
            ($promotion->getValidFrom() && $promotion->getValidFrom()->getTimestamp() > $date->getTimestamp())
            ||
            ($promotion->getValidUntil() && $promotion->getValidUntil()->getTimestamp() < $date->getTimestamp())
        )
            return self::INVALID_DATE;
        return self::ACTIVE;
    }

    /**
     * @param OffcanvasCartPageLoadedEvent|CheckoutCartPageLoadedEvent $event
     * @return void
     */
    public function dumpCart(PageLoadedEvent $event)
    {
        foreach (array_flip($this->coupons) as $couponCode)
            if($this->addCoupon($couponCode, $event->getSalesChannelContext()) === 'coupon.couponcode.added') {
                $event->getRequest()->request->set('redirectTo', 'frontend.page.addCouponCode');
                $event->getRequest()->request->set('redirectParams', json_encode(["code" => $couponCode]));
            }

    }

    public function addCoupon($couponCode, SalesChannelContext $context)
    {

        $cart = $this->cartService->getCart($context->getToken(), $context);

        $lineItemCount = $cart->getLineItems()->filterType(LineItem::PRODUCT_LINE_ITEM_TYPE)
            ->count();

        $couponAdded = $cart->getLineItems()->filterType(LineItem::PROMOTION_LINE_ITEM_TYPE)
            ->filter(function ($item) use ($couponCode) {
                return $item->getReferencedId() === $couponCode;
            });

        $promotion = $this->getPromotion($couponCode, $context);
        $this->coupons[$couponCode] = $this->promotionValidation($promotion);

        $events = [];

        if ($this->coupons[$couponCode] === self::INACTIVE) {
            $message = 'coupon.couponcode.not.found';
            $events[] = new CouponEvent('coupon.couponcode.not.valid', ["code" => $couponCode], $context->getContext());
        }

        if ($this->coupons[$couponCode] === self::NOT_FOUND) {
            unset($this->coupons[$couponCode]);
            $message = 'coupon.couponcode.not.found';
            $events[] = new CouponEvent('coupon.couponcode.not.found', ["code" => $couponCode], $context->getContext());
        }

        if ($couponAdded->count()) {
            $message = 'coupon.couponcode.not.stackable';
            $events[] = new CouponEvent('coupon.couponcode.not.stackable', ["code" => $couponCode], $context->getContext());
        }

        if (!$couponAdded->count() && $lineItemCount > 0 && $this->coupons[$couponCode] === self::ACTIVE) {
            try {
                $message = 'coupon.couponcode.added';
                $events[] = new CouponEvent('coupon.couponcode.added', ["code" => $couponCode], $context->getContext());
            } catch (\Exception $exception) {
                $message = 'coupon.couponcode.not.stackable';
                $events[] = new CouponEvent('coupon.couponcode.not.stackable', ["code" => $couponCode], $context->getContext());
            }
        }
        foreach ($events as $event) {
            $this->eventDispatcher->dispatch($event);
        }

        $this->session->set('coupons', $this->coupons);
        return $message;
    }
}
