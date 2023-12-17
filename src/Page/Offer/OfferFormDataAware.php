<?php

namespace RustyMcFly\HogenbejnTheme\Page\Offer;



use Shopware\Core\Framework\Event\FlowEventAware;

interface OfferFormDataAware extends FlowEventAware
{
    public const OFFER_FORM_DATA = 'offerFormData';

    /**
     * @return array<string, mixed>
     */
    public function getOfferFormData(): array;
}
