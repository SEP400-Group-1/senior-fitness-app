<script setup>



import TrainingView from "@/components/TrainingView.vue";
import { RouterView } from 'vue-router'
import MobileNav from './components/MobileNav.vue'

</script>

<template>
  <TrainingView />
  <!-- <MobileNav></MobileNav> -->
  <RouterView></RouterView>
</template>

<style scoped></style>
