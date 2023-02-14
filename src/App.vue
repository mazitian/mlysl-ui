<script setup lang="ts">
import { ref } from 'vue'
import MlInput from '../src/input/src/input'
const val = ref('')
</script>

<template>
  <div class="input">
    <ml-input v-model="val" placeholder="Please input" clearable>
      <template #icon>
        <svg
          t="1676275380414"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="946"
          width="14"
          height="14"
        >
          <path
            d="M918 872.8L691.1 645.9c47.9-57.9 76.7-132.2 76.7-213.3 0-184.9-149.9-334.7-334.7-334.7S98.3 247.7 98.3 432.6 248.2 767.3 433 767.3c80.8 0 154.9-28.6 212.7-76.2l227 227c12.5 12.5 32.8 12.5 45.3 0 12.5-12.6 12.5-32.8 0-45.3zM433.1 703.3c-36.6 0-72-7.1-105.4-21.3-32.2-13.6-61.2-33.2-86.1-58-24.9-24.9-44.4-53.8-58-86.1-14.1-33.3-21.3-68.8-21.3-105.4 0-36.6 7.1-72 21.3-105.4 13.6-32.2 33.2-61.2 58-86.1 24.9-24.9 53.8-44.4 86.1-58 33.3-14.1 68.8-21.3 105.4-21.3s72 7.1 105.4 21.3c32.2 13.6 61.2 33.2 86.1 58 24.9 24.9 44.4 53.8 58 86.1 14.1 33.3 21.3 68.8 21.3 105.4 0 36.6-7.1 72-21.3 105.4-13.6 32.2-33.2 61.2-58 86.1-24.9 24.9-53.8 44.4-86.1 58-33.4 14.2-68.9 21.3-105.4 21.3z"
            p-id="947"
            fill="#8a8a8a"
          ></path>
        </svg>
      </template>
    </ml-input>
    <ml-input v-model="val" placeholder="Please input" disabled>
      <template #icon>
        <svg
          t="1676275380414"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="946"
          width="14"
          height="14"
        >
          <path
            d="M918 872.8L691.1 645.9c47.9-57.9 76.7-132.2 76.7-213.3 0-184.9-149.9-334.7-334.7-334.7S98.3 247.7 98.3 432.6 248.2 767.3 433 767.3c80.8 0 154.9-28.6 212.7-76.2l227 227c12.5 12.5 32.8 12.5 45.3 0 12.5-12.6 12.5-32.8 0-45.3zM433.1 703.3c-36.6 0-72-7.1-105.4-21.3-32.2-13.6-61.2-33.2-86.1-58-24.9-24.9-44.4-53.8-58-86.1-14.1-33.3-21.3-68.8-21.3-105.4 0-36.6 7.1-72 21.3-105.4 13.6-32.2 33.2-61.2 58-86.1 24.9-24.9 53.8-44.4 86.1-58 33.3-14.1 68.8-21.3 105.4-21.3s72 7.1 105.4 21.3c32.2 13.6 61.2 33.2 86.1 58 24.9 24.9 44.4 53.8 58 86.1 14.1 33.3 21.3 68.8 21.3 105.4 0 36.6-7.1 72-21.3 105.4-13.6 32.2-33.2 61.2-58 86.1-24.9 24.9-53.8 44.4-86.1 58-33.4 14.2-68.9 21.3-105.4 21.3z"
            p-id="947"
            fill="#8a8a8a"
          ></path>
        </svg>
      </template>
    </ml-input>
    <ml-input v-model="val" placeholder="Please input" disabled></ml-input>
    <ml-input
      v-model="val"
      placeholder="Please input"
      type="password"
    ></ml-input>
    <ml-input v-model="val" placeholder="Please input" size="sm"></ml-input>
    <ml-input v-model="val" placeholder="Please input" size="md"></ml-input>
    <ml-input v-model="val" placeholder="Please input" size="lg"></ml-input>
    <div>{{ val }}</div>
  </div>
</template>

<style scoped>
.input > * {
  margin-bottom: 10px;
}
</style>
