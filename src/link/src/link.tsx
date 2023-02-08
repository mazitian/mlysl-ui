import { defineComponent, inject, toRefs } from 'vue'
import { LinkProps, linkProps } from './link-type'
import './link.scss'

export default defineComponent({
  name: 'MlLink',
  props: linkProps,
  setup(props: LinkProps, { slots }) {
    const { type, disabled, underline } = toRefs(props)
    const isDisabled = disabled.value ? 'is-disabled' : '' // 新增
    const isUnderline = underline.value ? 'is-underline' : '' // 新增
    return () => (
      <a
        class={`ml-link ml-link--${type.value} ${disabled.value} ${isDisabled} ${isUnderline}`}
      >
        {slots.default?.()}
      </a>
    )
  }
})
