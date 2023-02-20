# Dropdown 下拉菜单

## 基础用法

:::demo

```vue
<template>
  <div class="dropdown">
    <ml-dropdown :data="data" trigger="hover">
      <down-line-icon :size="30"></down-line-icon>
    </ml-dropdown>
    <ml-dropdown :data="data" trigger="hover">
      <ml-button> Dropdown List </ml-button>
    </ml-dropdown>
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
    <ml-dropdown :data="data" trigger="hover">
      <ml-button type="secondary"> Dropdown List </ml-button>
    </ml-dropdown>
  </div>
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

## 菜单有禁用选项

:::demo

```vue
<template>
  <div class="dropdown">
    <ml-dropdown :data="data" trigger="hover">
      <down-line-icon :size="30"></down-line-icon>
    </ml-dropdown>
    <ml-dropdown :data="data" trigger="hover">
      <ml-button> Dropdown List </ml-button>
    </ml-dropdown>
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
    <ml-dropdown :data="data" trigger="hover">
      <ml-button type="secondary"> Dropdown List </ml-button>
    </ml-dropdown>
  </div>
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
    id: '2',
    disabled: true
  },
  {
    label: '菜单3',
    id: '3'
  },
  {
    label: '菜单4',
    id: '4',
    disabled: true
  }
])
</script>
```

:::

## 触发方式

:::demo

```vue
<template>
  <div class="dropdown">
    <ml-dropdown :data="data" trigger="hover">
      <ml-button type="primary"> 鼠标移入 </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" trigger="click">
      <ml-button type="primary"> 单击左键 </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" trigger="manual">
      <ml-button type="primary"> 单击右键 </ml-button>
    </ml-dropdown>
  </div>
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

## 弹出位置

:::demo

```vue
<template>
  <div class="dropdown">
    <ml-dropdown :data="data" placement="top-start">
      <ml-button> top-start </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="top">
      <ml-button> top </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="top-end">
      <ml-button> top-end </ml-button>
    </ml-dropdown>
  </div>
  <br />
  <div class="dropdown">
    <ml-dropdown :data="data" placement="left-start">
      <ml-button> left-start </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="left">
      <ml-button> left </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="left-end">
      <ml-button> left-end </ml-button>
    </ml-dropdown>
  </div>
  <br />
  <div class="dropdown">
    <ml-dropdown :data="data" placement="right-start">
      <ml-button> right-start </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="right">
      <ml-button> right </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="right-end">
      <ml-button> right-end </ml-button>
    </ml-dropdown>
  </div>
  <br />
  <div class="dropdown">
    <ml-dropdown :data="data" placement="bottom-start">
      <ml-button> bottom-start</ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="bottom">
      <ml-button> bottom </ml-button>
    </ml-dropdown>
    <ml-dropdown :data="data" placement="bottom-end">
      <ml-button> bottom-end </ml-button>
    </ml-dropdown>
  </div>
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

## 自定义属性

可以给每个菜单项绑定 `click` 事件

:::demo

```vue
<template>
  <div class="dropdown">
    <ml-dropdown :data="data" trigger="hover">
      <down-line-icon :size="30"></down-line-icon>
    </ml-dropdown>
    <ml-dropdown :data="data" trigger="hover">
      <ml-button> Dropdown List </ml-button>
    </ml-dropdown>
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
    <ml-dropdown :data="data" trigger="hover">
      <ml-button type="secondary"> Dropdown List </ml-button>
    </ml-dropdown>
  </div>
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

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | --- | --- | --- | --- |
| data | 定义数据数组 | `array` | — | — |
| trigger | 触发下拉菜单的形式 | `string` | `hover` / `click` / `manual` | `hover` |
| placement | 菜单出现的位置 | `string` | "top-start" / "top-end" / "right-start" / "right-end" / "bottom-start" / "bottom-end" / "left-start" / "left-end" | `bottom` |
| label | 菜单显示的值 | `string` | — | — |
| id | 菜单项身份标识 | `string` / `number` | — | — |
| click | 自定义点击事件 | — | — | — |

<style>
.dropdown {
  display: flex;
  justify-content: space-between;
}
</style>
