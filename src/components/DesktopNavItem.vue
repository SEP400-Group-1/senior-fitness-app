<script setup>
defineProps({
  icon: String,
  title: String,
  name: String,
})
</script>
<template>
  <RouterLink
    :to="{ name }"
    class="mobile-nav-item w-full flex rounded-4xl justify-start gap-2 text-center flex-1 h-full text-xl p-4 transition duration-300 hover:bg-amber-400"
    active-class="bg-amber-400"
  >
    <font-awesome-icon :icon="'fa-solid ' + icon" size="xl" fixed-width />
    <span class="mobile-nav-item-label">{{ title }}</span>
  </RouterLink>
</template>

<style scoped></style>
