

import { ComponentOptions } from 'vue';
import template from './template.html.twig'
const {Mixin} = Shopware
export default <ComponentOptions<any>>{
  template,
  mixins: [
    Mixin.getByName('cms-element'),
  ],
  created () {
    this.createdComponent()
  },

  methods: {
    createdComponent() {
      this.initElementConfig('tab-settings-element')
      this.initElementData('tab-settings-element')
    }
  },
};
