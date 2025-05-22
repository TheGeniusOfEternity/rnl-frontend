import { createRouter, createWebHistory } from 'vue-router';
import SymbolicValue from '../pages/SymbolicValuePage.vue';
import HomePage from '../pages/homepage/HomePage.vue';
import WinterSolstice from '../pages/WinterSolstice.vue';
import InterviewPage from '../pages/interview/InterviewPage.vue';
import InterviewSpecialtyPage from '../pages/interview-specialty/InterviewSpecialtyPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { ruName: 'Главная страница' },
  },
  {
    path: '/symbolic-value',
    component: SymbolicValue,
    meta: { ruName: 'Символическое значение' },
  },
  {
    path: '/interview-specialty',
    component: InterviewSpecialtyPage,
    meta: { ruName: 'Экспертное мнение' },
  },
  {
    path: '/interview',
    component: InterviewPage,
    meta: { ruName: 'Глазами простого человека' },
  },
  {
    path: '/winter-solstice',
    name: 'WinterSolstice',
    component: WinterSolstice,
    meta: { ruName: 'Зимнее солнцестояние' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory('/rnl-frontend/'),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to) => {
  document.title = to.meta.ruName
    ? `${to.meta.ruName} | Ньюгрейдж`
    : `Ньюгрейдж`;
});

export default router;
