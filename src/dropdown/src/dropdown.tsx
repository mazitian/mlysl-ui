import { arrow, autoPlacement, computePosition, offset } from '@floating-ui/dom'
import {
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch
} from 'vue'
import { DropdownProps, dropdownProps } from './dropdown-type'
import './dropdown.scss'

export default defineComponent({
  name: 'MlDropdown',
  props: dropdownProps,
  setup(props: DropdownProps, { slots }) {
    const { data, trigger, showArrow, placement } = toRefs(props)
    const isShow = ref(false)
    const host = ref()
    const dropdown = ref()
    // 计算定位 第一个参数是引用元素，第二个参数是浮动元件将被定位 参数三是如何定位
    // 解构出坐标x, y
    // 拿到坐标之后设置overlay样式
    // 用户改变modelValue时要重新执行所以写成函数
    const updatePosition = () => {
      // 中间件
      const middleware = []
      if (showArrow.value) {
        middleware.push(offset(8))
      }
      // 如果用户没有指定placement，则自动调整定位
      if (!placement.value) {
        middleware.push(autoPlacement())
      }

      computePosition(host.value, dropdown.value, {
        middleware,
        placement: placement.value || 'top'
      }).then(({ x, y, middlewareData, placement }) => {
        // 官网建议Object.assign
        Object.assign(dropdown.value.style, {
          left: x + 'px',
          top: y + 'px'
        })
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
          }, 100)
        })
        host.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 100)
          dropdown.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
        dropdown.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 100)
          host.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
      }
      if (trigger.value === 'manual') {
        host.value.addEventListener('contextmenu', (e: any) => {
          isShow.value = true
          e.preventDefault()
        })
        host.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 100)
          dropdown.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
        dropdown.value.addEventListener('mouseleave', () => {
          const t = setTimeout(() => {
            isShow.value = false
          }, 100)
          host.value.addEventListener('mouseenter', () => {
            clearTimeout(t)
          })
        })
      }
    })
    return () => (
      <>
        <span class="ml-dropdown__host" ref={host}>
          {slots.default?.()}
        </span>
        <div class="ml-dropdown" ref={dropdown} v-show={isShow.value}>
          {data.value.map(item => (
            <div class="ml-dropdown__item" onClick={item.click}>
              {item.label}
            </div>
          ))}
        </div>
      </>
    )
  }
})
