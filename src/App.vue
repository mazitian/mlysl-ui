<script setup lang="ts">
import MlContainer from '../src/container/src/container'
import MlHeader from '../src/container/src/header'
import MlMain from '../src/container/src/main'
import MlFooter from '../src/container/src/footer'
import MlAside from '../src/container/src/aside'
</script>

<template>
  <ml-container>
    <ml-header>Header</ml-header>
    <ml-container>
      <ml-aside width="200px">Aside</ml-aside>
      <ml-container>
        <ml-main>Main</ml-main>
        <ml-footer>Footer</ml-footer>
      </ml-container>
    </ml-container>
  </ml-container>
</template>

<style scoped></style>
