# Card 卡片

## 基础用法

卡片由 `header`、`content`、`handle` 三部分组成，`header`、`handle` 可选

:::demo

```vue
<template>
  <ml-card style="width:400px">
    <template #header>
      <div>
        <div>标题</div>
      </div>
    </template>
    <div>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </div>
    <template #handle>
      <div>
        <ml-button type="primary" block></ml-button>
      </div>
    </template>
  </ml-card>
</template>
```

:::

## 简单卡片

只显示卡片的`content`部分

:::demo

```vue
<template>
  <ml-card style="width:400px">
    <div>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </div>
  </ml-card>
</template>
```

:::

## 图片卡片

可以展示更多的内容通过 `body-style` 自定义样式，可使内容更加多样

:::demo

```vue
<template>
  <ml-card style="width:400px" :body-style="{ padding: '0px' }">
    <img src="http://localhost:5173/logo.png" />
  </ml-card>
</template>
```

:::

## 阴影卡片

可以自定义卡片阴影的展示。通过 `shadow` 属性设置卡片阴影，属性值为：`always`、`hover`、`never`。

:::demo

```vue
<template>
  <ml-card shadow="always" class="card">
    <template #header>
      <div>
        <div>有阴影</div>
      </div>
    </template>
    <div>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </div>
  </ml-card>
  <ml-card shadow="hover" class="card">
    <template #header>
      <div>
        <div>hover才有阴影</div>
      </div>
    </template>
    <div>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </div>
  </ml-card>
  <ml-card shadow="never" class="card">
    <template #header>
      <div>
        <div>永远没有阴影</div>
      </div>
    </template>
    <div>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </div>
  </ml-card>
</template>

<style scoped>
.card {
  width: 400px;
  margin-top: 10px;
}
</style>
```

:::

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| body-style | 卡片的 CSS 样式 | `object` | - | - |
| shadow | 阴影的显示方式 | `string` | `always` / `hover` / `never` | `always` |

### 事件

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义内容     |
| header  | 卡片的标题区域 |
| handle  | 卡片的操作区域 |
