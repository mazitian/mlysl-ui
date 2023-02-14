import type { PropType, ExtractPropTypes } from 'vue'

export type ILinkType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export const linkProps = {
  type: {
    type: String as PropType<ILinkType>,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '/'
  }
} as const
export type LinkProps = ExtractPropTypes<typeof linkProps>
