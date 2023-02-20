# Modal 对话框

## 基础功能

:::demo

```vue
<template>
  <ml-button @click="open">打开</ml-button>

  <ml-modal
    v-model="visible"
    title="小贴士"
    center
    :show-close="false"
    align-center
  >
    <span>这是一条消息！</span>
    <template #footer>
      <div class="dialog-footer">
        <ml-button style="margin-right: 12px;" @click="visible = false"
          >取消</ml-button
        >
        <ml-button @click="visible = false">确定</ml-button>
      </div>
    </template>
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const open = () => {
  visible.value = true
}
</script>

<style>
.dialog-footer {
  padding: 20px;
  text-align: right;
}
</style>
```

:::

## 自定义内容

通过插槽可以自定义 Modal 内容。我们有 title、default 和 footer 三个插槽可以使用。

:::demo

```vue
<template>
  <ml-button @click="open">打开</ml-button>

  <ml-modal v-model="visible" title="Shipping address" width="50%">
    <template #title> this is title </template>
    <ml-input v-model="val" placeholder="Please input" />
    <template #footer> this is footer </template>
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const val = ref('')
const open = () => {
  visible.value = true
}
</script>
```

:::

## 自定义头部

可以通过 header 插槽定义头部内容。

:::demo 通过 header 插槽定义头部，上下文中有 close 方法用于关闭 Modal

```vue
<template>
  <ml-button @click="open">打开</ml-button>

  <ml-modal v-model="visible" :show-close="false">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <ml-button type="danger" @click="close"> Close </ml-button>
      </div>
    </template>
    This is dialog content.
  </ml-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const open = () => {
  visible.value = true
}
</script>

<style>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}
</style>
```

:::
