<script setup lang="ts">
import { ref } from 'vue'
import MlCarousel from './carousel/src/carousel'
import MlCarouselItem from './carousel/src/carousel-item'
</script>

<template>
  <div class="container">
    <ml-carousel
      autoplay
      :duration="1000"
      :initial="0"
      has-dot
      has-director
      dot-bg-color="#C46C82"
    >
      <ml-carousel-item v-for="(item, index) of 5" :key="index">
        <p class="item">{{ item }}</p>
      </ml-carousel-item>
    </ml-carousel>
  </div>
</template>

<style scoped>
.container {
  width: 520px;
  height: 280px;
  margin: 150px auto;
}
.item {
  line-height: 280px;
  margin: 0;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: larger;
  background-color: #3b4c76;
}
</style>
