import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Members from '../pages/Members.vue';
import Videos from '../pages/Videos.vue';

//라우터 객체 생성
const router = createRouter({
  history: createWebHistory(), //브라우저 히스토리 모드 설정

  //라우팅 규칙 정의
  routes: [
    //홈 페이지
    {
      path: '/', //URL
      name: 'home', //라우터 이름
      component: Home, //연결할 Vue 컴포넌트
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos,
    },
  ],
});
// 다른 파일(main.js)에서 사용할 수 있도록 export
export default router;
