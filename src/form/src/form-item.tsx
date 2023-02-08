import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref
} from 'vue'
import { formItemProps, FormItemProps, LabelData } from './form-item-type'
import './form-item.scss'
import { formContextToken } from './form-type'
import Validator from 'async-validator'

export default defineComponent({
  name: 'MlFormItem',
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    // 注入labelData 生成动态样式
    // 注入inject
    const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>
    const itemClasses = computed(() => ({
      'ml-form__item': true,
      'ml-form__item--horizontal': labelData.value.layout === 'horizontal',
      'ml-form__item--vertical': labelData.value.layout === 'vertical'
    }))

    // labelSize\labelAlign样式
    const labelClasses = computed(() => ({
      'ml-form__label': true,
      'ml-form__label--vertical': labelData.value.layout === 'vertical',
      [`ml-form__label--${labelData.value.labelAlign}`]:
        labelData.value.layout === 'horizontal',
      [`ml-form__label--${labelData.value.labelSize}`]:
        labelData.value.layout === 'horizontal'
    }))

    // 实现validate方法并提供给下级
    // 做校验的时候需要数据和校验规则（由form提供
    const formCtx = inject(formContextToken)
    const showMessage = ref(false)
    const errorMessage = ref('')
    // 拿出数据、校验规则
    const validate = () => {
      if (!formCtx) {
        // formItem没有在表单中使用
        console.warn('请在Form中使用FormItem')
        return Promise.reject('请在Form中使用FormItem')
      }
      if (!props.field) {
        console.warn('如果要校验当前项，请设置field字段')
        return Promise.reject('如果要校验当前项，请设置field字段')
      }
      // 不需要校验
      if (!formCtx.rules) {
        return Promise.resolve({ result: true })
      }
      const itemRules = formCtx.rules[props.field] || undefined
      if (!itemRules) {
        return Promise.resolve({ result: true })
      }

      // 获取校验规则和数值
      const value = formCtx.model[props.field]
      // 执行校验返回结果
      const validator = new Validator({ [props.field]: itemRules })
      return validator.validate({ [props.field]: value }, errors => {
        if (errors) {
          // 校验失败
          showMessage.value = true
          errorMessage.value = errors[0].message || '校验错误'
        } else {
          // 校验通过 清空
          showMessage.value = false
          errorMessage.value = ''
        }
      })
    }

    const formItemCtx = {
      validate
    }
    // 提供给后代使用
    provide('FORM_ITEM_CTX', formItemCtx)

    // 挂在后注册到formCtx中
    onMounted(() => {
      if (props.field) {
        formCtx?.addItem(formItemCtx)
      }
    })
    onUnmounted(() => {
      if (props.field) {
        formCtx?.removeItem(formItemCtx)
      }
    })
    return () => (
      <div class={itemClasses.value}>
        {/* label */}
        <span class={labelClasses.value}>{props.label}</span>
        {/* control控件 */}
        <div>{slots.default?.()}</div>
        {/* error message */}
        {showMessage.value && (
          <div class="error-message">{errorMessage.value}</div>
        )}
      </div>
    )
  }
})
