import type { PropType, ExtractPropTypes } from 'vue'

export const breadcrumbItemProps = {
  // 路由跳转目标,同vue-router的to属性
  to: {
    type: String,
    default: ''
  },
  // 如果该属性为true，导航将不会留下历史记录
  replace: {
    type: Boolean,
    default: false
  },
  // 分隔符
  separator: {
    type: String,
    default: '>'
  },
  // 图标分隔符的图标名
  separatorIcon: {
    type: String,
    default: ''
  }
} as const
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
