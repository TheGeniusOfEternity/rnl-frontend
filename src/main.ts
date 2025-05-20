import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/style/main-page.css';
import router from './router/router.ts';

import { createI18n } from 'vue-i18n';
import ru from './locales/ru.json';

const i18n = createI18n({
  locale: 'ru',
  messages: { ru },
});

createApp(App).use(router).use(i18n).mount('#app');
