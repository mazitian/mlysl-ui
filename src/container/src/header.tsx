import { computed, defineComponent } from 'vue'
import '../style/container.scss'
import { HeaderProps, headerProps } from './container-type'

export default defineComponent({
  name: 'MlHeader',
  props: headerProps,
  setup(props: HeaderProps, { slots }) {
    const style = computed(() => {
      return {
        height: props.height
      }
    })
    return () => (
      <div class="ml-header" style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})
