import type { PropType, ExtractPropTypes } from 'vue'

export const breadcrumbProps = {
  // 分隔符
  separator: {
    type: String,
    default: '>'
  }
} as const
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
