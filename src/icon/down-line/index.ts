import { App } from 'vue'
import { DownLineIcon } from './down-line'

export { DownLineIcon }
export default {
  install(app: App) {
    app.component('DownLineIcon', DownLineIcon)
  }
}
