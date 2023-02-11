import { computed, defineComponent } from 'vue'
import '../style/container.scss'
import { AsideProps, asideProps } from './container-type'

export default defineComponent({
  name: 'MlAside',
  props: asideProps,
  setup(props: AsideProps, { slots }) {
    const style = computed(() => {
      return {
        width: props.width
      }
    })
    return () => (
      <div class="ml-aside" style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})
