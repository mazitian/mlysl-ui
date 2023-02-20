import type { PropType, ExtractPropTypes } from 'vue'

export const carouselProps = {
  autoplay: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3000
  },
  initial: {
    type: Number,
    default: 0
  },
  hasDot: {
    type: Boolean,
    default: false
  },
  hasDirector: {
    type: Boolean,
    default: false
  },
  dotBgColor: {
    type: String,
    default: '#C46C82'
  }
} as const
export type CarouselProps = ExtractPropTypes<typeof carouselProps>
