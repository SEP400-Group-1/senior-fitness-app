<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(...validRoutes) {
  return validRoutes.includes(route.name)
}
</script>

<template>
  <nav class="mobile-nav">
    <RouterLink to="/" class="mobile-nav-item" :class="{ active: isActive('home') }">
      <font-awesome-icon icon="fa-solid fa-home" size="xl" fixed-width />
      <span class="mobile-nav-item-label">Hem</span>
    </RouterLink>

    <RouterLink to="/programs" class="mobile-nav-item" :class="{ active: isActive('programs') }">
      <font-awesome-icon icon="fa-solid fa-dumbbell" size="xl" fixed-width />
      <span class="mobile-nav-item-label">Program</span>
    </RouterLink>

    <RouterLink to="/profile" class="mobile-nav-item" :class="{ active: isActive('profile') }">
      <font-awesome-icon icon="fa-solid fa-user" size="xl" fixed-width />
      <span class="mobile-nav-item-label">Profil</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.mobile-nav {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  gap: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.fa-solid {
  font-size: 50px;
}

.mobile-nav-item {
  flex: 1;
  height: 100%;
  text-align: center;
  padding: 6px;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 16px;
  border-radius: 12px;
}

.mobile-nav-item a {
  display: block;
}

.mobile-nav-item-label {
  display: block;
}

.active {
  background-color: #f2a900;
}
</style>
