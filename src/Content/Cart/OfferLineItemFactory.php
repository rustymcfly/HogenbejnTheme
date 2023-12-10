<?php

namespace HogenbejnTheme\Content\Cart;

use HogenbejnTheme\Content\LineItem\OfferLineItem;
use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Shopware\Core\Checkout\Cart\LineItemFactoryHandler\LineItemFactoryInterface;
use Shopware\Core\Checkout\Cart\LineItemFactoryHandler\PromotionLineItemFactory;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

class OfferLineItemFactory implements LineItemFactoryInterface
{

    public const TYPE = 'offer';

    public function supports(string $type): bool
    {
        return $type === self::TYPE;
    }

    public function create(array $data, SalesChannelContext $context): LineItem
    {
        $lineItem = new OfferLineItem($data["id"], self::TYPE);
        $lineItem->setStackable(false);
        $lineItem->setLabel($data['label']);
        $lineItem->setRemovable(true);
        return $lineItem;
    }

    public function update(LineItem $lineItem, array $data, SalesChannelContext $context): void
    {
        // TODO: Implement update() method.
    }
}
