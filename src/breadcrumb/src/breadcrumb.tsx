import { defineComponent, inject } from 'vue'
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type'
import './breadcrumb.scss'

export default defineComponent({
  name: 'MlBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps, { slots }) {
    return () => (
      <div class="ml-breadcrumb" {...props}>
        {slots.default?.()}
      </div>
    )
  }
})
