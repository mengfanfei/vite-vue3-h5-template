<template>
  <component :is="component" :class="className" aria-hidden="true">
    <use :href="iconName" :fill="color"/>
  </component>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#333',
      },
    },
    setup(props) {
      const component = computed(() => props.prefix === 'icon' ? 'svg' : 'i')
      const iconName = computed(() => `#${props.prefix}-${props.name}`)
      const className = computed(() => {
        if (props.prefix === 'icon') {
          return 'svg-icon'
        } else if (props.prefix === 'iconfont') {
          return 'iconfont icon-' + props.name
        }
      })
      return { component, iconName, className }
    },
  });
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>