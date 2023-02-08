import type { PropType, ExtractPropTypes } from 'vue'

export type ILinkType = 'primary' | 'secondary' | 'info' | 'warning' | 'danger'

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
  }
} as const
export type LinkProps = ExtractPropTypes<typeof linkProps>
