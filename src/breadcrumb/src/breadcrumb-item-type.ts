import type { PropType, ExtractPropTypes } from 'vue'

export const breadcrumbItemProps = {
  // 路由跳转目标,同vue-router的to属性
  to: {
    type: Object,
    default: () => {}
  },
  // 如果该属性为true，导航将不会留下历史记录
  replace: {
    type: Boolean,
    default: false
  },
  separatorItem: {
    type: String,
    default: ''
  }
} as const
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
