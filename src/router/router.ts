import { createRouter, createWebHistory } from 'vue-router';
import SymbolicValue from '../pages/SymbolicValuePage.vue';
import HomePage from '../pages/homepage/HomePage.vue';
import InterviewPage from '../pages/interview/InterviewPage.vue';
import WinterSolstice from '../pages/WinterSolstice.vue';

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
    path: '/interview',
    component: InterviewPage,
    meta: { ruName: 'Интервью' },
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
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to) => {
  document.title = to.meta.ruName
    ? `${to.meta.ruName} | Ньюгрейдж`
    : `Ньюгрейдж`;
});

export default router;
