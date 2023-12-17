<?php

namespace RustyMcFly\HogenbejnTheme\Content\Struct;

use Shopware\Core\Checkout\Cart\LineItem\LineItem;
use Shopware\Core\Framework\Struct\Struct;

class HasWrapAsPresentStruct extends Struct
{
    private $lineItem;
    private $inCart;
    private $lineItemId;

    public function getLineItem(): ?LineItem
    {
        return $this->lineItem;
    }

    public function setLineItem(LineItem $lineItem): void
    {
        $this->lineItem = $lineItem;
        $this->lineItemId = $lineItem->getId();
    }

    public function isInCart(): bool
    {
        return $this->inCart;
    }

    public function setInCart(bool $inCart): void
    {
        $this->inCart = $inCart;
    }

    /**
     * @return mixed
     */
    public function getLineItemId()
    {
        return $this->lineItemId;
    }

    /**
     * @param mixed $lineItemId
     */
    public function setLineItemId($lineItemId): void
    {
        $this->lineItemId = $lineItemId;
    }
}
