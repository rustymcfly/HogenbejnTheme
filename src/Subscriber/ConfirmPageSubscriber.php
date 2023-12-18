<?php

namespace RustyMcFly\HogenbejnTheme\Subscriber;

use RustyMcFly\HogenbejnTheme\Content\Cart\WrapAsPresentLineItemFactory;
use RustyMcFly\HogenbejnTheme\Content\Struct\HasWrapAsPresentStruct;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Storefront\Page\Checkout\Cart\CheckoutCartPageLoadedEvent;
use Shopware\Storefront\Page\Checkout\Confirm\CheckoutConfirmPageLoadedEvent;
use Shopware\Storefront\Page\PageLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ConfirmPageSubscriber implements EventSubscriberInterface
{

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [
            CheckoutConfirmPageLoadedEvent::class => "onConfirmPageLoaded",
            CheckoutCartPageLoadedEvent::class => "onConfirmPageLoaded"
        ];
    }

    public function onConfirmPageLoaded(CheckoutConfirmPageLoadedEvent | CheckoutCartPageLoadedEvent $event): void
    {
        $asPresent = $event->getPage()->getCart()->getLineItems()->filterFlatByType(WrapAsPresentLineItemFactory::TYPE);
        $struct = new HasWrapAsPresentStruct();
        $struct->setLineItemId(Uuid::randomHex());
        if (count($asPresent)) {
            $struct->setLineItem($asPresent[0]);
        }

        $event->getPage()->addExtension('wrapAsPresent', $struct);
    }

}
