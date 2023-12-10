<?php

namespace Indutherm\BluepowerTheme\Content\LineItem;

use Shopware\Core\Checkout\Cart\LineItem\LineItem;

class OfferLineItem extends LineItem
{
    public function __construct(string $id, string $type, ?string $referencedId = null, int $quantity = 1)
    {
        parent::__construct($id, $type, $referencedId, $quantity);
        $this->uniqueIdentifier = $id;
    }
}
