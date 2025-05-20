import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/homepage/HomePage.vue';
import WinterSolstice from '../pages/WinterSolstice.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { ruName: 'Главная страница' },
  },
  {
    path: '/winter-solstice',
    name: 'WinterSolstice',
    component: WinterSolstice,
    meta: { ruName: 'Зимнее солнцестояние' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = to.meta.ruName
    ? `${to.meta.ruName} | Ньюгрейдж`
    : `Ньюгрейдж`;
});

export default router;
