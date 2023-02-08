// button/src/button.tsx
import { defineComponent, toRefs } from 'vue'
import { cardProps, CardProps } from './card-type'
import './card.scss'

export default defineComponent({
  name: 'MlCard',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    const { bodyStyle, shadow } = toRefs(props)
    return () => (
      <div class={`ml-card ml-card__shadow--${shadow.value}`}>
        {slots.header?.() ? (
          <div class="ml-card__header">{slots.header?.()}</div>
        ) : (
          ''
        )}
        <div class="ml-card__content" style={bodyStyle.value}>
          {slots.default?.()}
        </div>
        {slots.handle?.() ? (
          <div class="ml-card__handle">{slots.handle?.()}</div>
        ) : (
          ''
        )}
      </div>
    )
  }
})
