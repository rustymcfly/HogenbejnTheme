<?php

namespace HogenbejnTheme\Content\OfferUpload;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

class OfferUploadCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return OfferUploadEntity::class;
    }


}
