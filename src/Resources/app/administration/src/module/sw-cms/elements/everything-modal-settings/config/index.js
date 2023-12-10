import template from './sw-cms-el-config-everything-modal-settings.html.twig';
import './sw-cms-el-config-everything-modal-settings.scss';

const { Component, Mixin, Utils } = Shopware;

Component.register('sw-cms-el-config-everything-modal-settings', {
  template,

  inject: ['repositoryFactory'],

  computed: {
    parentScope () {
      return this.$parent.$parent.$parent
    }
  },
  mixins: [
    Mixin.getByName('cms-element')
  ],
  watch: {
    'element.config': {
      deep:true,
      handler(value) {
        if(!this.parentScope?.settings) return
        this.parentScope.settings.headline = value.headline.value;
        this.parentScope.settings.label = value.label.value;
        this.parentScope.settings.showButton = value.showButton.value;
        this.parentScope.settings.closable = value.closable.value;
        if(!value.modalId.value) {
          this.element.config.modalId.value = 'modal_' + Utils.createId();
        }
        this.parentScope.settings.modalId = value.modalId.value
      }
    }
  },
  created () {
    this.createdComponent();
  },

  methods: {
    createdComponent () {
      this.initElementConfig('everything-modal-settings');
    }
  }
});
