import { App } from 'vue'
import Popover from './src/popover'

export { Popover }

export default {
  install(app: App) {
    app.component(Popover.name, Popover)
  }
}
