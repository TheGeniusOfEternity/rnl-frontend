import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/homepage/HomePage.vue';
import InterviewPage from '../pages/interview/InterviewPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { ruName: 'Главная страница' },
  },
  {
    path: '/interview',
    component: InterviewPage,
    meta: { ruName: 'Интервью' },
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
