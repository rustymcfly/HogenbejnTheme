import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
  name: 'everything-modal',
  label: 'sw-cms.blocks.everything-modal.label',
  category: 'commerce',
  component: 'sw-cms-block-everything-modal',
  previewComponent: 'sw-cms-preview-everything-modal',
  defaultConfig: {
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    sizingMode: 'boxed'
  },
  slots: {
    settings: {
      type: 'everything-modal-settings',
      default: {
        locked: true,
        config: {
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
        }
      }
    },
    content: 'text'
  }
});
