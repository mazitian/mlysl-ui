import { App } from 'vue'
import Link from './src/link'

export { Link }
export default {
  install(app: App) {
    app.component(Link.name, Link)
  }
}
