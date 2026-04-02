<template>
  <router-link :to="menu.url" class="menu-item" active-class="active">
    <i :class="menu.icon"></i>
    <span>{{ menu.title }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  menu: Object,
});
</script>

<style scoped>
.menu-item {
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 5px;
  transition: all 0.2s;
}

/* hover */
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 현재 페이지 */
.active {
  background-color: rgba(255, 255, 255, 0.35);
  font-weight: bold;
}
</style>
