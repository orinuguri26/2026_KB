import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

export default router;
