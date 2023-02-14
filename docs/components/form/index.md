# Form 表单

## 基础用法

传入 model 属性设置数据模型。

:::demo 传入 model 属性设置数据模型

```vue
<template>
  <ml-form :model="model" layout="horizontal">
    <ml-form-item label="用户名：">
      <ml-input v-model="model.user" />
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom'
})
</script>
```

:::

## 表单样式

水平排列模式下，label-size 可以设置 label 的宽度；label-align 可以设置 label 的对齐方式。

:::demo label-size 提供 sm、md、lg 三种大小，分别对应 80px、100px、150px，默认为 md；label-align 可选值为 start、center、end，默认为 start。

```vue
<template>
  <p>
    <span>labelSize：</span>
    <label>
      <input type="radio" value="sm" v-model="labelSize" />
      sm
    </label>
    <label>
      <input type="radio" value="md" v-model="labelSize" />
      md
    </label>
    <label>
      <input type="radio" value="lg" v-model="labelSize" />
      lg
    </label>
  </p>
  <p>
    <span>labelAlign：</span>
    <label>
      <input type="radio" value="start" v-model="labelAlign" />
      start
    </label>
    <label>
      <input type="radio" value="center" v-model="labelAlign" />
      center
    </label>
    <label>
      <input type="radio" value="end" v-model="labelAlign" />
      end
    </label>
  </p>
  <ml-form
    :model="model"
    layout="horizontal"
    :labelAlign="labelAlign"
    :labelSize="labelSize"
  >
    <ml-form-item label="用户名：">
      <ml-input />
    </ml-form-item>
    <ml-form-item label="密码：">
      <ml-input type="password" />
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: 'tom',
  password: ''
})
const labelSize = ref('md')
const labelAlign = ref('start')
</script>
```

:::

## 表单校验

:::demo

```vue
<template>
  <ml-form
    :model="model"
    :rules="rules"
    layout="vertical"
    @submit="onLogin"
    ref="loginForm"
  >
    <ml-form-item label="用户名：" field="user">
      <ml-input v-model="model.user" />
    </ml-form-item>
    <ml-form-item label="密码：" field="pwd">
      <ml-input type="password" v-model="model.pwd" />
    </ml-form-item>
    <ml-form-item>
      <ml-button>登录</ml-button>
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: '',
  pwd: ''
})
const rules = ref({
  user: [{ required: true, message: '用户名为必填项' }],
  pwd: [{ required: true, message: '密码为必填项' }]
})

const loginForm = ref(null)
const onLogin = () => {
  loginForm.value.validate(valid => {
    if (valid) {
      alert('登录成功')
    } else {
      alert('校验失败，请重试！')
    }
  })
}
</script>
```

:::

## Form API

### Form 属性

| 参数       | 说明         | 类型     | 可选值                     | 默认    |
| ---------- | ------------ | -------- | -------------------------- | ------- |
| model      | 绑定表单数据 | `object` | —                          | —       |
| layout     | 表单排列方式 | `string` | `horizontal` / `vertical`  | —       |
| labelSize  | 表单尺寸     | `string` | `sm` / `md` / `lg`         | `md`    |
| labelAlign | 表单位置     | `string` | `start` / `center` / `end` | `start` |
| rules      | 定义校验规则 | `Object` | —                          | —       |

### Form 事件

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| submit | 表单提交 | —    |

### Form 插槽

| 插槽名  | 说明           | 子标签   |
| ------- | -------------- | -------- |
| default | 自定义默认内容 | FormItem |

## FormItem API

### Form Item 属性

| 参数  | 说明         | 类型     | 可选值 | 默认 |
| ----- | ------------ | -------- | ------ | ---- |
| label | 表单名称     | `string` | —      | —    |
| field | 绑定数据变量 | `string` | —      | —    |

### Form 插槽

| 插槽名  | 说明       | 子标签 |
| ------- | ---------- | ------ |
| default | 表单的内容 | —      |
