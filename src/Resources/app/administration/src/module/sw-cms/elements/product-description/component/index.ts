
import template from './template.html.twig';

const { Mixin } = Shopware;
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
  created () {
    this.createdComponent()
  },
  computed:{
    currentDemoEntity() {
      if (this.cmsPageState.currentMappingEntity === 'product') {
        return this.cmsPageState.currentDemoEntity;
      }
      return null;
    },
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
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          deliveryTime: {
            name: '1-3 days',
          },
          price: [
            { gross: 0.00 },
          ],
        };
      }
      // istanbul ignore next
      return this.element?.data?.product ?? null;
    },
    description() {
      return this.product?.description;
    },
  },

  methods: {
    createdComponent() {
      this.initElementConfig('product-description')
      this.initElementData('product-description')
    }
  },
};
