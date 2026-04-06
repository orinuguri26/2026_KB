<script setup>
// App.vue
// 전체 화면의 공통 골격을 담당하는 최상위 컴포넌트입니다.
// 상단에는 이동 메뉴를 두고, 아래에는 현재 라우트에 맞는 화면이 표시됩니다.

import { RouterLink, RouterView } from 'vue-router'; // 메뉴 링크와 현재 페이지 표시용 컴포넌트
</script>

<template>
  <!-- nav: 애플리케이션 공통 내비게이션 영역 -->
  <nav>
    <!-- RouterLink: 새로고침 없이 라우트 이동을 수행 -->
    <RouterLink to="/">Home</RouterLink>

    <!-- About 화면으로 이동하는 링크 -->
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <!-- RouterView: 현재 URL에 연결된 컴포넌트를 이 위치에 렌더링 -->
  <RouterView />
</template>
