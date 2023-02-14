# Selector 选择器

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `ml-option` 的 value 属性值

:::demo

```vue
<template>
  <ml-selector
    placeholder="请选择内容！"
    :option="option"
    @set-item-value="getItemValue"
  />
</template>
<script setup lang="ts">
const option = [
  {
    label: 'I m huashishuai',
    value: 'song0'
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won t Se',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
const getItemValue = (value: any) => {
  console.log(value)
}
</script>
```

:::

## 尺寸

提供 `sm` | `md` | `lg` 三种尺寸使用，默认为 `md`

:::demo

```vue
<template>
  <div class="selector">
    <ml-selector
      placeholder="请选择内容！"
      :option="option"
      @set-item-value="getItemValue"
      size="sm"
    />
    <ml-selector
      placeholder="请选择内容！"
      :option="option"
      @set-item-value="getItemValue"
    />
    <ml-selector
      placeholder="请选择内容！"
      :option="option"
      @set-item-value="getItemValue"
      size="lg"
    />
  </div>
</template>
<script setup lang="ts">
const option = [
  {
    label: 'I m huashishuai',
    value: 'song0'
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won t Se',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
const getItemValue = (value: any) => {
  console.log(value)
}
</script>
<style>
.selector > * {
  margin: 15px 0;
}
</style>
```

:::

## 有禁用的选项

在 `option` 中，设定 `disabled` 值为 `true`，即可禁用该选项

:::demo

```vue
<template>
  <ml-selector
    placeholder="请选择内容！"
    :option="option"
    @set-item-value="getItemValue"
  />
</template>
<script setup lang="ts">
const option = [
  {
    label: 'I m huashishuai',
    value: 'song0'
  },
  {
    label: 'Drive My Car',
    value: 'song1',
    disabled: true
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won t Se',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4',
    disabled: true
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
const getItemValue = (value: any) => {
  console.log(value)
}
</script>
```

:::

## API

### 属性

| 参数        | 说明         | 类型      | 可选值             | 默认     |
| ----------- | ------------ | --------- | ------------------ | -------- |
| option      | 定义数据数组 | `array`   | —                  | —        |
| size        | 尺寸         | `string`  | `sm` / `md` / `lg` | `md`     |
| disabled    | 是否禁用     | `boolean` | —                  | `false`  |
| label       | 菜单显示的值 | `string`  | —                  | —        |
| value       | 菜单传输的值 | `string`  | —                  | —        |
| placeholder | 预显示内容   | `string`  | —                  | 请选择～ |

<br/>

### 方法

| 方法名         | 说明                     | 参数 |
| -------------- | ------------------------ | ---- |
| set-item-value | 获取选中的菜单的 `value` | \_   |
