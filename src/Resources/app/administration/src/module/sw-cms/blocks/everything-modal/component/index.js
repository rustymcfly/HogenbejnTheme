import template from './sw-cms-block-everything-modal.html.twig';

const { Component, Feature } = Shopware;

Component.register('sw-cms-block-everything-modal', {
  template,
  data () {
    return {
      settings: {
        headline: '',
        label: '',
        showButton: false,
        closable: true,
        modalId: ''
      }
    };
  },
  computed: {
    button () {
      return `<button data-bs-target="#${this.settings.modalId}" data-bs-toggle="modal" data-toggle="modal" data-target="#${this.settings.modalId}">${this.settings.label}</button>`;
    }
  },
  methods: {
    copyButton () {
      window.navigator.clipboard.writeText(this.button);
    }
  }
});
