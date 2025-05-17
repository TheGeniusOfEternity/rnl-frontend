<template>
  <footer class="footer">
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
    </nav>
    <button
      class="menu-toggle"
      aria-label="Открыть меню"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
    >
      &#9776;
    </button>
  </footer>
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
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: var(--footer-height);
  background-color: #f0ead2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 16px 5px;
  box-sizing: border-box;
  z-index: 2;
}

.logo img {
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  height: 6.5rem;
  width: auto;
  display: block;
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
  background: #e7deb7;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 0.5rem 0.3rem 0.5rem;
  margin: 0;
  color: #6c584c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background 0.2s;
}

.menu-toggle:focus,
.menu-toggle:active {
  background: #e7deb7;
  outline: none;
}

@media (max-width: 900px) {
  .nav {
    display: none;
    position: fixed;
    bottom: 10rem;
    right: 0;
    background: #e7deb7;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    z-index: 1;
    border-radius: 12px 12px 0 0;
    max-height: calc(100vh - 56px);
  }
  .nav.open {
    display: flex;
  }
  .nav-link {
    padding: 0.8rem 0.8rem 0.8rem 1rem;
    height: var(--menu-item-height);
    line-height: var(--menu-item-height);
    border-bottom: 1px solid #94857c;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    text-align: left;
    border-radius: 5px 5px 5px 0;
    background: #f0ead2;
    transition: background 0.3s;
  }
  .nav-link:hover {
    background: #e7deb7;
  }
  .nav-link:last-child {
    border-bottom: none;
  }
  .menu-toggle {
    display: flex;
  }
  .logo img {
    height: 5rem;
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
