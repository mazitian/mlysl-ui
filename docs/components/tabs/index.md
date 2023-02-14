# Tabs 标签页

## 基础

ml-tabs 包裹若干 ml-tab 即可，设置`v-model`控制激活页签 id

:::demo

```vue
<template>
  <ml-tabs v-model="activeTab">
    <ml-tab id="tab1" title="Tab1">Tab1 Content</ml-tab>
    <ml-tab id="tab2" title="Tab2">Tab2 Content</ml-tab>
    <ml-tab id="tab3" title="Tab3">Tab3 Content</ml-tab>
  </ml-tabs>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
```

:::

## 关闭、新增标签

添加 closable 和 addable 课关闭、新增标签。

:::demo 添加 closable 和 addable 关闭、新增标签。

```vue
<template>
  <ml-tabs v-model="activeTab" closable addable>
    <ml-tab id="tab1" title="Tab1">Tab1 Content</ml-tab>
    <ml-tab id="tab2" title="Tab2">Tab2 Content</ml-tab>
    <ml-tab id="tab3" title="Tab3">Tab3 Content</ml-tab>
  </ml-tabs>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```

:::

## API

### Tabs 属性

| 参数       | 说明                    | 类型      | 可选值 | 默认 |
| ---------- | ----------------------- | --------- | ------ | ---- |
| modelValue | 绑定当前点击状态的`tab` | `string`  | —      | —    |
| closable   | 是否关闭标签            | `boolean` | —      | —    |
| addable    | 是否新增标签            | `boolean` | —      | —    |

### Tabs 插槽

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 自定义默认内容 | Tab    |

### Tab 属性

| 参数  | 说明     | 类型     | 可选值 | 默认 |
| ----- | -------- | -------- | ------ | ---- |
| id    | 唯一标识 | `string` | —      | —    |
| title | 标签名   | `string` | —      | —    |

### Tab 插槽

| 插槽名  | 说明           | 子标签 |
| ------- | -------------- | ------ |
| default | 标签展示的内容 | —      |
