import { App } from 'vue'
import Dropdown from './src/dropdown'

export { Dropdown }

export default {
  install(app: App) {
    app.component(Dropdown.name, Dropdown)
  }
}
