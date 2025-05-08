<!-- src/views/HomeView.vue -->
<template>
  <section class="page">
    <div class="intro-container">
      <h2>{{ $t('home.intro') }}</h2>
      <p></p>
    </div>
    <div class="card-container">
      <section class="card">
        <h2>{{ $t('home.history.title') }}</h2>
        <p>{{ $t('home.history.origin') }}</p>
      </section>

      <section class="card">
        <h2>Переиспользование</h2>
        <p>{{ $t('home.history.reuse') }}</p>
      </section>

      <section class="card">
        <h2>Местоположение</h2>
        <p>{{ $t('home.history.location') }}</p>
        <p>{{ $t('home.history.status') }}</p>
      </section>
    </div>
    <ul>
      <li>{{ $t('home.history.theories.labor') }}</li>
      <li>{{ $t('home.history.theories.mystical') }}</li>
      <li>{{ $t('home.history.theories.archaeological') }}</li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
h1,
h2 {
  color: #2c3e50;
  margin-top: 2rem;
}
p {
  color: #2c3e50;
  line-height: 1.6;
}
h3,
h4 {
  margin-top: 1rem;
  color: #34495e;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.page::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  width: 150%;
  height: 80%;
  border-radius: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle at center,
    rgba(173, 193, 120, 0.8) 0%,
    rgba(221, 229, 182, 0.5) 70%,
    transparent 100%
  );
  z-index: -1;
}

.page::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  z-index: -2;
}
.intro-container {
  text-align: left;
  margin-right: auto;
  max-width: 50%;
  padding: 1rem 0;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}

.card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.card p {
  color: #7f8c8d;
  line-height: 1.6;
}
</style>
