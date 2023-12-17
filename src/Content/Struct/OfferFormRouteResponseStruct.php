<?php

namespace RustyMcFly\HogenbejnTheme\Content\Struct;

use Shopware\Core\Framework\Struct\Struct;

class OfferFormRouteResponseStruct extends Struct
{
    /**
     * @var string
     */
    protected $individualSuccessMessage;

    public function getApiAlias(): string
    {
        return 'offer_form_result';
    }

    public function getIndividualSuccessMessage(): string
    {
        return $this->individualSuccessMessage;
    }
}
