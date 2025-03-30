<?php
/**
 * Leoparden\BasePlugin
 * Copyright (c) Die Leoparden GmbH
 */

namespace RustyMcFly\HogenbejnTheme\Service\CmsElementResolvers;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Product\Cms\ProductDescriptionReviewsCmsElementResolver;

class ProductReviewCmsElementResolver extends AbstractCmsElementResolver
{
    public function __construct(private readonly ProductDescriptionReviewsCmsElementResolver $resolver)
    {
    }

    public function getType(): string
    {
        return 'product-description';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return $this->resolver->collect($slot, $resolverContext);
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $this->resolver->enrich($slot, $resolverContext, $result);
    }
}
