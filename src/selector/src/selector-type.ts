import type { PropType, ExtractPropTypes } from 'vue'

export const selectorProps = {
  placeholder: {
    type: String,
    default: '请选择～'
  },
  option: {
    type: Object as PropType<Array<ISelectorMenu>>,
    required: true
  }
} as const
export type SelectorProps = ExtractPropTypes<typeof selectorProps>

export interface ISelectorMenu {
  value: string
  label: string
}
