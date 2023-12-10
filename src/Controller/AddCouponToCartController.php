<?php

namespace HogenbejnTheme\Controller;

use Shopware\Core\Checkout\Cart\Cart;
use Shopware\Core\Checkout\Cart\SalesChannel\CartService;
use Shopware\Core\Checkout\Promotion\Cart\PromotionCartAddedInformationError;
use Shopware\Core\Checkout\Promotion\Cart\PromotionItemBuilder;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(defaults={"_routeScope"={"storefront"}})
 *
 */
class AddCouponToCartController extends StorefrontController
{
    private $promotionItemBuilder;
    private $cartService;

    public function __construct(
        CartService          $cartService,
        PromotionItemBuilder $promotionItemBuilder)
    {
        $this->cartService = $cartService;
        $this->promotionItemBuilder = $promotionItemBuilder;
    }

    /**
     * @param Cart $cart
     * @param Request $request
     * @param SalesChannelContext $context
     * @param string $couponCode
     * @return Response
     * @Route("/coupon/{couponCode}", name="frontend.page.addCouponCode", methods={"GET"})
     */
    public function index(Cart $cart, Request $request, SalesChannelContext $context, string $couponCode): Response
    {
        try {
            if ($couponCode === '') {
                throw new \InvalidArgumentException('Code is required');
            }

            $lineItem = $this->promotionItemBuilder->buildPlaceholderItem($couponCode);

            $cart = $this->cartService->add($cart, $lineItem, $context);
            $request->request->set('redirectTo', 'frontend.checkout.cart.page');
            $addedEvents = $cart->getErrors()->filterInstance(PromotionCartAddedInformationError::class);
            if ($addedEvents->count() > 0) {
                $this->addFlash(self::SUCCESS, $this->trans('checkout.codeAddedSuccessful'));
                return $this->renderStorefront("@HogenbejnTheme/storefront/page/content/coupon.html.twig");
            }

        } catch (\Exception $exception) {
            $this->addFlash(self::DANGER, $this->trans('error.message-default'));
        }
        return $this->renderStorefront("@HogenbejnTheme/storefront/page/content/coupon.html.twig");
    }
}
