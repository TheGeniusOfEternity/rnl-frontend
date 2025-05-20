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
      <router-link to="/interview" class="nav-link" @click="closeMenu"
        >Интервью</router-link
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
  width: 100%;
  background-color: #f0ead2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 5vw;
  box-sizing: border-box;
}

.logo {
  width: 15vw;
}

.logo img {
  width: 100%;
  height: 100%;
  display: flex;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  .footer {
    flex-direction: column;
    padding: 5vw 2vw;
  }
  .logo {
    width: 70%;
    padding: 0 5%;
    box-sizing: border-box;
  }
  .nav {
    flex-direction: column;
    width: 70%;
  }
  .nav-link {
    padding: 0.8rem 0.8rem 0.8rem 1rem;
    border-bottom: 1px solid #94857c;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    border-radius: 5px 5px 5px 0;
    background: #f0ead2;
    transition: background 0.3s;
    width: 100%;
    box-sizing: border-box;
  }
  .nav-link:hover {
    background: #e7deb7;
  }
  .menu-toggle {
    display: none;
  }
}
</style>
