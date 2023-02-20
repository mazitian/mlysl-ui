import {
  defineComponent,
  getCurrentInstance,
  inject,
  PropType,
  reactive,
  Transition
} from 'vue'
import { carouselItemProps, CarouselItemProps } from './carousel-item-type'
import '../style/carousel.scss'

export default defineComponent({
  name: 'MlCarouselItem',
  props: carouselItemProps,
  setup(props: CarouselItemProps, { slots, emit }) {
    const currentIndex: any = inject('currentIndex')
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance?.vnode.key
    })
    return () => (
      <>
        <Transition>
          {state.selfIndex === currentIndex.value ? (
            <div class="ml-carousel-item">{slots.default?.()}</div>
          ) : (
            ''
          )}
        </Transition>
      </>
    )
  }
})
