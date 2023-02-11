import { ExtractPropTypes, PropType } from 'vue'

export type IDirection = 'horizontal' | 'vertical'

export const containerProps = {
  direction: {
    type: String as PropType<IDirection>,
    default: ''
  }
}

export const headerProps = {
  height: {
    type: String,
    default: '64px'
  }
}

export const asideProps = {
  width: {
    type: String,
    default: '300px'
  }
}

export const footerProps = {
  height: {
    type: String,
    default: '70px'
  }
}

export type ContainerProps = ExtractPropTypes<typeof containerProps>
export type HeaderProps = ExtractPropTypes<typeof headerProps>
export type AsideProps = ExtractPropTypes<typeof asideProps>
export type FooterProps = ExtractPropTypes<typeof footerProps>
