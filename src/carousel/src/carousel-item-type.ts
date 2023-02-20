import type { PropType, ExtractPropTypes } from 'vue'

export const carouselItemProps = {
  key: Number
} as const
export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>
