import { App } from 'vue'
import Icon from './src/icon'

export { Icon }
export default {
  install(app: App) {
    app.component(Icon.name, Icon)
  }
}
