import { App } from 'vue'
import Breadcrumb from './src/breadcrumb'
import BreadcrumbItem from './src/breadcrumb-item'

export { Breadcrumb, BreadcrumbItem }
export default {
  install(app: App) {
    app.component(Breadcrumb.name, Breadcrumb)
    app.component(BreadcrumbItem.name, BreadcrumbItem)
  }
}
