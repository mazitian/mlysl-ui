import { App } from 'vue'
import Selector from './src/selector'

export { Selector }
export default {
  install(app: App) {
    app.component(Selector.name, Selector)
  }
}
