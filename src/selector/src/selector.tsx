import { defineComponent, onMounted, ref, toRefs, watch } from 'vue'
import { ISelectorMenu, SelectorProps, selectorProps } from './selector-type'
import focus from './utils'
import './selector.scss'

export default defineComponent({
  name: 'MlSelector',
  directives: {
    focus
  },
  props: selectorProps,
  emits: ['setItemValue'],
  setup(props: SelectorProps, { slots, emit }) {
    const { placeholder, option, size } = toRefs(props)
    const host = ref()
    const dropdown = ref()
    const inputValue = ref('')
    const searchData = ref<Array<ISelectorMenu>>([])
    const setItemValue = (item: any) => {
      inputValue.value = item.label
      emit('setItemValue', item.value)
    }
    onMounted(() => {
      searchData.value = option.value
    })
    watch(inputValue, newVal => {
      filterData(newVal)
    })
    const filterData = (value: string) => {
      searchData.value = option.value.filter(item => {
        return item.label.toLowerCase().includes(value.toLowerCase())
      })
    }
    return () => (
      <div class="ml-selector" v-focus>
        <div class={`ml-option ml-option--${size.value}`} ref={host}>
          <label class={'ml-option__placeholder'}>
            {inputValue.value.length > 0 ? '' : placeholder.value}
          </label>
          <input
            class="ml-option__input"
            type="text"
            v-model={inputValue.value}
          ></input>
          <span class="ml-option__icon1">
            <svg
              t="1675973421925"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6241"
              width="22"
              height="22"
            >
              <path
                d="M783.573333 368.426667a42.666667 42.666667 0 0 0-60.373333 0l-211.2 211.2-211.2-211.2a42.666667 42.666667 0 0 0-60.373333 60.373333l240.853333 240.853333a42.666667 42.666667 0 0 0 60.586667 0L783.573333 428.8a42.666667 42.666667 0 0 0 0-60.373333z"
                p-id="6242"
                fill="#cdcdcd"
              ></path>
            </svg>
          </span>
          <span class="ml-option__icon2">
            <svg
              t="1675973371457"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5810"
              width="22"
              height="22"
            >
              <path
                d="M923.733333 864L768 706.133333c53.333333-66.133333 83.2-149.333333 83.2-238.933333 0-211.2-172.8-384-384-384s-384 172.8-384 384 172.8 384 384 384c89.6 0 172.8-32 238.933333-83.2l157.866667 157.866667c17.066667 17.066667 42.666667 17.066667 59.733333 0 17.066667-19.2 17.066667-44.8 0-61.866667z m-456.533333-98.133333c-164.266667 0-298.666667-134.4-298.666667-298.666667s134.4-298.666667 298.666667-298.666667 298.666667 134.4 298.666667 298.666667-134.4 298.666667-298.666667 298.666667z"
                p-id="5811"
                fill="#cdcdcd"
              ></path>
              <path
                d="M469.333333 277.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667c59.733333 0 106.666667 46.933333 106.666667 106.666666 0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666666-42.666667c0-106.666667-85.333333-192-192-192z"
                p-id="5812"
                fill="#cdcdcd"
              ></path>
            </svg>
          </span>
        </div>
        {searchData.value.length > 0 ? (
          <div class={'ml-selector__menu'} ref={dropdown}>
            {searchData.value.map(item =>
              !item.disabled ? (
                <div
                  class={'ml-selector__menu--item'}
                  onClick={() => setItemValue(item)}
                >
                  {item.label}
                </div>
              ) : (
                <div
                  class={'ml-selector__menu--item ml-selector__menu--disabled'}
                >
                  {item.label}
                </div>
              )
            )}
          </div>
        ) : (
          <div class="ml-selector__menu text-center text-gray-400">No data</div>
        )}
      </div>
    )
  }
})
