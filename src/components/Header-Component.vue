<template>
  <header class="header">
    <router-link to="/" class="logo" @click="closeMenu"
      ><img src="../assets/logo.png" alt=""
    /></router-link>
    <nav :class="['nav', { open: isMenuOpen }]">
      <router-link to="/" class="nav-link" @click="closeMenu"
        >Главная</router-link
      >
      <router-link to="/symbolic-value" class="nav-link" @click="closeMenu"
        >Символическое значение</router-link
      >
      <router-link to="/winter-solstice" class="nav-link" @click="closeMenu"
        >Зимнее солнцестояние</router-link
      >
      <router-link to="/interview" class="nav-link" @click="closeMenu"
        >Интервью</router-link
      >
      <router-link to="/interview-specialty" class="nav-link" @click="closeMenu"
        >Экспертное мнение</router-link
      >
    </nav>
    <button
      class="menu-toggle"
      aria-label="Открыть меню"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
    >
      &#9776;
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  background-color: #dde5b6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px;
  box-sizing: border-box;
  z-index: 10;
}
.logo {
  display: flex;
  height: 100%;
  box-sizing: border-box;
}
.logo img {
  height: 100%;
  display: flex;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}
.nav-link {
  display: inline;
  text-decoration: none;
  color: #222;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  transition: background 0.2s;
}
.nav-link:hover {
  background: #c4cf86;
}
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 0 0 1.5% 0;
  aspect-ratio: 1/ 1;
  color: #6c584c;
  display: none;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background 0.2s;
}
.menu-toggle:focus,
.menu-toggle:active {
  background: #c4cf86;
  outline: none;
}
@media (max-width: 900px) {
  .nav {
    display: none;
    position: fixed;
    top: var(--header-height);
    right: 0;
    background: #dde5b6;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    z-index: 1;
    border-radius: 0 0 12px 12px;
    max-height: calc(100vh - 56px);
  }
  .nav.open {
    display: flex;
  }
  .nav-link {
    padding: 0.8rem 0.8rem 0.8rem 0.9rem;
    height: var(--menu-item-height);
    line-height: var(--menu-item-height);
    border-bottom: 1px solid #adc178;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    text-align: left;
    border-radius: 6px;
    background: #dde5b6;
    transition: background 0.3s;
  }
  .nav-link:hover {
    background: #c4cf86;
  }
  .nav-link:last-child {
    border-bottom: none;
  }
  .menu-toggle {
    display: flex;
  }
}
@media (min-width: 901px) {
  .menu-toggle {
    display: none !important;
  }
  .nav {
    display: flex !important;
    position: static;
    max-height: none;
    max-width: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
    flex-direction: row;
  }
}
</style>
