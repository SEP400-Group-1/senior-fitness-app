<script setup>
import MobileNav from '../components/MobileNav.vue'
import DesktopNav from '../components/DesktopNav.vue'

import { RouterView } from 'vue-router'
import { ref } from 'vue'

const deviceType = ref(2)
</script>

<template>
  <DesktopNav v-if="deviceType == 1"></DesktopNav>
  <MobileNav v-else></MobileNav>
  <RouterView></RouterView>
</template>

<style scoped></style>
