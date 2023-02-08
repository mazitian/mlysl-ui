import { App } from 'vue'
import Input from './src/input'

export { Input }
export default {
  install(app: App) {
    app.component(Input.name, Input)
  }
}
