<!--
AboutView.vue
이 파일은 '/about' 경로에 연결되는 화면 컴포넌트입니다.
사용자가 상단 메뉴의 About 링크를 누르거나,
브라우저 주소창에 /about 을 입력하면 RouterView 자리에 표시됩니다.
-->

<template>
  <!-- About 화면 제목 -->
  <section class="page">
    <h1>About View</h1>
    <p>이 페이지는 소개(About) 화면입니다.</p>
    <p>라우터에서 <code>path: '/about'</code> 와 연결되어 있습니다.</p>
  </section>
</template>

<style scoped>
.page {
  padding: 24px;
}
</style>
