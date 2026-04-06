<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </header>
</template>

<script setup>
import config from '@/config/index';

const title = config.title;
const subtitle = config.subtitle;
</script>

<style scoped>
.header {
  background-image: url('https://images.unsplash.com/photo-1501785888041-af3ef285b470');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 40px;
  text-shadow: 1px 1px 5px black;
}
</style>
