import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  toRefs,
  watch
} from 'vue'
import './popover.scss'
import {
  computePosition,
  arrow,
  offset,
  Placement,
  autoPlacement
} from '@floating-ui/dom'

export default defineComponent({
  name: 'MlPopover',
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    title: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    content: {
      type: String,
      default: 'this is content, this is content, this is content'
    },
    showArrow: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    // 从属性中获取关键值
    const { trigger, title, placement, content, showArrow } = toRefs(props)
    const isShow = ref(false)
    const host = ref()
    // 箭头元素
    const arrowRef = ref()

    // 浮动元素
    const overlay = ref()

    // 计算定位 第一个参数是引用元素，第二个参数是浮动元件将被定位 参数三是如何定位
    // 解构出坐标x, y
    // 拿到坐标之后设置overlay样式
    // 用户改变modelValue时要重新执行所以写成函数
    const updatePosition = () => {
      // 中间件
      const middleware = []
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }
      // 如果用户没有指定placement，则自动调整定位
      if (!placement.value) {
        middleware.push(autoPlacement())
      }

      computePosition(host.value, overlay.value, {
        middleware,
        placement: placement.value || 'top'
      }).then(({ x, y, middlewareData, placement }) => {
        // 官网建议Object.assign
        Object.assign(overlay.value.style, {
          left: x + 'px',
          top: y + 'px'
        })

        if (showArrow.value) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow!

          // 首先获取当前所在边 例如top-end
          const currentSide = placement.split('-')[0]
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[currentSide]

          const SIDE = ['top', 'right', 'bottom', 'left']

          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? prevIndex + 4 : prevIndex]

          // 每次计算结束，重新计算箭头定位样式
          Object.assign(arrowRef.value.style, {
            left: arrowX + 'px',
            top: arrowY + 'px',
            [staticSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }

    // 创建mutationobserver监听宿主元素的状态变化
    const mutationObserver = new MutationObserver(() => updatePosition())

    // 监听modelValue的变化 变化一次就重新计算定位
    watch(
      isShow,
      newVal => {
        // 当newValue为true，重新定位
        if (newVal) {
          nextTick(updatePosition)

          // 监听两个事件和宿主元素尺寸、定位变化
          host.value &&
            mutationObserver.observe(host.value, { attributes: true })
          window.addEventListener('resize', updatePosition)
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      // 默认为true
      { immediate: true }
    )
    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })

    onMounted(() => {
      if (trigger.value === 'click') {
        host.value.addEventListener('click', () => {
          isShow.value = !isShow.value
        })
      }
      if (trigger.value === 'hover') {
        host.value.addEventListener('mouseenter', () => {
          setTimeout(() => {
            isShow.value = true
          }, 200)
        })
        host.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 200)
          overlay.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
        overlay.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 200)
          host.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
      }
    })
    return () => (
      <>
        <span ref={host} class="ml-popover__host">
          {slots.reference?.()}
        </span>
        <div ref={overlay} class="ml-popover" v-show={isShow.value}>
          {/* 显示箭头 */}
          {showArrow.value && (
            <div class="ml-popover__arrow" ref={arrowRef}></div>
          )}
          <div class="ml-popover__title">{title.value}</div>
          <div class="ml-popover__content">{content.value}</div>
        </div>
      </>
    )
  }
})
