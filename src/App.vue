<script setup>
<<<<<<< HEAD
import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <LoginForm/>

=======
import MobileNav from './components/MobileNav.vue'
import DesktopNav from './components/DesktopNav.vue'

import { RouterView } from 'vue-router'
import { ref } from 'vue'

const deviceType = ref(true)
</script>

<template>
  <label>
    Desktop:
    <input type="radio" v-model="deviceType" checked value="1" />
  </label>
  <label>
    Mobile:
    <input type="radio" v-model="deviceType" value="2" />
  </label>
  <DesktopNav v-if="deviceType == 1"></DesktopNav>
  <MobileNav v-else></MobileNav>
  <RouterView></RouterView>
>>>>>>> 8a9d2f679eaa0cb7dcfcb0c66bace2832cc1eb63
</template>

<style scoped></style>
