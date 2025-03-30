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
    inject: [
        'repositoryFactory',
    ],
    mixins: [
        Mixin.getByName('cms-element'),
    ],
    data() {
        return {
            loadedReviews: [] as EntitySchema.EntityCollection<'product_review'>,
        };
    },
    created() {
        this.createdComponent();
        // istanbul ignore next
        this.$store.subscribe(async ({type, payload}) => {
            if (type === 'cmsPageState/setCurrentDemoEntity') {
                return this.loadData(payload);
            }
        });
    },
    computed: {
        product(): Partial<EntitySchema.Entity<'product'>> {
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
                    price: [
                        {gross: 0.00},
                    ],
                    productReviews: [] as EntitySchema.EntityCollection<'product_review'>,
                };
            }
            // istanbul ignore next
            return this.element?.data?.product ?? null;
        },
        reviews() {
            return this.loadedReviews.length ? this.loadedReviews : this.product?.productReviews || [];
        },
    },
    methods: {
        async createdComponent() {
            this.initElementConfig('product-review');
            this.initElementData('product-review');
            await this.loadData(this.currentDemoEntity);
        },
        // istanbul ignore next
        async loadData(product?: EntitySchema.Entity<'product'>) {
            if (!product) {
                this.loadedReviews = [];
                return;
            }
            const criteria = new Criteria();
            criteria.addAssociation('productReviews');
            criteria.addAssociation('productReviews.customer');
            const {
                productReviews,
            } = await this.repositoryFactory.create('product').get(product.id, Context.api, criteria);
            this.loadedReviews = productReviews;
            this.$forceUpdate();
        },
    },
};
