# Button 按钮 💙

## 基础按钮

:::demo

```vue
<template>
  <ml-button></ml-button>
  <ml-button>button</ml-button>
</template>
```

:::

## 按钮类型 type

通过 `type` 属性设置按钮样式，可选：`primary` | `secondary` | `text`

:::demo

```vue
<template>
  <ml-button type="primary">Primary</ml-button>
  <ml-button>Secondary</ml-button>
  <ml-button type="text">Text</ml-button>
</template>
```

:::

## 按钮尺寸 size

通过 `size` 属性设置按钮样式，可选：`small` | `medium` | `large`

:::demo

```vue
<template>
  <div>
    <ml-button type="primary" size="small">Small</ml-button>
    <ml-button type="primary">Medium</ml-button>
    <ml-button type="primary" size="large">Large</ml-button>
  </div>
  ☼
  <div>
    <ml-button size="small">Small</ml-button>
    <ml-button>Medium</ml-button>
    <ml-button size="large">Large</ml-button>
  </div>
</template>
```

:::

## 禁用按钮 disabled

通过 disabled 属性禁用按钮

:::demo 

```vue
<template>
  <ml-button type="primary">Primary</ml-button>
  <ml-button type="primary" disabled>Disabled</ml-button>
</template>
```

:::

## 块级按钮 block

通过 `block` 属性设置按钮为块级

:::demo

```vue
<template>
  <ml-button type="primary" block>Confirm</ml-button>
  <ml-button block>Cancel</ml-button>
</template>
```

:::

## API

### 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | `button`的样式 | `String` | `primary` / `secondary` / `text` | `secondary` |
| size | `button`的尺寸 | `String` | `small` / `medium` / `large` | `medium` |
| disabled | 是否禁用 | `Boolean` | - | `false` |
| block | 是否为块级按钮 | `Boolean` | - | `false` |
