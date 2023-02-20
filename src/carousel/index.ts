import { App } from 'vue'
import Carousel from './src/carousel'
import CarouselItem from './src/carousel-item'

export { Carousel, CarouselItem }

export default {
  install(app: App) {
    app.component(Carousel.name, Carousel)
    app.component(CarouselItem.name, CarouselItem)
  }
}
