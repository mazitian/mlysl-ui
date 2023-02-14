import { defineComponent, inject, onMounted, ref, toRefs } from 'vue'
import { FormItemContext } from '../../form/src/form-item-type'
import { InputProps, inputProps } from './input-type'
import './input.scss'

export default defineComponent({
  name: 'MlInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { slots, emit }) {
    // 注入校验方法
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext

    const { size } = toRefs(props)
    const clearRef = ref()
    const inputRef = ref()

    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      formItem?.validate()
    }

    const clearIconClick = () => {
      emit('update:modelValue', '')
      inputRef.value.focus()
    }

    const disabledClass = props.disabled ? 'ml-input--disabled' : ''

    return () => (
      <div class={`ml-input__wrapper ${disabledClass}`}>
        <input
          class={`ml-input__input ml-input--${size.value}`}
          value={props.modelValue}
          onInput={onInput}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          ref={inputRef}
        ></input>
        <div class="ml-input__icon">
          {props.clearable ? (
            <span
              ref={clearRef}
              v-show={props.modelValue.length > 0 ? true : false}
              onClick={clearIconClick}
            >
              <svg
                t="1676220343706"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="876"
                width="13"
                height="13"
              >
                <path
                  d="M512.201 448.08L885.643 74.638c42.426-42.426 106.066 21.214 63.64 63.64L575.84 511.719l374.353 374.353c42.426 42.427-21.213 106.066-63.64 63.64L512.201 575.359 137.848 949.712c-42.426 42.426-106.066-21.213-63.64-63.64L448.563 511.72 75.12 138.278c-42.427-42.426 21.213-106.066 63.64-63.64L512.2 448.08z"
                  p-id="877"
                  fill="#8a8a8a"
                ></path>
              </svg>
            </span>
          ) : slots.icon ? (
            slots.icon()
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
})
