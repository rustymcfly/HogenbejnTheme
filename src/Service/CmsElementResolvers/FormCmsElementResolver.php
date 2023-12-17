<?php

namespace RustyMcFly\HogenbejnTheme\Service\CmsElementResolvers;

use HogenbejnTheme\Content\Struct\OfferFormStruct;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\FormCmsElementResolver as BaseResolver;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class FormCmsElementResolver extends BaseResolver
{

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        $criteriaCollection = new CriteriaCollection();

        $criteria = new Criteria($slot->getFieldConfig()->get('products')->getValue());
        $criteriaCollection->add($this->getType() . $slot->getUniqueIdentifier(), ProductDefinition::class, $criteria);
        return $criteriaCollection;
    }

    private BaseResolver $decorated;

    public function setInner(BaseResolver $inner)
    {
        $this->decorated = $inner;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $this->decorated->enrich($slot, $resolverContext, $result);
        if ($slot->getFieldConfig()->get('type')->getValue() === 'offer') {
            $offerFormStruct = new OfferFormStruct();
            $offerFormStruct->setProducts($result->get($this->getType() . $slot->getUniqueIdentifier()));
            $offerFormStruct->setSalutations($slot->getData());
            $slot->setData($offerFormStruct);
        }
    }


}
