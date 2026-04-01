<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <!-- RouterLink 는  HTML의 <a>태그처럼 사용자가 클릭할 수 있는 링크를 생성 -->
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </nav>
  <!-- RouterView 는 라우터 객체 정보 중 현재 경로와 일치하는 경로의 컴포넌트를 렌더링하라 -->
  <RouterView />
</template>
