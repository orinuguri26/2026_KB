<!--
HomeView.vue
이 파일은 '/' 경로에 연결되는 홈 화면 컴포넌트입니다.
라우터 설정에서 path: '/' 와 연결되어 있으며,
사용자가 첫 화면으로 들어왔을 때 RouterView 자리에 표시됩니다.
-->

<template>
  <!-- 홈 화면 제목 -->
  <section class="page">
    <h1>Home View</h1>
    <p>이 페이지는 사이트의 기본 진입 화면입니다.</p>
    <p>라우터에서 <code>path: '/'</code> 와 연결되어 있습니다.</p>
  </section>
</template>

<style scoped>
.page {
  padding: 24px;
}
</style>
