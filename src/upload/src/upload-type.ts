import type { PropType, ExtractPropTypes } from 'vue'

export const uploadrProps = {
  drag: Boolean
} as const
export type UploadrProps = ExtractPropTypes<typeof uploadrProps>
