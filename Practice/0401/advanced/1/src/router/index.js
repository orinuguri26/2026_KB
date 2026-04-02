import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/pages/MemberInfo.vue';

const membersIdGuard = (to, from) => {
  console.log('from:', from);
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  } else return true;
};
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
    },
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
    {
      //모든 URL다 잡아라, 근데 위에있는거 빼고
      path: '/:paths(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
