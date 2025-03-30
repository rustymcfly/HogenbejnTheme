import template from './sw-cms-el-config-media-video.html.twig';
import './sw-cms-el-config-media-video.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-media-video', {
  template,
  props: {
    element: {
      type: Object,
    }
  },
  inject: ['repositoryFactory'],

  mixins: [
    Mixin.getByName('cms-element')
  ],

  created () {
    this.createdComponent();
  },

  methods: {
    createdComponent () {
      this.initElementConfig('media-video');
    }
  }
});
