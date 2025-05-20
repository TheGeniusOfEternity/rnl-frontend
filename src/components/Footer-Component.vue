<template>
  <footer class="footer">
    <router-link to="/" class="logo"
      ><img src="../assets/logo.png" alt=""
    /></router-link>
    <nav class="nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/symbolic-value" class="nav-link"
        >Символическое значение</router-link
      >
      <router-link to="/winter-solstice" class="nav-link"
        >Зимнее солнцестояние</router-link
      >
      <router-link to="/interview" class="nav-link">Интервью</router-link>
    </nav>
  </footer>
</template>

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
}
</style>
