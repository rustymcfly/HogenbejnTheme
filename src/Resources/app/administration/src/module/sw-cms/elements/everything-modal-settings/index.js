import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
  name: 'everything-modal-settings',
  label: 'sw-cms.elements.everything-modal-settings.label',
  component: 'sw-cms-el-component-everything-modal-settings',
  configComponent: 'sw-cms-el-config-everything-modal-settings',
  previewComponent: 'sw-cms-el-preview-everything-modal-settings',
  defaultConfig: {
    showButton: {
      source: 'static',
      value: false
    },
    closable: {
      source: 'static',
      value: true
    },
    headline: {
      source: 'static',
      value: ''
    },
    label: {
      source: 'static',
      value: ''
    },
    modalId: {
      source: 'static',
      value: ''
    }
  },
  defaultData: {}
});
