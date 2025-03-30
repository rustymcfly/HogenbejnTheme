import template from './sw-cms-el-component-media-video.html.twig';
import './sw-cms-el-component-media-video.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-component-media-video', {
  template,
  props: {
    element: {
      type: Object,
    }
  },
  inject: [
    'repositoryFactory'
  ],
  mixins: [
    Mixin.getByName('cms-element')
  ],

  data () {
    return {
      media: {}
    };
  },
  watch: {
    'element.config': {
      deep: true,
      async handler () {
        this.media = await this.mediaRepository.get(this.element.config.media.value, Shopware.Context.api);
        console.log(this, this.media);
      }
    }
  },
  computed: {
    mediaRepository () {
      return this.repositoryFactory.create('media');
    }
  },

  created () {
    this.createdComponent();
  },

  methods: {
    createdComponent () {
      this.initElementConfig('media-video');
      this.initElementData('media-video');
    }
  }
});
