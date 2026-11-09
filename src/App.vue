<script setup>

import TrainingView from "@/views/TrainingView.vue";
import { RouterView } from 'vue-router'
import MobileNav from './components/MobileNav.vue'

</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
video {
  aspect-ratio: 9 / 16;
  height: 540px;
  width: auto;
  object-fit: cover;
}
</style>
