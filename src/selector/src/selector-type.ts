import type { PropType, ExtractPropTypes } from 'vue'

export type ISelectSize = 'sm' | 'md' | 'lg'

export const selectorProps = {
  placeholder: {
    type: String,
    default: '请选择～'
  },
  option: {
    type: Object as PropType<Array<ISelectorMenu>>,
    required: true
  },
  size: {
    type: String as PropType<ISelectSize>,
    default: 'md'
  }
} as const
export type SelectorProps = ExtractPropTypes<typeof selectorProps>

export interface ISelectorMenu {
  value: string
  label: string
  disabled?: boolean
}
