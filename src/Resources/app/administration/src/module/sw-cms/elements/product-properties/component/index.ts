import template from './template.html.twig';

const {Mixin, Data, Context} = Shopware;
const {Criteria} = Data;

export default {
    template,
    props: {
        element: {
            type: Object,
        }
    },
    mixins: [
        Mixin.getByName('cms-element'),
    ],
    inject: [
        'repositoryFactory',
    ],
    created() {
        this.createdComponent();
        // istanbul ignore next
        this.$store.subscribe(async ({type, payload}) => {
            if (type === 'cmsPageState/setCurrentDemoEntity') {
                return this.loadData(payload);
            }
        });
    },
    data() {
        return {
            loadedProperties: null as EntitySchema.EntityCollection<'property_group_option'>,
        };
    },
    computed: {
        product() {
            // istanbul ignore next
            if (this.currentDemoEntity) {
                return this.currentDemoEntity;
            }

            if (!this.element.data?.product) {
                return {
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
                };
            }
            // istanbul ignore next
            return this.element?.data?.product ?? null;
        },
        properties() {
            const helper = [];
            return (this.loadedProperties.length ? this.loadedProperties : this.product?.properties)?.filter(item => {
                if (!helper.includes(item.groupId)) {
                    return helper.push(item.groupId) + 1;
                }
            });
        },
    },
    methods: {
        async createdComponent() {
            this.initElementConfig('product-properties');
            this.initElementData('product-properties');
            await this.loadData(this.currentDemoEntity);
        },
        // istanbul ignore next
        async loadData(product?: EntitySchema.Entity<'product'>) {
            if (!product) {
                this.loadedProperties = [];
                return;
            }
            const criteria = new Criteria();
            criteria.addAssociation('properties');
            criteria.addAssociation('properties.group');
            criteria.getAssociationCriteria('properties').addFilter(Criteria.equals('group.visibleOnProductDetailPage', true));
            const {properties} = await this.repositoryFactory.create('product').get(product.id, Context.api, criteria);
            this.loadedProperties = properties;
            this.$forceUpdate();
        },
    },
};
