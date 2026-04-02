<template>
  <div class="container">
    <!-- 공통 헤더 컴포넌트 모든페이지에서 항상 보여지는 영역 -->
    <Header />

    <!-- 라우터에 의해서 변경되는 페이지 영역  -->
    <!-- 현재 URL에 맞는 컴포넌트가 요기에 랜더링된다. -->
    <RouterView />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}

.card {
  margin-top: 10px;
}
</style>
