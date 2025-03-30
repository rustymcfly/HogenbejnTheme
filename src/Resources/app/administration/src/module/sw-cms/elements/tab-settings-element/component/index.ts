

import template from './template.html.twig';

const { Mixin } = Shopware;
export default {
  props: {
    element: {
      type: Object,
    }
  }
  template,
  mixins: [
    Mixin.getByName('cms-element'),
  ],
  created() {
    this.createdComponent();
  },
  mounted() {
    this.updateComponent();
  },
  data() {
    return {
      active: document.querySelector(this.element.slot.replace(/tab_settings_([\d])*$/, 'tab_$1'))?.classList.contains('block'),
    };
  },
  methods: {
    async updateComponent() {
      await new Promise((resolve) => setTimeout(() => resolve(100)));
      this.active = document.querySelector(this.element.slot.replace(/tab_settings_([\d])*$/, '.tab_$1'))?.classList.contains('block');
      this.$forceUpdate.bind(this);
    },
    createdComponent() {
      this.$parent?.$parent?.$on('tab-change', this.updateComponent.bind(this));
      this.initElementConfig('tab-settings-element');
      this.initElementData('tab-settings-element');
      this.updateComponent();
    },
  },
};
