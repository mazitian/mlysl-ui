import { computed, defineComponent, Component, VNode, ref } from 'vue'
import '../style/container.scss'
import { ContainerProps, containerProps } from './container-type'

export default defineComponent({
  name: 'MlContainer',
  props: containerProps,
  setup(props: ContainerProps, { slots }) {
    const styleClass = ref<string>('')
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some(vNode => {
          const tag = (vNode.type as Component).name
          return tag === 'MlHeader' || tag === 'MlFooter'
        })
      } else {
        return false
      }
    })
    if (isVertical.value === true) {
      styleClass.value = 'ml-container__horizontal'
    }
    return () => (
      <section class={`ml-container ${styleClass.value}`}>
        {slots.default?.()}
      </section>
    )
  }
})
