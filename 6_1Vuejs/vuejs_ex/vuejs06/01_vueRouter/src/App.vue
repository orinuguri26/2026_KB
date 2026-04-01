<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </nav>
  <RouterView />
</template>

<!-- 
RouterLink는 HTML의 <a>처럼 사용자가 클릭할 수 있는 링크를 생성
to는 path를 의미함

RouterView는 라우터 객체 정보 중 현재 경로와 일치하는 경로의 컴포넌트를 렌더링하라
(사용자가 요청한 URL을 렌더링하라)

-->
