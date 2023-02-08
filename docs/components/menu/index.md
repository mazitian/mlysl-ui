# Menu 树状菜单

## 基础功能

Menu 组件基本用法，传入`data`属性即可。

:::demo Menu 组件基本用法，传入 data 属性

```vue
<template>
  <MlMenu :data="data"></MlMenu>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: '菜单1',
    id: '1'
  },
  {
    label: '菜单2',
    id: '2',
    expanded: true,
    children: [
      {
        label: '菜单2-1',
        id: '21'
      },
      {
        label: '菜单2-2',
        id: '22',
        expanded: true,
        children: [
          {
            label: '菜单2-2-1',
            id: '221'
          },
          {
            label: '菜单2-2-2',
            id: '222'
          }
        ]
      }
    ]
  },
  {
    label: '菜单3',
    id: '3',
    children: [
      {
        label: '菜单3-1',
        id: '31'
      },
      {
        label: '菜单3-2',
        id: '32'
      }
    ]
  },
  {
    label: '菜单4',
    id: '4'
  }
])
</script>
```

:::

## 自定义 icon 图标

通过 icon 插槽可以自定义展开/折叠图标。

:::demo 自定义展开图标，设置 icon 插槽

```vue
<template>
  <MlMenu :data="data">
    <template #icon="{ nodeData, toggleNode }">
      <span v-if="nodeData.isLeaf" class="devui-menu-node__indent"></span>
      <span
        v-else
        @click="
          event => {
            event.stopPropagation()
            toggleNode(nodeData)
          }
        "
      >
        <svg
          :style="{
            transform: nodeData.expanded ? 'rotate(90deg)' : '',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer'
          }"
          viewBox="0 0 1024 1024"
          width="15"
          height="12"
        >
          <path
            d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
          ></path>
        </svg>
      </span>
    </template>
  </MlMenu>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: '菜单1',
    id: '1'
  },
  {
    label: '菜单2',
    id: '2',
    expanded: true,
    children: [
      {
        label: '菜单2-1',
        id: '21'
      },
      {
        label: '菜单2-2',
        id: '22',
        expanded: true,
        children: [
          {
            label: '菜单2-2-1',
            id: '221'
          },
          {
            label: '菜单2-2-2',
            id: '222'
          }
        ]
      }
    ]
  },
  {
    label: '菜单3',
    id: '3',
    children: [
      {
        label: '菜单3-1',
        id: '31'
      },
      {
        label: '菜单3-2',
        id: '32'
      }
    ]
  },
  {
    label: '菜单4',
    id: '4'
  }
])
</script>
```

:::

## 自定义节点内容

通过 content 插槽可以自定义节点内容。

:::demo 在 label 左边设置图标

```vue
<template>
  <MlMenu :data="data">
    <template #content="menuNode">
      <svg
        v-if="menuNode.isLeaf"
        style="display:inline-block"
        t="1675241676110"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1442"
        width="16"
        height="16"
      >
        <path
          d="M512 1024H51.2a51.2 51.2 0 0 1-51.2-51.2V51.2a51.2 51.2 0 0 1 51.2-51.2h409.6a51.2 51.2 0 0 1 0 102.4H153.6a51.2 51.2 0 0 0-51.2 51.2v716.8a51.2 51.2 0 0 0 51.2 51.2h716.8a51.2 51.2 0 0 0 51.2-51.2V299.9296a51.2 51.2 0 0 1 102.4 0V972.8a51.2 51.2 0 0 1-51.2 51.2z"
          fill="#FF9900"
          p-id="1443"
        ></path>
        <path
          d="M716.8 819.2H307.2a51.2 51.2 0 0 1 0-102.4h409.6a51.2 51.2 0 0 1 0 102.4"
          fill="#FF9900"
          p-id="1444"
        ></path>
        <path
          d="M512 307.2H307.2a51.2 51.2 0 0 1 0-102.4h204.8a51.2 51.2 0 0 1 0 102.4"
          fill="#FF9900"
          p-id="1445"
        ></path>
        <path
          d="M716.8 563.2H307.2a51.2 51.2 0 0 1 0-102.4h409.6a51.2 51.2 0 0 1 0 102.4"
          fill="#FF9900"
          p-id="1446"
        ></path>
      </svg>
      <svg
        v-else
        style="display:inline-block"
        t="1675241767822"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1588"
        width="16"
        height="16"
      >
        <path
          d="M742.4 563.2h-460.8a51.2 51.2 0 0 1 0-102.4h460.8a51.2 51.2 0 0 1 0 102.4"
          fill="#007AFF"
          p-id="1589"
        ></path>
        <path
          d="M537.6 768h-256a51.2 51.2 0 0 1 0-102.4h256a51.2 51.2 0 0 1 0 102.4"
          fill="#007AFF"
          p-id="1590"
        ></path>
        <path
          d="M512 0H51.2a51.2 51.2 0 0 0-51.2 51.2v921.6a51.2 51.2 0 0 0 51.2 51.2h409.6a51.2 51.2 0 0 0 0-102.4H153.6a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h716.8a51.2 51.2 0 0 1 51.2 51.2v570.4704a51.2 51.2 0 0 0 102.4 0V51.2a51.2 51.2 0 0 0-51.2-51.2z"
          fill="#007AFF"
          p-id="1591"
        ></path>
      </svg>
      {{ menuNode.label }}
    </template>
  </MlMenu>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: '菜单1',
    id: '1'
  },
  {
    label: '菜单2',
    id: '2',
    expanded: true,
    children: [
      {
        label: '菜单2-1',
        id: '21'
      },
      {
        label: '菜单2-2',
        id: '22',
        expanded: true,
        children: [
          {
            label: '菜单2-2-1',
            id: '221'
          },
          {
            label: '菜单2-2-2',
            id: '222'
          }
        ]
      }
    ]
  },
  {
    label: '菜单3',
    id: '3',
    children: [
      {
        label: '菜单3-1',
        id: '31'
      },
      {
        label: '菜单3-2',
        id: '32'
      }
    ]
  },
  {
    label: '菜单4',
    id: '4'
  }
])
</script>
```

:::
