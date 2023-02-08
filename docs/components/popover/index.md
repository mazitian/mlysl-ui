# Popover 弹出信息

## 基础用法

:::demo

```vue
<template>
  <ml-popover
    show-arrow
    placement="bottom"
    title="Title"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <ml-button>host</ml-button>
    </template>
  </ml-popover>
  <ml-popover
    show-arrow
    placement="top"
    title="Title"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <ml-button>host</ml-button>
    </template>
  </ml-popover>
  <ml-popover
    show-arrow
    placement="left"
    title="Title"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <ml-button>host</ml-button>
    </template>
  </ml-popover>
  <ml-popover
    show-arrow
    placement="bottom"
    title="Title"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <ml-button>host</ml-button>
    </template>
  </ml-popover>
</template>
```

:::
