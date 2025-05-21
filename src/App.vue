<template>
  <HeaderComponent />
  <router-view />
  <Footer-Component />
</template>

<script lang="ts">
import FooterComponent from './components/Footer-Component.vue';
import HeaderComponent from './components/Header-Component.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
