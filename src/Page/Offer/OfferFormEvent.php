<?php

namespace RustyMcFly\HogenbejnTheme\Page\Offer;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Event\EventData\EventDataCollection;
use Shopware\Core\Framework\Event\EventData\MailRecipientStruct;
use Shopware\Core\Framework\Event\EventData\ObjectType;
use Shopware\Core\Framework\Event\FlowEventAware;
use Shopware\Core\Framework\Event\MailAware;
use Shopware\Core\Framework\Event\SalesChannelAware;
use Shopware\Core\Framework\Validation\DataBag\DataBag;
use Symfony\Contracts\EventDispatcher\Event;

class OfferFormEvent extends Event implements FlowEventAware, SalesChannelAware, MailAware, OfferFormDataAware
{
    public const EVENT_NAME = 'offer_form.send';

    /**
     * @var Context
     */
    private $context;

    /**
     * @var string
     */
    private $salesChannelId;

    /**
     * @var MailRecipientStruct
     */
    private $recipients;

    /**
     * @var array<int|string, mixed>
     */
    private $offerFormData;

    public function __construct(Context $context, string $salesChannelId, MailRecipientStruct $recipients, DataBag $offerFormData)
    {
        $this->context = $context;
        $this->salesChannelId = $salesChannelId;
        $this->recipients = $recipients;
        $this->offerFormData = $offerFormData->all();
    }

    public static function getAvailableData(): EventDataCollection
    {
        return (new EventDataCollection())
            ->add('offerFormData', new ObjectType());
    }

    public function getName(): string
    {
        return self::EVENT_NAME;
    }

    public function getContext(): Context
    {
        return $this->context;
    }

    public function getMailStruct(): MailRecipientStruct
    {
        return $this->recipients;
    }

    public function getSalesChannelId(): string
    {
        return $this->salesChannelId;
    }

    /**
     * @return array<int|string, mixed>
     */
    public function getOfferFormData(): array
    {
        return $this->offerFormData;
    }
}
