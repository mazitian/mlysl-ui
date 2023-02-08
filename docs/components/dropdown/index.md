# Dropdown 下拉菜单

## 基础用法

:::demo

```vue
<template>
  <ml-dropdown :data="data" trigger="hover">
    <ml-button type="text">
      Dropdown List
      <ml-icon
        name="angular"
        size="17px"
        color="red"
        style="margin-left: 4px"
      ></ml-icon>
    </ml-button>
  </ml-dropdown>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: '菜单1',
    id: '1',
    click: () => {
      alert('点击了菜单1')
    }
  },
  {
    label: '菜单2',
    id: '2'
  },
  {
    label: '菜单3',
    id: '3'
  },
  {
    label: '菜单4',
    id: '4'
  }
])
</script>
```

:::

## 图标

## 菜单禁用

## 触发方式

## 显示箭头

## 弹出位置

## 尺寸

## 自定义属性
