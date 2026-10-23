<script setup>
import MobileNav from '../components/MobileNav.vue'
import DesktopNav from '../components/DesktopNav.vue'

import { RouterView } from 'vue-router'
import { ref } from 'vue'

const deviceType = ref(1)
</script>

<template>
  <div><h2>Home</h2></div>
</template>

<style scoped></style>
