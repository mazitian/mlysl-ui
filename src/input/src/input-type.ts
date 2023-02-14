import type { PropType, ExtractPropTypes } from 'vue'

export type IInputType = 'text' | 'password'
export type IInputSize = 'sm' | 'md' | 'lg'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<IInputType>,
    default: 'text'
  },
  size: {
    type: String as PropType<IInputSize>,
    default: 'md'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>
