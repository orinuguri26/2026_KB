<template>
  <nav class="navbar bg-primary px-3">
    <MenuGroup :menus="menus" />
  </nav>
</template>

<script setup>
import MenuGroup from './menu/MenuGroup.vue';
import config from '@/config/index';

const menus = config.menus;
</script>
