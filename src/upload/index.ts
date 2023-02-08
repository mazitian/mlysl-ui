import { App } from 'vue'
import Upload from './src/upload'

export { Upload }
export default {
  install(app: App) {
    app.component(Upload.name, Upload)
  }
}
