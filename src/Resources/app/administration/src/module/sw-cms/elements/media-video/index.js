import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
  name: 'media-video',
  label: 'sw-cms.elements.media-video.label',
  component: 'sw-cms-el-component-media-video',
  configComponent: 'sw-cms-el-config-media-video',
  previewComponent: 'sw-cms-el-preview-media-video',
  defaultConfig: {
    media: {
      source: 'static',
      value: '',
      entity: {
        name: 'media'
      }
    }
  },
  collect: Shopware.Service('cmsService').getCollectFunction(),
  defaultData: {}
});
