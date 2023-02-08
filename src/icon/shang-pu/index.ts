import { App } from 'vue'
import { ShangPuIcon } from './shang-pu'

export { ShangPuIcon }
export default {
  install(app: App) {
    app.component('ShangPuIcon', ShangPuIcon)
  }
}
