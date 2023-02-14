import { defineComponent, inject, provide, toRefs } from 'vue'
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type'
import './breadcrumb.scss'

export default defineComponent({
  name: 'MlBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps, { slots }) {
    const { separator } = toRefs(props)
    provide('separator', separator.value)
    return () => <div class="ml-breadcrumb">{slots.default?.()}</div>
  }
})
