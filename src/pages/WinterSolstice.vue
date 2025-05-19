<template>
  <section class="block block-1">
    <div class="content">
      <h1>Winter Solstice</h1>
      <p>The longest night of the year</p>
    </div>
  </section>

  <section class="block block-2">
    <div class="content">
      <h2>Celebration</h2>
      <p></p>
    </div>
  </section>

  <section class="block block-3">
    <div class="content">
      <h2>Nature</h2>
      <p>The turning point of light</p>
    </div>
  </section>

  <section class="block block-4">
    <div class="content">
      <h2>Traditions</h2>
      <p>Ancient customs from around the world</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.block {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: 40vh;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.content {
  z-index: 2;
  position: relative;
}

.block::before {
  content: '';
  width: 100%;
  height: 168px;
  position: absolute;
  bottom: -0.3%;
  left: 0;
  background-size: auto;
  background-repeat: repeat no-repeat;
  z-index: 1;
}

@media (max-width: 850px) {
  .block::before {
    height: 84px;
  }
}

.block-1 {
  background-color: #20b2aa;
}

.block-1::before {
  background-position: 11vw bottom;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 127' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 93L50 87C100 82 200 70 300 47C400 25 500 -10 600 2C700 13 800 70 900 93C1000 116 1100 104 1150 99L1200 93V127H1150C1100 127 1000 127 900 127C800 127 700 127 600 127C500 127 400 127 300 127C200 127 100 127 50 127H0V93Z' fill='%23FFF5EE'/></svg>");
}

.block-2 {
  background-color: #fff5ee;
  color: #333;
}
.block-2::before {
  background-position: 57vw bottom;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 127' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 93L50 87C100 82 200 70 300 47C400 25 500 -10 600 2C700 13 800 70 900 93C1000 116 1100 104 1150 99L1200 93V127H1150C1100 127 1000 127 900 127C800 127 700 127 600 127C500 127 400 127 300 127C200 127 100 127 50 127H0V93Z' fill='%23ADC178'/></svg>");
}

.block-3 {
  background-color: #adc178;
}
.block-3::before {
  background-position: 0vw bottom;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 127' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 93L50 87C100 82 200 70 300 47C400 25 500 -10 600 2C700 13 800 70 900 93C1000 116 1100 104 1150 99L1200 93V127H1150C1100 127 1000 127 900 127C800 127 700 127 600 127C500 127 400 127 300 127C200 127 100 127 50 127H0V93Z' fill='%23ffffff'/></svg>");
}

.block-4 {
  background-color: #ffffff;
  color: #222;
}
.block-4::before {
  display: none;
}
</style>
