<template>
  <div class="menu-group">
    <MenuItem v-for="menu in menus" :key="menu.title" :menu="menu" />
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

defineProps({
  menus: Array,
});
</script>

<style scoped>
.menu-group {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: start;
}
</style>
