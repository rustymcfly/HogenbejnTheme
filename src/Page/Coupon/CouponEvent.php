<?php

namespace RustyMcFly\HogenbejnTheme\Page\Coupon;

use Monolog\Logger;
use Shopware\Core\Content\Flow\Dispatching\Aware\DataAware;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Event\EventData\ArrayType;
use Shopware\Core\Framework\Event\EventData\EventDataCollection;
use Shopware\Core\Framework\Event\EventData\ObjectType;
use Shopware\Core\Framework\Event\EventData\ScalarValueType;
use Shopware\Core\Framework\Event\FlowEventAware;
use Shopware\Core\Framework\Log\LogAware;
use Symfony\Contracts\EventDispatcher\Event;

class CouponEvent extends Event implements FlowEventAware, LogAware, DataAware
{

    const EVENT_NAME = 'coupon.event';
    private array $data;
    private string $message;
    private Context $context;

    public function __construct(string $message, array $data, Context $context)
    {
        $this->data = $data;
        $this->message = $message;
        $this->context = $context;
    }

    public function getData(): array
    {
        return $this->data;
    }

    /**
     * @return array<string, mixed>
     */
    public function getLogData(): array
    {
        $data = $this->data;

        return [
            'data' => $data,
            'eventName' =>  self::EVENT_NAME,
            'message' => $this->message,
        ];
    }

    public function getLogLevel(): int
    {
        return Logger::INFO;
    }


    public function getContext(): Context
    {
        return $this->context;
    }

    public static function getAvailableData(): EventDataCollection
    {
        return (new EventDataCollection())
            ->add('data', new ArrayType(new ScalarValueType(ScalarValueType::TYPE_STRING)))
            ->add('message', new ObjectType());
    }

    public function getName(): string
    {
        return self::EVENT_NAME;
    }
}
