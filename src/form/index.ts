import { App } from 'vue'
import Form from './src/form'
import FormItem from './src/form-item'

export { Form, FormItem }
export default {
  install(app: App) {
    app.component(Form.name, Form)
    app.component(FormItem.name, FormItem)
  }
}
