<?php

namespace HogenbejnTheme\Content\Struct;

class OfferFormStruct extends \Shopware\Core\Framework\Struct\Struct
{
    protected $salutations;

    protected $products;

    /**
     * @return mixed
     */
    public function getSalutations()
    {
        return $this->salutations;
    }

    /**
     * @param mixed $salutations
     */
    public function setSalutations($salutations): void
    {
        $this->salutations = $salutations;
    }

    /**
     * @return mixed
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * @param mixed $products
     */
    public function setProducts($products): void
    {
        $this->products = $products;
    }
}
