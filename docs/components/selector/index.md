# Selector 选择器

## 基础用法

:::demo

```vue
<template>
  <ml-selector
    placeholder="请选择内容！"
    :option="option"
    @set-item-value="getItemValue"
  ></ml-selector>
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
