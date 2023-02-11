import { App } from 'vue'
import Container from './src/container'
import Header from './src/header'
import Main from './src/main'
import Footer from './src/footer'
import Aside from './src/aside'

export { Container, Header, Main, Footer, Aside }

export default {
  install(app: App) {
    app.component(Container.name, Container)
    app.component(Header.name, Header)
    app.component(Main.name, Main)
    app.component(Footer.name, Footer)
    app.component(Aside.name, Aside)
  }
}
