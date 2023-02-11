# Container 容器

## 基础用法

:::demo

```vue
<template>
  <ml-container>
    <ml-header>Header</ml-header>
    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-main>Main</ml-main>
        <ml-footer>Footer</ml-footer>
      </ml-container>
    </ml-container>
  </ml-container>
</template>
```
:::

<style>
.ml-header,
.ml-aside,
.ml-main,
.ml-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.ml-main {
  height: 120px;
    color: #fff;
}
</style>