import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'MlIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    // 获取尺寸 可能会变所以计算属性
    const iconSize = computed(() =>
      typeof props.size === 'number' ? `${props.size}px` : props.size
    )

    // 远程
    const imgIcon = (
      <img
        src={props.name}
        style={{ width: iconSize.value, verticalAlign: 'middle' }}
      ></img>
    )
    // span
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{
          fontSize: iconSize.value,
          // 获取颜色
          color: props.color
        }}
      ></span>
    )

    const icon = /http|https/.test(props.name) ? imgIcon : fontIcon
    return () => icon
  }
})
