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
    const { separatorIcon, separator, to, replace } = toRefs(props)
    // 获取vue实例
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router
    // 点击事件
    const onClick = () => {
      if (!to.value || !router) return
      replace.value ? router.replace(to.value) : router.push(to.value)
      console.log(router)
    }
    return () => (
      <>
        <span class="ml-breadcrumb-item" onClick={onClick}>
          {slots.default?.()}
        </span>
        <span class="ml-breadcrumb-item__separator">
          {separatorIcon.value ? (
            <span>{separatorIcon.value}</span>
          ) : (
            <span>{separator.value}</span>
          )}
        </span>
      </>
    )
  }
})
