<script setup>
import MobileNav from './components/MobileNav.vue'
import DesktopNav from './components/DesktopNav.vue'
import LoginForm from './components/LoginForm.vue'

import { RouterView } from 'vue-router'
import { ref } from 'vue'

const deviceType = ref(true)
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
