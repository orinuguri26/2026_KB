import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  // 라우트 구성 객체
  history: createWebHistory(),
  // 뷰 라우터의 히스토리 관리방식을 정의,관리
  //어플리케이션의 경로와 해당경로와 렌더링될 컴포넌트 매칭 라우트객체를 기술
  routes: [
    {
      path: '', // "필수" 요소
      name: 'home', // 선택, 그래도 구분하기 쉬워짐
      component: HomeView, // "필수"
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});
export default router; // 외부에 수출시킴
