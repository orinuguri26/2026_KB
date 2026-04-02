import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  // 라우트 구성 객체
<<<<<<< HEAD
  history: createWebHistory(),
  // 뷰 라우터의 히스토리 관리방식을 정의,관리
  //어플리케이션의 경로와 해당경로와 렌더링될 컴포넌트 매칭 라우트객체를 기술
=======
  history: createWebHistory(), //뷰 라우터의 히스토리 관리방식을 정의관리

>>>>>>> 10fe8c2334d8fcd75852bf847e2404a4476b6ce6
  routes: [
    //어플리케이션의 경로와 해당경로와 렌더링될 컴포넌트 매칭 라우트객체를 기술
    {
<<<<<<< HEAD
      path: '', // "필수" 요소
      name: 'home', // 선택, 그래도 구분하기 쉬워짐
      component: HomeView, // "필수"
=======
      path: '', //필수요소
      name: 'home', //선택
      component: HomeView, //필수
>>>>>>> 10fe8c2334d8fcd75852bf847e2404a4476b6ce6
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});
export default router; // 외부에 수출시킴
