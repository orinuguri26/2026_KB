// src/router/index.js
// 이 파일은 'URL 경로'와 '보여줄 컴포넌트'를 연결하는 라우터 설정 파일입니다.
// 사용자가 어떤 주소로 들어왔는지에 따라,
// Vue Router가 어떤 페이지 컴포넌트를 RouterView에 보여줄지 결정합니다.

// Vue Router 생성에 필요한 함수들을 가져옵니다.
import { createRouter, createWebHistory } from 'vue-router';

// 홈 화면에서 사용할 컴포넌트를 미리 import 합니다.
// 정적 import이므로 앱 시작 시 함께 번들에 포함됩니다.
import HomeView from '../views/HomeView.vue';

// 라우터 객체를 생성합니다.
const router = createRouter({
  // 브라우저의 주소창 히스토리 모드를 사용합니다.
  // 해시(#) 없이 깔끔한 주소 형태를 사용할 수 있습니다.
  // 예: /about
  history: createWebHistory(),

  // routes 배열에는 '경로(path)'와 '컴포넌트(component)'의 매핑 정보가 들어갑니다.
  routes: [
    {
      // 루트 경로입니다.
      // 사용자가 사이트 첫 화면으로 접속하면 이 경로가 매칭됩니다.
      path: '/',

      // 라우트의 이름입니다.
      // 코드에서 이름 기반 이동(router.push({ name: 'home' }))에 사용할 수 있습니다.
      name: 'home',

      // 해당 경로에서 보여줄 컴포넌트입니다.
      component: HomeView,
    },
    {
      // /about 경로로 들어오면 About 페이지를 보여줍니다.
      path: '/about',

      // 이 라우트의 이름입니다.
      name: 'about',

      // 동적 import(지연 로딩, lazy loading) 방식입니다.
      // 사용자가 실제로 /about 경로에 들어갈 때 해당 파일을 불러옵니다.
      // 초기 로딩 속도 최적화에 도움이 됩니다.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

// main.js에서 사용할 수 있도록 router 객체를 외부로 내보냅니다.
export default router;
