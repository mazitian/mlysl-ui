import { defineComponent, getCurrentInstance, inject, toRefs } from 'vue'
import {
  BreadcrumbItemProps,
  breadcrumbItemProps
} from './breadcrumb-item-type'
import './breadcrumb.scss'

export default defineComponent({
  name: 'MlBreadcrumbItem',
  props: breadcrumbItemProps,
  setup(props: BreadcrumbItemProps, { slots }) {
    const { to, replace, separatorItem } = toRefs(props)
    const separator = inject('separator')
    // 获取vue实例
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router
    // 点击事件
    const onClick = () => {
      if (!to.value || !router) return
      replace.value ? router.replace(to.value) : router.push(to.value)
    }
    const itemClass = to.value ? 'is-link' : ''
    return () => (
      <span class="ml-breadcrumb__item">
        <span
          class={`ml-breadcrumb__item--text ${itemClass}`}
          onClick={onClick}
        >
          {slots.default?.()}
        </span>
        <span class="ml-breadcrumb__item--separator">
          {separatorItem.value ? separatorItem.value : separator}
        </span>
      </span>
    )
  }
})
