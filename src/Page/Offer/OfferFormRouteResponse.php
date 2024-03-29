<?php

namespace RustyMcFly\HogenbejnTheme\Page\Offer;

use RustyMcFly\HogenbejnTheme\Content\Struct\OfferFormRouteResponseStruct;
use Shopware\Core\System\SalesChannel\StoreApiResponse;

class OfferFormRouteResponse extends StoreApiResponse
{
    /**
     * @var OfferFormRouteResponseStruct
     */
    protected $object;

    public function __construct(OfferFormRouteResponseStruct $object)
    {
        parent::__construct($object);
    }

    public function getResult(): OfferFormRouteResponseStruct
    {
        return $this->object;
    }
}
