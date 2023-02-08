import { defineComponent, toRefs } from 'vue'
import './base-modal.scss'

export default defineComponent({
  name: 'MlBaseModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { modelValue } = toRefs(props)
    return () => (
      <div>
        {modelValue.value && (
          <div class="ml-base-modal">
            {/* 透明遮罩 */}
            <div
              className="ml-base-modal__mask"
              onClick={() => {
                emit('update:modelValue', false)
              }}
            ></div>
            {/* 具体内容 */}
            {slots.default?.()}
          </div>
        )}
      </div>
    )
  }
})
