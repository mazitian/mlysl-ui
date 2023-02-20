# Popover 弹出信息

## 基础用法

传入 `title` 和 `content` 进行显示

:::demo

```vue
<template>
  <div class="popover">
    <ml-popover
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <down-line-icon :size="30"></down-line-icon>
      </template>
    </ml-popover>
    <ml-popover
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button> Dropdown List </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button type="text">
          Dropdown List
          <ml-icon
            name="angular"
            size="17px"
            color="red"
            style="margin-left: 4px"
          ></ml-icon>
        </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button type="secondary"> Dropdown List </ml-button>
      </template>
    </ml-popover>
  </div>
</template>
```

:::

## 显示箭头

通过添加 `showArrow` 属性使气泡包含箭头

:::demo

```vue
<template>
  <div class="popover">
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <down-line-icon :size="30"></down-line-icon>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button> Dropdown List </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button type="text">
          Dropdown List
          <ml-icon
            name="angular"
            size="17px"
            color="red"
            style="margin-left: 4px"
          ></ml-icon>
        </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ml-button type="secondary"> Dropdown List </ml-button>
      </template>
    </ml-popover>
  </div>
</template>
```

:::

## 触发方式

通过添加 `showArrow` 属性使气泡包含箭头

:::demo

```vue
<template>
  <ml-popover
    showArrow
    title="Title"
    content="this is content, this is content, this is content"
    trigger="hover"
  >
    <template #reference>
      <ml-button type="primary"> 鼠标移入 </ml-button>
    </template>
  </ml-popover>
  <span style="margin:10px"></span>
  <ml-popover
    showArrow
    title="Title"
    content="this is content, this is content, this is content"
    trigger="click"
  >
    <template #reference>
      <ml-button type="primary"> 单击左键 </ml-button>
    </template>
  </ml-popover>
</template>
```

:::

## 气泡显示的方向

通过添加 `showArrow` 属性使气泡包含箭头

:::demo

```vue
<template>
  <div class="popover">
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="top-start"
    >
      <template #reference>
        <ml-button> top-start </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="top"
    >
      <template #reference>
        <ml-button> top </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="top-end"
    >
      <template #reference>
        <ml-button> top-end </ml-button>
      </template>
    </ml-popover>
  </div>
  <br />
  <div class="popover">
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="left-start"
    >
      <template #reference>
        <ml-button> left-start </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="left"
    >
      <template #reference>
        <ml-button> left </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="left-end"
    >
      <template #reference>
        <ml-button> left-end </ml-button>
      </template>
    </ml-popover>
  </div>
  <br />
  <div class="popover">
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="right-start"
    >
      <template #reference>
        <ml-button> right-start </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="right"
    >
      <template #reference>
        <ml-button> right </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="right-end"
    >
      <template #reference>
        <ml-button> right-end </ml-button>
      </template>
    </ml-popover>
  </div>
  <br />
  <div class="popover">
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="bottom-start"
    >
      <template #reference>
        <ml-button> bottom-start</ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="bottom"
    >
      <template #reference>
        <ml-button> bottom </ml-button>
      </template>
    </ml-popover>
    <ml-popover
      showArrow
      title="Title"
      content="this is content, this is content, this is content"
      placement="bottom-end"
    >
      <template #reference>
        <ml-button> bottom-end </ml-button>
      </template>
    </ml-popover>
  </div>
</template>
```

:::

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | --- | --- | --- | --- |
| title | 定义标题 | `string` | — | — |
| content | 定义内容 | `string` | — | — |
| showArrow | 是否显示箭头 | `boolean` | — | `false` |
| trigger | 触发下拉菜单的形式 | `string` | `hover` / `click` / `manual` | `hover` |
| placement | 气泡出现的位置 | `string` | "top-start" / "top-end" / "right-start" / "right-end" / "bottom-start" / "bottom-end" / "left-start" / "left-end" | `bottom` |

<style>
.popover {
  display: flex;
  justify-content: space-between;
}
</style>
