<?php

namespace RustyMcFly\HogenbejnTheme\Content\Cart;

use RustyMcFly\HogenbejnTheme\Content\LineItem\WrapAsPresentLineItem;
use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Shopware\Core\Checkout\Cart\LineItemFactoryHandler\LineItemFactoryInterface;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

class WrapAsPresentLineItemFactory implements LineItemFactoryInterface
{

    public const TYPE = 'wrap-as-present';

    public function supports(string $type): bool
    {
        return $type === self::TYPE;
    }

    public function create(array $data, SalesChannelContext $context): LineItem
    {
        $lineItem = new WrapAsPresentLineItem($data["id"], self::TYPE);
        $lineItem->setGood(false);
        $lineItem->setStackable(false);
        $lineItem->setLabel("wrapAsPresent.lineItemLabel");
        $lineItem->setRemovable(true);
        return $lineItem;
    }

    public function update(LineItem $lineItem, array $data, SalesChannelContext $context): void
    {
    }
}
