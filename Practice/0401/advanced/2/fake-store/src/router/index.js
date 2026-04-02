import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Electronics from '@/pages/Electronics.vue';
import Jewelery from '@/pages/Jewelery.vue';
import MenSClothing from "@/pages/Men'sClothing.vue";
import WomenSClothing from "@/pages/Women'sClothing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: Electronics,
    },
    {
      path: '/jewelery',
      name: 'jewelery',
      component: Jewelery,
    },
    {
      path: '/mensclothing',
      name: 'mensclothing',
      component: MenSClothing,
    },
    {
      path: '/womensclothing',
      name: 'womensclothing',
      component: WomenSClothing,
    },
  ],
});

export default router;
