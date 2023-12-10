import "./config"
import "./component"
const {Service} = Shopware

const form = Service('cmsService').getCmsElementConfigByName('form')

export const formTypes = [
    'Offer'
]

form.defaultConfig.action = {
    source: 'static',
    value: null
}
form.defaultConfig.submitText = {
    source: 'static',
    value: null
}
form.defaultConfig.products = {
    source: 'static',
    entity: {
        name: 'product'
    },
    value: null
}
Service('cmsService').registerCmsElement(form)

