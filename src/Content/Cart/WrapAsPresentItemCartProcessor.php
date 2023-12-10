<?php

namespace HogenbejnTheme\Content\Cart;

use Shopware\Core\Checkout\Cart\Cart;
use Shopware\Core\Checkout\Cart\CartBehavior;
use Shopware\Core\Checkout\Cart\CartException;
use Shopware\Core\Checkout\Cart\CartProcessorInterface;
use Shopware\Core\Checkout\Cart\LineItem\CartDataCollection;
use Shopware\Core\Checkout\Cart\Price\Struct\CalculatedPrice;
use Shopware\Core\Checkout\Cart\Tax\Struct\CalculatedTaxCollection;
use Shopware\Core\Checkout\Cart\Tax\Struct\TaxRuleCollection;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

class WrapAsPresentItemCartProcessor implements CartProcessorInterface
{
    /**
     * @throws CartException
     */
    public function process(CartDataCollection $data, Cart $original, Cart $toCalculate, SalesChannelContext $context, CartBehavior $behavior): void
    {
        $wrapAsPresent = $original->getLineItems()->filterFlatByType(WrapAsPresentLineItemFactory::TYPE);
        if (count($wrapAsPresent)) {
            $wrapAsPresent = $wrapAsPresent[0];
            $taxCollection = new CalculatedTaxCollection();
            $taxRuleCollection = new TaxRuleCollection();
            $wrapAsPresent->setPrice(new CalculatedPrice(0, 0, $taxCollection, $taxRuleCollection));
            $toCalculate->add($wrapAsPresent);
        }
    }


}
