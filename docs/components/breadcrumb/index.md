# Breadcrumb 面包屑

## 基础用法

:::demo

```vue
<template>
  <ml-breadcrumb separator="/">
    <ml-breadcrumb-item>homepage</ml-breadcrumb-item>
    <ml-breadcrumb-item
      ><a href="/">promotion management</a></ml-breadcrumb-item
    >
    <ml-breadcrumb-item>promotion list</ml-breadcrumb-item>
    <ml-breadcrumb-item>promotion detail</ml-breadcrumb-item>
  </ml-breadcrumb>
</template>
```

:::

## 路由跳转

:::demo

```vue
<template>
  <ml-breadcrumb separator="/">
    <ml-breadcrumb-item :to="{ path: '/' }">homepage</ml-breadcrumb-item>
    <ml-breadcrumb-item
      ><a href="/">promotion management</a></ml-breadcrumb-item
    >
    <ml-breadcrumb-item>promotion list</ml-breadcrumb-item>
    <ml-breadcrumb-item>promotion detail</ml-breadcrumb-item>
  </ml-breadcrumb>
</template>
```

:::

## 自定义分隔符

:::demo

```vue
<template>
  <ml-breadcrumb separator="/">
    <ml-breadcrumb-item :to="{ path: '/' }">homepage</ml-breadcrumb-item>
    <ml-breadcrumb-item separatorItem="~"
      ><a href="/">promotion management</a></ml-breadcrumb-item
    >
    <ml-breadcrumb-item separatorItem=">">promotion list</ml-breadcrumb-item>
    <ml-breadcrumb-item>promotion detail</ml-breadcrumb-item>
  </ml-breadcrumb>
</template>
```

:::

## Breadcrumb API

### Breadcrumb 属性

| 名称      | 说明   | 类型     | 默认值 |
| :-------- | :----- | :------- | :----- |
| separator | 分隔符 | `string` | >      |

### Breadcrumb 插槽

| 名称    | 说明           | 子标签         |
| :------ | :------------- | -------------- |
| default | 自定义默认内容 | BreadcrumbItem |

## BreadcrumbItem API

### BreadcrumbItem 属性

| 名称 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| to | 路由跳转目标，同 `vue-router` 的 `to` 属性 | `string` / `object` | — |
| replace | 如果设置该属性为 `true`, 导航将不会留下历史记录 | `boolean` | false |
| separatorItem | 自定义分隔符 | `string` | — |

### BreadcrumbItem 插槽

| 名称    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |
