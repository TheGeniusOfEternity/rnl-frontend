<!-- src/views/HomeView.vue -->
<template>
  <section>
    <h2>{{ $t('home.intro') }}</h2>

    <h2>{{ $t('home.history.title') }}</h2>
    <p>{{ $t('home.history.origin') }}</p>
    <p>{{ $t('home.history.reuse') }}</p>
    <p>{{ $t('home.history.location') }}</p>
    <p>{{ $t('home.history.status') }}</p>

    <ul>
      <li>{{ $t('home.history.theories.labor') }}</li>
      <li>{{ $t('home.history.theories.mystical') }}</li>
      <li>{{ $t('home.history.theories.archaeological') }}</li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
.homepage {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}

h1,
h2 {
  color: #2c3e50;
  margin-top: 2rem;
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
</style>
