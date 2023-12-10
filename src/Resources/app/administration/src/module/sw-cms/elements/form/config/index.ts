import { formTypes } from '..'
import template from './template.html.twig'

const {Component, Data} = Shopware

Component.override('sw-cms-el-config-form', {
    template,
    inject: [
        'repositoryFactory'
    ],
    computed: {
        productRepository () {
            return this.repositoryFactory.create('product')
        },
        productCriteria () {
            return new Data.Criteria(1, 25)
        },
        formTypes() {
            return formTypes
        }
    },
    methods: {
        selectProducts (value) {
            this.element.config.products.value = value
        }
    }

})
