<script setup>
import MobileNav from './components/MobileNav.vue'
import DesktopNav from './components/DesktopNav.vue'
import LoginForm from './components/LoginForm.vue'

import { useAuthStore } from './stores/auth'

import { RouterView } from 'vue-router'
import { ref } from 'vue'

const deviceType = ref(true)


const auth = useAuthStore()

</script>

<template>
<<<<<<< HEAD
=======
  <label>
    Desktop:
    <input type="radio" v-model="deviceType" checked value="1" />
  </label>
  <label>
    Mobile:
    <input type="radio" v-model="deviceType" value="2" />
  </label>
  <h2>User: {{auth.user}}</h2>
  <button @click="auth.signIn('tester27346276@gmail.com', 'cpQa4nd3ZAu7!gzVf4cr')">Logga in</button>
  <button @click="auth.signOut()">Logga ut</button>
  <DesktopNav v-if="deviceType == 1"></DesktopNav>
  <MobileNav v-else></MobileNav>
>>>>>>> stores
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
