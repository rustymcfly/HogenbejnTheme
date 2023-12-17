import './component';
import './preview';
Shopware.Service('cmsService')
Shopware.Service('cmsService').registerCmsBlock({
  name: 'hero',
  label: 'sw-cms.blocks.hero.label',
  category: 'text-image',
  component: 'sw-cms-block-hero',
  previewComponent: 'sw-cms-preview-hero',
  defaultConfig: {
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    sizingMode: 'boxed'
  },
  slots: {
    content: 'text',

    image: {
      type: 'image',
      default: {
        config: {
          displayMode: { source: 'static', value: 'standard' },
        },
        data: {
          media: {
            value: 'framework/assets/default/cms/preview_mountain_large.jpg',
            source: 'default',
          },
        },
      },
    }
  }
});
