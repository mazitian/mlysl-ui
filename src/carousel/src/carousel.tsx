import {
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  toRefs,
  watch
} from 'vue'
import { carouselProps, CarouselProps } from './carousel-type'
import '../style/carousel.scss'

export default defineComponent({
  name: 'MlCarousel',
  props: carouselProps,
  setup(props: CarouselProps, { slots, emit }) {
    const currentIndex = ref(props.initial)
    provide('currentIndex', currentIndex)
    const instance: any = getCurrentInstance()
    const itemLen = ref(0)
    const itemArr: number[] = []
    const directorShow = ref(false)
    for (let i = 0; i < instance.slots.default()[0].children.length; i++) {
      itemArr.push(i)
    }
    console.log(itemArr)
    let t: any = null
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }
    const stopInterval = () => {
      clearInterval(t)
      t = null
    }
    const setIndex = (dir: any) => {
      switch (dir) {
        case 'next':
          currentIndex.value += 1
          if (currentIndex.value === itemLen.value) {
            currentIndex.value = 0
          }
          break
        case 'prev':
          currentIndex.value -= 1
          if (currentIndex.value === -1) {
            currentIndex.value = itemLen.value - 1
          }
          break
        default:
          break
      }
    }
    watch(currentIndex, newVal => {
      currentIndex.value = newVal
    })
    onMounted(() => {
      itemLen.value = instance.slots.default()[0].children.length
      autoplay()
    })
    onBeforeUnmount(() => {
      stopInterval()
    })
    const dotClick = (index: number) => {
      currentIndex.value = index
    }
    return () => (
      <div
        class="ml-carousel"
        onMouseenter={() => {
          stopInterval()
          directorShow.value = true
        }}
        onMouseleave={() => {
          autoplay()
          directorShow.value = false
        }}
      >
        <div class="ml-carousel__inner">
          {props.hasDot ? (
            <div class="ml-carousel__dot">
              {itemArr.map((item: number) => (
                <div class="ml-carousel__dot--item">
                  <a
                    class="ml-carousel__dot--lk"
                    href="javascript:;"
                    onClick={() => dotClick(item)}
                    style={{
                      backgroundColor:
                        item === currentIndex.value ? props.dotBgColor : '#fff'
                    }}
                  ></a>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          {props.hasDirector ? (
            <>
              {' '}
              <div
                class="ml-carousel__director ml-carousel__director--left"
                v-show={directorShow.value}
                onClick={() => setIndex('prev')}
              >
                <svg
                  t="1676566363679"
                  class="ml-carousel__director--icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2425"
                  width="25"
                  height="25"
                >
                  <path
                    d="M679.424 212.8a42.666667 42.666667 0 0 0-61.696-58.88l-2.538667 2.688-249.493333 285.141333a128 128 0 0 0-3.626667 164.266667l3.626667 4.309333 249.493333 285.141334a42.666667 42.666667 0 0 0 66.538667-53.333334l-2.304-2.858666-249.514667-285.141334a42.666667 42.666667 0 0 1-2.346666-53.290666l2.346666-2.901334L679.424 212.8z"
                    fill="#fff"
                    p-id="2426"
                  ></path>
                </svg>
              </div>
              <div
                class="ml-carousel__director ml-carousel__director--right"
                v-show={directorShow.value}
                onClick={() => setIndex('next')}
              >
                <svg
                  t="1676566326803"
                  class="ml-carousel__director--icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1863"
                  width="25"
                  height="25"
                >
                  <path
                    d="M344.576 811.2a42.666667 42.666667 0 0 0 61.696 58.88l2.538667-2.688 249.493333-285.141333a128 128 0 0 0 3.626667-164.266667l-3.626667-4.309333L408.810667 128.533333a42.666667 42.666667 0 0 0-66.538667 53.333334l2.304 2.858666 249.514667 285.141334a42.666667 42.666667 0 0 1 2.346666 53.290666l-2.346666 2.901334-249.514667 285.141333z"
                    fill="#fff"
                    p-id="1864"
                  ></path>
                </svg>
              </div>
            </>
          ) : (
            ''
          )}
          {slots.default?.()}
        </div>
      </div>
    )
  }
})
