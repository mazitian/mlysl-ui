# Icon 图标

::: tip
推荐通过 iconfont 自行导入图标
:::

## 基本用法

设置图标字体中 name 或者远程资源地址。

:::demo

```vue
<template>
  <div class="icon">
    <ml-icon name="vuejs" :size="30"></ml-icon>
    <ml-icon name="react" :size="30"></ml-icon>
    <ml-icon name="angular" :size="30"></ml-icon>
    <ml-icon name="https://vitejs.dev/logo.svg" :size="30"></ml-icon>
  </div>
</template>
<style>
.icon {
  display: flex;
  justify-content: space-around;
}
</style>
```

:::

## 尺寸

设置 size 可以设置图标尺寸

:::demo

```vue
<template>
  <div class="icon">
    <ml-icon name="vuejs" size="30px"></ml-icon>
    <ml-icon name="react" :size="50"></ml-icon>
    <ml-icon name="angular" :size="70"></ml-icon>
  </div>
</template>
<style>
.icon {
  display: flex;
  justify-content: space-around;
}
</style>
```

:::

## 颜色

设置 color 可以设置图标颜色

:::demo

```vue
<template>
  <div class="icon">
    <ml-icon name="vuejs" size="30px" color="green"></ml-icon>
    <ml-icon name="react" :size="30" color="blue"></ml-icon>
    <ml-icon name="angular" :size="30" color="red"></ml-icon>
  </div>
</template>
<style>
.icon {
  display: flex;
  justify-content: space-around;
}
</style>
```

:::

## 内置图标

:::demo

```vue
<template>
  <div class="icon">
    <arrow-down-icon :size="40"></arrow-down-icon>
    <shang-pu-icon :size="40"></shang-pu-icon>
    <close-icon :size="40"></close-icon>
    <down-line-icon :size="40"></down-line-icon>
  </div>
</template>
<style>
.icon {
  display: flex;
  justify-content: space-around;
}
</style>
```

:::

## API

### 属性

| 属性名 | 说明               | 类型                | 可选值 | 默认值 |
| ------ | ------------------ | ------------------- | ------ | ------ |
| name   | 图标的名称或者链接 | `String`            | -      | -     |
| size   | 图标的尺寸         | `String` / `Number` | -      | -      |
| color  | 字体图标的颜色     | `String`            | -      | -      |

<style>
:root {
  --vp-custom-block-tip-bg: #EEF5FE;
  --vp-custom-block-tip-text: #6C9BEE;
}
</style>