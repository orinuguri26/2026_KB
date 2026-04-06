//  URL 경로와 보여줄 컴포넌트를 연결하는 라우터 설정 파일
// 사용자가 어떤 주소로 들어왔는지에 따라서
// vue라우터가 어떤 페이지 컴포넌트를 RouterView에 보여줄지 결정된다.

//1. vue 라우터 생성에 필요한 함수를 가져온다.
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

//라우터 객체 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

//main.js에서 사용할 수 있도록 router객체를 외부로 내보내기
export default router;
