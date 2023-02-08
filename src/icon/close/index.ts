import { App } from 'vue'
import { CloseIcon } from './close'

export { CloseIcon }
export default {
  install(app: App) {
    app.component('CloseIcon', CloseIcon)
  }
}
