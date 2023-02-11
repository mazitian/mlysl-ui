import { defineComponent, inject } from 'vue'
import '../style/container.scss'

export default defineComponent({
  name: 'MlMain',
  setup(props, { slots }) {
    return () => <div class="ml-main">{slots.default?.()}</div>
  }
})
