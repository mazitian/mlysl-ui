# # Upload 文件上传

## 基础功能

点击按钮触发上传方法。

:::demo

```vue
<script setup lang="ts">
import { ref } from 'vue'
const getFilesList = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <ml-upload @get-files-list="getFilesList">
    <ml-button type="primary"></ml-button>
  </ml-upload>
</template>
```

:::

## 拖拽上传

将文件拖拽到文本框进行上传。

:::demo

```vue
<script setup lang="ts">
import { ref } from 'vue'
const getFilesList = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <ml-upload drag @get-files-list="getFilesList" />
</template>
```

:::

## API

### 属性

| 参数 | 说明           | 类型      | 可选值 | 默认  |
| ---- | -------------- | --------- | ------ | ----- |
| drag | 是否为拖动上传 | `boolean` | —      | false |

### 方法

| 方法名         | 说明           | 参数 |
| -------------- | -------------- | ---- |
| get-files-list | 获取选中的文件 | —    |

### 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 自定义触发上传的元素 |
