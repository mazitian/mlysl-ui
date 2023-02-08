import { Values } from 'async-validator'
import { defineComponent, computed, provide } from 'vue'
import { FormItemContext } from './form-item-type'
import { formContextToken, formProps, FormProps } from './form-type'

export default defineComponent({
  name: 'MlForm',
  props: formProps,
  emits: ['submit'],
  setup(props: FormProps, { slots, emit, expose }) {
    // 向下提供label——data
    const labelData = computed(() => ({
      layout: props.layout,
      labelSize: props.labelSize,
      labelAlign: props.labelAlign
    }))
    // 向下提供provide
    provide('LABEL_DATA', labelData)

    // 提供一个set存放待校验的items
    const formItems = new Set<FormItemContext>()
    const addItem = (item: FormItemContext) => formItems.add(item)
    const removeItem = (item: FormItemContext) => formItems.delete(item)
    // 提供表单的上下文给后代(formItem)使用
    provide(formContextToken, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem
    })

    const submit = (event: Event) => {
      event.preventDefault()
      emit('submit')
    }

    // 表单全局校验方法
    function validate(callback: (valid: boolean) => void) {
      const tasks: Array<Promise<Values>> = []
      formItems.forEach(item => tasks.push(item.validate()))
      Promise.all(tasks)
        .then(() => callback(true))
        .catch(() => callback(false))
    }
    // 对外暴露接口
    expose({
      validate
    })

    return () => (
      <form class="ml-form" onSubmit={submit}>
        {slots.default?.()}
      </form>
    )
  }
})
