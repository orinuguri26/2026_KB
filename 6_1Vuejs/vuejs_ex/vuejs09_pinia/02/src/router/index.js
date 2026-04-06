// router/index.js
// URL 경로와 화면 컴포넌트를 연결하는 라우터 설정 파일입니다.
// '/' 경로는 HomeView를, '/about' 경로는 AboutView를 보여줍니다.

import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 생성에 필요한 함수
import HomeView from '../views/HomeView.vue'; // 홈 화면 컴포넌트 직접 import

const router = createRouter({
  // createWebHistory: 일반적인 웹 URL 형태(/about)를 사용하는 히스토리 모드
  history: createWebHistory(import.meta.env.BASE_URL),

  // routes: 경로와 컴포넌트의 매핑 목록
  routes: [
    {
      path: '/', // 브라우저 주소창의 루트 경로
      name: 'home', // 라우트의 이름. 코드에서 이름 기반 이동 시 사용 가능
      component: HomeView, // '/'로 접속했을 때 보여줄 컴포넌트
    },
    {
      path: '/about', // About 페이지 경로
      name: 'about', // About 라우트 이름

      // route level code-splitting:
      // 이 방식은 About 화면이 실제로 필요해질 때만 파일을 불러옵니다.
      // 초기 로딩 성능을 조금 더 좋게 만들 수 있습니다.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router; // main.js에서 사용할 수 있도록 라우터 객체 내보내기
