<!--
App.vue
이 파일은 전체 애플리케이션의 최상위(루트) 컴포넌트입니다.
실제 페이지 내용(HomeView, AboutView 등)은 RouterView를 통해 이 안에 교체되어 출력됩니다.
즉, App.vue는 '공통 레이아웃 틀' 역할을 합니다.
-->

<script setup>
// vue-router가 제공하는 내장 컴포넌트를 가져옵니다.
// RouterLink: 페이지 새로고침 없이 라우트 이동을 도와주는 링크 컴포넌트
// RouterView: 현재 URL에 맞는 컴포넌트를 화면에 출력하는 자리
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!--
    nav는 공통 메뉴 영역입니다.
    App.vue는 항상 유지되므로,
    이 메뉴는 홈 / 어바웃 어느 페이지로 가도 계속 화면에 남아 있습니다.
  -->
  <nav class="menu">
    <!--
      RouterLink는 a 태그와 비슷하지만,
      Vue Router 방식으로 동작하여 전체 페이지를 새로고침하지 않습니다.
      to="/" 는 루트 경로, 즉 홈 화면으로 이동합니다.
    -->
    <RouterLink to="/">Home</RouterLink>

    <!--
      to="/about" 은 About 페이지로 이동합니다.
    -->
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <!--
    현재 URL 경로에 해당하는 컴포넌트가 이 자리에 렌더링됩니다.
    예를 들어:
    - /       -> HomeView.vue 출력
    - /about  -> AboutView.vue 출력
  -->
  <RouterView />
</template>

<style scoped>
/* 공통 메뉴를 가로로 보기 좋게 배치하기 위한 기본 스타일입니다. */
.menu {
  display: flex;           /* 메뉴를 가로 배치 */
  gap: 12px;               /* 링크 사이 간격 */
  padding: 16px;           /* 안쪽 여백 */
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
