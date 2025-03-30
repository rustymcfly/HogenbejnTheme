

import { ComponentOptions } from 'vue';
import template from './template.html.twig';

export default <ComponentOptions<any>>{
  template,
  data() {
    return { openedTab: 'tab_0', block: this.$parent.block };
  },
  mounted() {
    setTimeout(() => {
      this.$forceUpdate();
    }, 1000);
  },
  methods: {
    getTabClasses(key) {
      const classes = {'tab-content': true, 'block': this.openedTab === key}
      classes[key] = true
      return classes
    },
    addItem() {
      const slot = this.block.slots.find(item => item.slot === 'tab_settings_' + this.settingsSlots.length);
      if (slot) {
        slot.config.active.value = true;
      }
      this.$forceUpdate();
    },
    // istanbul ignore next
    openTab(slot) {
      this.openedTab = slot.replace('_settings', '');
      this.$emit('tab-change', this.openedTab)
    },
  },
  computed: {
    // istanbul ignore next
    tabSlots() {
      return this.block.slots.filter((slotConfig: EntitySchema.Entity<'cms_slot'>) => !slotConfig.slot.includes('settings')).map((slotConfig: EntitySchema.Entity<'cms_slot'>) => slotConfig.slot);
    },
    // istanbul ignore next
    settingsSlots() {
      return this.block.slots.filter((slotConfig: EntitySchema.Entity<'cms_slot'>) => {
        return slotConfig.slot.includes('settings') && slotConfig.config.active?.value;
      }).map((slotConfig: EntitySchema.Entity<'cms_slot'>) => slotConfig.slot);
    },
  },
};
