<?php

namespace HogenbejnTheme\Page\Offer;

use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Shopware\Core\System\SalesChannel\SalesChannelContext;

abstract class AbstractOfferFormRoute
{
    abstract public function getDecorated(): AbstractOfferFormRoute;

    abstract public function load(RequestDataBag $data, SalesChannelContext $context): OfferFormRouteResponse;

}
