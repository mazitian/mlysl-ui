# Carousel 走马灯

## 基础用法

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay has-dot has-director>
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>
```

:::

## 自动轮播

设置 `autoplay` 实现自动轮播，通过传入 `duration` 控制轮播时间，默认为 3000ms

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay :duration="1000">
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>
```

:::

## 修改首次展示的元素

设置 `initial` 在 修改首次轮播的元素索引

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay :initial="3">
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>
```

:::

## 切换箭头

添加 `has-director` 在 `hover` 状态下显示切换箭头

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay has-director>
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>
```

:::

## 指示器

添加 `has-dot` 显示底部指示器

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay has-dot>
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>
```

:::

## 自定义指示器颜色

设置 `dot-bg-color` 更改指示器颜色

:::demo

```vue
<template>
  <div class="ml-carousel">
    <ml-carousel autoplay has-dot has-director dot-bg-color="#7693f5">
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="ml-carousel-item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel-item>
  </div>
</template>
```

:::

## API

### 属性

| 属性名       | 说明                   | 类型      | 可选值 | 默认值    |
| ------------ | ---------------------- | --------- | ------ | --------- |
| autoplay     | 是否自动轮播           | `boolean` | -      | false     |
| duration     | 设置轮播时间           | `number`  | —      | 3000      |
| initial      | 设置开始轮播的元素索引 | `number`  | —      | 0         |
| has-dot      | 是否显示指示器         | `boolean` | —      | false     |
| has-director | 是否显示切换箭头       | `boolean` | —      | false     |
| dot-bg-color | 设置指示器颜色         | `string`  | —      | `#C46C82` |

<style>
.ml-carousel {
  height: 280px;
}
.ml-carousel-item {
  line-height: 240px !important;
  margin: 0;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: larger;
  background-color: #3b4c76;
}
</style>
