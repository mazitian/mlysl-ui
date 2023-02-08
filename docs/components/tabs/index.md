# Tabs 标签页

## 基础
ml-tabs包裹若干ml-tab即可，设置`v-model`控制激活页签id
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
添加closable和addable课关闭、新增标签。
:::demo 添加closable和addable课关闭、新增标签。
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