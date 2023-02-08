import { ExtractPropTypes, Prop, PropType, StyleValue } from 'vue'
const definePropType = <T>(val: any): PropType<T> => val
export type IShadowType = 'always' | 'hover' | 'never'
export const cardProps = {
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: ''
  },
  shadow: {
    type: String as PropType<IShadowType>,
    default: 'always'
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
