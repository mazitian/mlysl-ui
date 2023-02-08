// button/index.ts
import { App } from 'vue'
import Card from './src/card'

export { Card }

export default {
  install(app: App) {
    app.component(Card.name, Card)
  }
}
