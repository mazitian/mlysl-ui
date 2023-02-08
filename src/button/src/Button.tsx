// button/src/button.tsx
import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import './button.scss'

export default defineComponent({
  name: 'MlButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 'ml-btn--block' : '' // 新增
    return () => {
      return (
        <button
          class={`ml-btn ${blockClass} ml-btn--${type.value} ml-btn--${size.value}`}
          disabled={disabled.value}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
