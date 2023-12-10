<?php declare(strict_types=1);

namespace HogenbejnTheme;

use HogenbejnTheme\Page\Coupon\CouponEvent;
use HogenbejnTheme\Page\Offer\OfferFormEvent;
use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class HogenbejnTheme extends Plugin implements ThemeInterface
{
    public function boot(): void
    {
        parent::boot();

        $this->container->get('Shopware\Core\Framework\Event\BusinessEventRegistry')->addClasses([OfferFormEvent::class, CouponEvent::class]);
    }

}
