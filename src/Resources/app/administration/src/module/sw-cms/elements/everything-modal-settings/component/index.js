import template from './sw-cms-el-component-everything-modal-settings.html.twig';
import './sw-cms-el-component-everything-modal-settings.scss';

const {Component, Mixin} = Shopware;

Component.register('sw-cms-el-component-everything-modal-settings', {
    template,
    props: {
        element: {
            type: Object,
        }
    },
    mixins: [
        Mixin.getByName('cms-element')
    ],
    computed: {
        parentScope() {
            return this.$parent.$parent
        }
    },
    created() {
        this.createdComponent();
        this.parentScope.settings.headline = this.element.config.headline.value;
        this.parentScope.settings.label = this.element.config.label.value;
        this.parentScope.settings.showButton = this.element.config.showButton.value;
        this.parentScope.settings.modalId = this.element.config.modalId.value;
        this.parentScope.settings.closable = this.element.config.closable.value;
    },

    methods: {
        createdComponent() {
            this.initElementConfig('everything-modal-settings');
            this.initElementData('everything-modal-settings');
        }
    }
});
