<?php

namespace RustyMcFly\HogenbejnTheme\Content\OfferUpload;

use Shopware\Core\Checkout\Customer\CustomerDefinition;
use Shopware\Core\Content\Media\MediaDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\EmailField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\System\Salutation\SalutationDefinition;

class OfferUploadDefinition extends EntityDefinition
{

    public function getEntityName(): string
    {
        return 'offer_upload';
    }

    public function getCollectionClass(): string
    {
        return OfferUploadCollection::class;
    }

    public function getEntityClass(): string
    {
        return OfferUploadEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            new ManyToOneAssociationField('customer', 'customer_id', CustomerDefinition::class, 'id'),
            new ManyToOneAssociationField('product', 'product_id', ProductDefinition::class, 'id'),
            new ManyToOneAssociationField('media', 'media_id', MediaDefinition::class, 'id'),
            new ManyToOneAssociationField('salutation', 'salutation_id', SalutationDefinition::class, 'id'),
            new StringField('firstname', 'firstname'),
            new StringField('lastname', 'lastname'),
            new StringField('phone', 'phone'),
            new EmailField('email', 'email'),
            new StringField('subject', 'subject'),
            new LongTextField('message', 'message'),
            new BoolField('privacy', 'privacy'),


            new FkField('customer_id', 'customerId', CustomerDefinition::class),
            new FkField('product_id', 'productId', ProductDefinition::class),
            new FkField('media_id', 'mediaId', MediaDefinition::class),
            new FkField('salutation_id', 'salutationId', SalutationDefinition::class)

            ]);
    }
}
