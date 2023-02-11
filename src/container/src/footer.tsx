import { computed, defineComponent } from 'vue'
import '../style/container.scss'
import { FooterProps, footerProps } from './container-type'

export default defineComponent({
  name: 'MlFooter',
  props: footerProps,
  setup(props: FooterProps, { slots }) {
    const style = computed(() => {
      return {
        height: props.height
      }
    })
    return () => (
      <div class="ml-footer" style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})
