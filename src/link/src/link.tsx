import { defineComponent, inject, toRefs } from 'vue'
import { LinkProps, linkProps } from './link-type'
import './link.scss'

export default defineComponent({
  name: 'MlLink',
  props: linkProps,
  setup(props: LinkProps, { slots }) {
    const { type, disabled, underline, href } = toRefs(props)
    const isDisabled = disabled.value ? 'is-disabled' : '' // 新增
    const isUnderline = underline.value ? 'is-underline' : '' // 新增
    return () => (
      <a
        class={`ml-link ml-link--${type.value} ${isDisabled} ${isUnderline} ${type.value}`}
        href={disabled.value ? '' : href.value}
      >
        {slots.default?.()}
      </a>
    )
  }
})
