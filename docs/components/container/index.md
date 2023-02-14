# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<ml-container>`：外层容器。 当子元素中包含 `<ml-header>` 或 `<ml-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<ml-header>`：顶栏容器。

`<ml-aside>`：侧边栏容器。

`<ml-main>`：主要区域容器。

`<ml-footer>`：底栏容器。

## 常见页面布局

:::demo

```vue
<template>
  <ml-container>
    <ml-header>Header</ml-header>
    <ml-main>Main</ml-main>
  </ml-container>
</template>
```

:::

:::demo

```vue
<template>
  <ml-container>
    <ml-header>Header</ml-header>
    <ml-main>Main</ml-main>
    <ml-footer>Footer</ml-footer>
  </ml-container>
</template>
```

:::

:::demo

```vue
<template>
  <ml-container>
    <ml-aside width="200px">Aside</ml-aside>
    <ml-main>Main</ml-main>
  </ml-container>
</template>
```

:::

:::demo

```vue
<template>
  <ml-container>
    <ml-header>Header</ml-header>
    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-main>Main</ml-main>
    </ml-container>
  </ml-container>
</template>
```

:::

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

:::demo

```vue
<template>
  <ml-container>
    <ml-aside width="200px">Aside</ml-aside>
    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
    </ml-container>
  </ml-container>
</template>
```

:::

:::demo

```vue
<template>
  <ml-container>
    <ml-aside width="200px">Aside</ml-aside>
    <ml-container>
      <ml-header>Header</ml-header>
      <ml-main>Main</ml-main>
      <ml-footer>Footer</ml-footer>
    </ml-container>
  </ml-container>
</template>
```

:::

## Container API

### Container 属性

| 属性名 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| direction | 子元素的排列方向 | `string` | 子元素中有 `ml-header` 或 `ml-footer` 时为 `vertical`，否则为 `horizontal` |

### Container 插槽

| 插槽名 | 说明 | 子标签 |
| --- | --- | --- |
| default | 自定义默认内容 | `Container` / `Header` / `Aside` / `Main` / `Footer` |

## Header API

### Header 属性

| 属性名 | 说明     | 类型     | 默认 |
| ------ | -------- | -------- | ---- |
| height | 顶栏高度 | `string` | 64px |

### Header 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside 属性

| 属性名 | 说明       | 类型     | 默认  |
| ------ | ---------- | -------- | ----- |
| width  | 侧边栏宽度 | `string` | 300px |

### Aside 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer 属性

| 属性名 | 说明     | 类型     | 默认 |
| ------ | -------- | -------- | ---- |
| height | 底栏高度 | `string` | 70px |

### Footer 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

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
