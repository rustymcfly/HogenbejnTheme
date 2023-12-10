import offer from './templates/form-offer'
const {Component} = Shopware

Component.override('sw-cms-el-form', {
    components: {
        offer
    }
})
