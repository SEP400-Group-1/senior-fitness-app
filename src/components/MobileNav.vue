<script setup>
</script>


<template>
  <div class="mobile-nav">
    <div class="mobile-nav-item" id="active">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-home" size="xl" />
        <span class="mobile-nav-item-label">Hem</span>
      </a>
    </div>
    <div class="mobile-nav-item active">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-dumbbell" size="xl" />
        <span class="mobile-nav-item-label">Program</span>
      </a>
    </div>
    <div class="mobile-nav-item active">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-user" size="xl" />
        <span class="mobile-nav-item-label">Profil</span>
      </a>
    </div>
  </div>
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
  text-align: center;
  padding: 6px;
  font-family: "Zen Maru Gothic", sans-serif;
  font-size: 16px;
}

.mobile-nav-item a {
  display: block;
}

.mobile-nav-item-label {
  display: block;
}

#active {
  background-color: #F2A900;
  border-radius: 12px
}

</style>
