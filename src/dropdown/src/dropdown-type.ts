import { Placement } from '@floating-ui/dom'
import type { PropType, ExtractPropTypes, Component } from 'vue'

export const dropdownProps = {
  data: {
    type: Object as PropType<Array<IDropdownNode>>,
    required: true
  },
  trigger: {
    type: String,
    default: 'hover'
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  }
} as const
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>

export interface IDropdownNode {
  label: String
  id?: String
  click?: () => void
}
