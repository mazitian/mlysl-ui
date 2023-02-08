import type { PropType, ExtractPropTypes } from 'vue'

export const uploadrProps = {
  multiple: Boolean,
  accept: {
    type: String,
    default: ''
  },
  drag: Boolean
} as const
export type UploadrProps = ExtractPropTypes<typeof uploadrProps>
