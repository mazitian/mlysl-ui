# Link 文字链接

## 基本功能

:::demo

```vue
<template>
  <div class="link">
    <ml-link type="primary" class="primary" href="https://cn.vuejs.org/">primary</ml-link>
    <ml-link type="success" class="success">success</ml-link>
    <ml-link type="warning" class="warning">warning</ml-link>
    <ml-link type="danger" class="danger">danger</ml-link>
    <ml-link type="info" class="info">info</ml-link>
  </div>
</template>
```

:::

## 禁用状态

:::demo

```vue
<template>
  <div class="link">
    <ml-link type="primary" class="primary-distbled" disabled>primary</ml-link>
    <ml-link type="success" class="success-distbled" disabled>success</ml-link>
    <ml-link type="warning" class="warning-distbled" disabled>warning</ml-link>
    <ml-link type="danger" class="danger-distbled" disabled>danger</ml-link>
    <ml-link type="info" class="info-distbled" disabled>info</ml-link>
  </div>
</template>
```

:::

## 下划线

:::demo

```vue
<template>
  <div class="link">
    <ml-link type="primary" class="primary" underline>primary</ml-link>
    <ml-link type="success" class="sucesss" underline>success</ml-link>
    <ml-link type="warning" class="warning" underline>warning</ml-link>
    <ml-link type="danger" class="danger" underline>danger</ml-link>
    <ml-link type="info" class="info" underline>info</ml-link>
  </div>
</template>
```

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | --- | --- | --- | --- |
| href | 超链接 | `String` | — | `/` |
| type | 类型 | `String` | `primary` / `success` / `warning` / `dange`r / `info` | — |
| disabled | 是否禁用 | `Boolean` | — | false |
| underline | 是否显示下划线 | `Boolean` | — | false |

<style>
  .link > * {
    margin-right: 15px;
  }
</style>
