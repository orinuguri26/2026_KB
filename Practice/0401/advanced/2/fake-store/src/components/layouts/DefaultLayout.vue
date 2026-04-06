<template>
  <div>
    <Header />
    <NavBar />
    <div class="content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
