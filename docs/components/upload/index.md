# # Upload 文件上传

## 基础功能

Menu 组件基本用法，传入`data`属性即可。 

:::demo Menu 组件基本用法，传入 data 属性

```vue
<script setup lang="ts">
import { ref } from 'vue'
const getFilesList = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <ml-upload multiple @getFilesList={getFilesList}>
    <ml-button></ml-button>
  </ml-upload>
</template>
```

:::
## 拖拽上传

Menu 组件基本用法，传入`data`属性即可。 

:::demo Menu 组件基本用法，传入 data 属性

```vue
<script setup lang="ts">
import { ref } from 'vue'
const getFilesList = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <ml-upload drag multiple @getFilesList={getFilesList}></ml-upload>
</template>
```

:::
