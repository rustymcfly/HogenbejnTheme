import "./style.scss"
import "./module/sw-cms/elements/form"
import "./module/sw-cms/elements/everything-modal-settings"
import "./module/sw-cms/elements/media-video"
import "./module/sw-cms/blocks/everything-modal"
import "./module/sw-cms/blocks/hero"


const {Component, Service, Data} = Shopware;
/**
 * @private
 * @package buyers-experience
 */
Component.register('sw-cms-block-product-tabs',
    // istanbul ignore next
    () => import('./module/sw-cms/blocks/product-tabs/component'));

/**
 * @private
 * @package buyers-experience
 */
Service('cmsService').registerCmsBlock({
    name: 'product-tabs',
    label: 'rustymcfly.hogenbejntheme.product-tabs',
    category: 'commerce',
    component: 'sw-cms-block-product-tabs',
    previewComponent: 'sw-cms-preview-product-description-reviews',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        tab_0: {
            type: 'product-description',
        },
        tab_1: {
            type: 'product-review',
        },
        tab_2: {type: 'text'},
        tab_3: {type: 'text'},
        tab_4: {type: 'text'},
        tab_5: {type: 'text'},
        tab_6: {type: 'text'},
        tab_7: {type: 'text'},
        tab_8: {type: 'text'},
        tab_9: {type: 'text'},
        tab_settings_0: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: true},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_1: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: true},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_2: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_3: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_4: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_5: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_6: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_7: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_8: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
        tab_settings_9: {
            type: 'tab-settings-element',
            default: {
                removable: false,
                config: {
                    active: {source: 'static', value: false},
                    title: {source: 'static', value: null, entity: 'snippet'},
                },
            },
        },
    },
});
Component.register('product-description',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-description/component'));
Component.register('product-description-preview',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-description/preview'));

Service('cmsService').registerCmsElement({
    name: 'product-description',
    component: 'product-description',
    previewComponent: 'product-description-preview',
    label: 'rustymcfly.hogenbejntheme.product-description',
    allowedPageTypes: ['product_detail'],
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            entity: {
                name: 'product',
            },
        },
    },
    defaultData: {
        product: {
            name: 'Lorem Ipsum dolor',
            productNumber: 'XXXXXX',
            minPurchase: 1,
            deliveryTime: {
                name: '1-3 days',
            },
            price: [
                {gross: 0.00},
            ],
        },
    },
    collect: Service('cmsService')["getCollectFunction"](),
});


Component.register('product-properties',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-properties/component'));

Component.register('product-properties-preview',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-properties/preview'));


const criteria = new Data.Criteria(1, 25);
criteria.addAssociation('properties');

Service('cmsService').registerCmsElement({
    name: 'product-properties',
    component: 'product-properties',
    previewComponent: 'product-properties-preview',
    label: 'rustymcfly.hogenbejntheme.product-properties',
    allowedPageTypes: ['product_detail'],
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            entity: {
                name: 'product',
                criteria: criteria,
            },
        },
    },
    defaultData: {
        product: {
            name: 'Lorem Ipsum dolor',
            productNumber: 'XXXXXX',
            minPurchase: 1,
            deliveryTime: {
                name: '1-3 days',
            },
            properties: [
                {
                    name: 'default',
                    group: {
                        name: 'defaultGroup',
                    },
                    groupId: 'abc',
                },
            ],
            price: [
                {gross: 0.00},
            ],
        },
    },
    collect: Service('cmsService')["getCollectFunction"](),
});

Component.register('product-review',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-review/component'));
Component.register('product-review-preview',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/product-review/preview'));

Service('cmsService').registerCmsElement({
    label: 'rustymcfly.hogenbejntheme.product-review',
    name: 'product-review',
    previewComponent: 'product-review-preview',
    component: 'product-review',
    allowedPageTypes: ['product_detail'],
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            entity: {
                name: 'product',
                criteria: criteria,
            },
        },
    },
    defaultData: {
        product: {
            name: 'Lorem Ipsum dolor',
            productNumber: 'XXXXXX',
            minPurchase: 1,
            deliveryTime: {
                name: '1-3 days',
            },
            reviews: [
                {
                    name: 'default',
                    comment: 'asd',
                    points: 4.5,
                    customer: {
                        firstName: 'max',
                        lastName: 'mustermann',
                    },
                },
            ],
            price: [
                {gross: 0.00},
            ],
        },
    },
    collect: Service('cmsService')["getCollectFunction"](),
});


Component.register('tab-settings-element',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/tab-settings-element/component'));
Component.register('tab-settings-element-config',
    // istanbul ignore next
    () => import('./module/sw-cms/elements/tab-settings-element/config'));


Service('cmsService').registerCmsElement({
    name: 'tab-settings-element',
    component: 'tab-settings-element',
    configComponent: 'tab-settings-element-config',
    hidden: true,
    removable: false,
    defaultConfig: {
        active: {source: 'static', value: true},
        title: {source: 'static', value: null, entity: 'snippet'},
    },
});