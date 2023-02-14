import { Placement } from '@floating-ui/dom'
import type { PropType, ExtractPropTypes, Component } from 'vue'

export type IDropdownTrigger = 'hover' | 'click' | 'manual'

export const dropdownProps = {
  data: {
    type: Object as PropType<Array<IDropdownNode>>,
    required: true
  },
  trigger: {
    type: String as PropType<IDropdownTrigger>,
    default: 'hover'
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
  disabled?: Boolean
  click?: () => void
}
