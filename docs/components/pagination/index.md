# 分页

## 基础用法

通过设置`total`属性设置分页总条目数

:::demo

```vue
<template>
  <ml-pagination :total="1"></ml-pagination>
  <ml-pagination :total="11"></ml-pagination>
  <ml-pagination :total="70"></ml-pagination>
</template>
```

:::

## 基础

前4页显示右边更多按钮，后4页显示左边最多按钮，中间显示左、右更多按钮

:::demo

```vue
<template>
  <ml-pagination :total="80"></ml-pagination>
  <ml-pagination :total="90"></ml-pagination>
  <ml-pagination :total="1000"></ml-pagination>
</template>
```

:::
