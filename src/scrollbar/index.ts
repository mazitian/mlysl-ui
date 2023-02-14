import type { App } from 'vue'
import Scrollbar from './src/scrollbar'

export { Scrollbar }

export default {
  install(app: App): void {
    app.component(Scrollbar.name, Scrollbar)
  }
}
