<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav class="menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
<style scoped>
.menu {
  display: flex; /* 메뉴를 가로 배치 */
  gap: 12px; /* 링크 사이 간격 */
  padding: 16px; /* 안쪽 여백 */
  border-bottom: 1px solid #ddd; /* 아래 구분선 */
}

/* 링크 기본 스타일 */
.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

/* 현재 활성화된 링크에 자동 적용되는 클래스 스타일 */
.menu a.router-link-active {
  color: #42b983;
}
</style>
