<!-- src/views/HomeView.vue -->
<template>
  <section class="page">
    <div class="intro-container">
      <h2>{{ $t('home.intro') }}</h2>
    </div>
    <div class="card-container">
      <section class="card">
        <div class="card-text">
          <h2>{{ $t('home.history.title') }}</h2>
          <p>{{ $t('home.history.origin') }}</p>
        </div>
      </section>

      <section class="card">
        <div class="card-text">
          <h2>Переиспользование</h2>
          <p>{{ $t('home.history.reuse') }}</p>
        </div>
      </section>

      <section class="card">
        <div class="card-text">
          <h2>Местоположение</h2>
          <p>{{ $t('home.history.location') }}</p>
          <p>{{ $t('home.history.status') }}</p>
        </div>
      </section>
    </div>
    <div class="history-timeline">
      <h2>Исторические периоды Ньюгрейнджа</h2>
      <div class="timeline-container">
        <div class="timeline-item ancient">
          <div class="timeline-marker">
            <div class="marker-circle"></div>
            <div class="marker-line"></div>
          </div>
          <div class="timeline-content">
            <h3>Древний период</h3>
            <div class="period-card">
              <div class="period-image">
                <img
                  src="../assets/main/ancient.jpeg"
                  alt="Древний Ньюгрейндж"
                />
              </div>
              <div class="period-text">
                <p>{{ $t('home.history.periods.decline') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item rediscovery">
          <div class="timeline-marker">
            <div class="marker-circle"></div>
            <div class="marker-line"></div>
          </div>
          <div class="timeline-content">
            <h3>1699 год</h3>
            <div class="period-card">
              <div class="period-text">
                <p>{{ $t('home.history.periods.rediscovery') }}</p>
              </div>
              <div class="period-image">
                <img
                  src="../assets/main/rediscovery.jpeg"
                  alt="Открытие Ньюгрейнджа"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item modern">
          <div class="timeline-marker">
            <div class="marker-circle"></div>
            <div class="marker-line"></div>
          </div>
          <div class="timeline-content">
            <h3>XX век</h3>
            <div class="period-card">
              <div class="period-image">
                <img
                  src="../assets/main/modern.jpeg"
                  alt="Археологические раскопки"
                />
              </div>
              <div class="period-text">
                <p>{{ $t('home.history.periods.archaeological') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="theories-container">
      <h2>Теории происхождения</h2>
      <div class="card-container">
        <section class="card">
          <div class="card-text">
            <h2>{{ $t('home.history.theories.labor.title') }}</h2>
            <p>{{ $t('home.history.theories.labor.description') }}</p>
          </div>
        </section>
        <section class="card">
          <div class="card-text">
            <h2>{{ $t('home.history.theories.mystical.title') }}</h2>
            <p>{{ $t('home.history.theories.mystical.description') }}</p>
          </div>
        </section>
        <section class="card">
          <div class="card-text">
            <h2>{{ $t('home.history.theories.archaeological.title') }}</h2>
            <p>{{ $t('home.history.theories.archaeological.description') }}</p>
          </div>
        </section>
      </div>
    </div>
    <div class="scroll-card">
      <p>Тут какой то текст</p>
      <button class="scroll-btn left" @click="scrollLeft">❮</button>
      <button class="scroll-btn right" @click="scrollRight">❯</button>
      <div class="scroll-content" ref="scrollContent">
        <section
          class="card"
          v-for="(items, index) in architectureData"
          :key="index"
        >
          <!--TODO: сделать функцию для выбора фотографии, мб будет нужна отдельная папака с пронумерованными изображениями -->
          <img src="../assets/main/modern.jpeg" />
          <ul>
            <li v-for="(arch, i) in items" :key="i">
              {{ arch }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import jsonData from '../locales/ru.json';

type ArchitectureData = string[][];

const scrollContent = ref<HTMLElement | null>(null);
const architectureData = (jsonData.home.architecture ?? []) as ArchitectureData;

function scrollLeft(): void {
  if (scrollContent.value) {
    scrollContent.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
}

function scrollRight(): void {
  if (scrollContent.value) {
    scrollContent.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
</script>

<style scoped>
h1,
h2 {
  color: rgba(44, 62, 80, 0.9);
  margin-top: 2vh;
}

h3,
h4 {
  margin-top: 1vh;
  color: rgba(52, 73, 94, 0.85);
}
ul {
  padding-left: 1.5vw;
}

li {
  margin-bottom: 0.5vh;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2vh 2vw;
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
  transform: translateX(-50%) translateY(-45%);
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
  background: rgba(248, 249, 250, 0.95);
  z-index: -2;
}
.intro-container {
  text-align: left;
  margin-right: auto;
  max-width: 50vw;
  padding: 1vh 0;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 40vw), 1fr));
  gap: 2vh;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  display: flex;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2vh;
  padding: 2vh;
  box-shadow: 0 0.4vh 2vh rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}

.card h2 {
  color: rgba(44, 62, 80, 0.9);
  margin-bottom: 1vh;
  font-size: 1.5rem;
}

.card p,
.scroll-card {
  color: rgba(127, 140, 141, 0.9);
  line-height: 1.6;
}

.history-timeline {
  width: 100%;
  max-width: 1200px;
  margin: 4vh auto;
  padding: 0 2vw;
  background-image: url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 500 100%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient id%3D%22grad1%22 x1%3D%220%25%22 y1%3D%220%25%22 x2%3D%220%25%22 y2%3D%22100%25%22%3E%3Cstop offset%3D%220%25%22 style%3D%22stop-color%3Argb(169%2C 132%2C 103)%3B stop-opacity%3A0.9%3B%22 /%3E%3Cstop offset%3D%22100%25%22 style%3D%22stop-color%3Argb(221%2C 229%2C 182)%3B stop-opacity%3A0.9%3B%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d%3D%22M0,70 C150,0 350,100 500,50 L500,120 L0,100 Z%22 fill%3D%22url(%23grad1)%22 /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-size: cover;
}

.timeline-container {
  position: relative;
  padding: 2vh 0;
}

.timeline-item {
  display: flex;
  margin-bottom: 3vh;
  position: relative;
}

.timeline-content {
  flex: 1;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.period-card {
  display: flex;
  overflow: hidden;
  border-radius: 2vh;
}
.period-image {
  flex: 1;
  min-height: 20vh;
  overflow: hidden;
}

.period-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.period-text {
  flex: 1;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.period-text p {
  color: rgb(44, 62, 80);
  line-height: 1.7;
  margin: 1.5vh;
  padding: 2vh;
}
.timeline-marker {
  position: relative;
  width: 4vw;
}

.marker-circle {
  width: 2.5vh;
  height: 2.5vh;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: 0.4vh solid;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.timeline-item.ancient .marker-circle {
  border-color: rgba(173, 193, 120, 0.9);
}

.timeline-item.rediscovery .marker-circle {
  border-color: rgba(108, 117, 125, 0.9);
}

.timeline-item.modern .marker-circle {
  border-color: rgba(44, 62, 80, 0.9);
}

.marker-line {
  position: absolute;
  left: 0.5vw;
  top: 2.5vh;
  width: 0.2vw;
  height: calc(100% + 3vh);
  background: linear-gradient(
    to bottom,
    rgba(173, 193, 120, 0.9),
    rgba(108, 117, 125, 0.8),
    rgba(44, 62, 80, 0.7)
  );
  z-index: 1;
}

.timeline-item:last-child .marker-line {
  background: linear-gradient(
    to bottom,
    rgba(173, 193, 120, 0.9),
    rgba(234, 224, 224, 0.8),
    rgba(255, 255, 255, 0.7)
  );
}
.scroll-card {
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}
.scroll-content {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 12px 0;
  scrollbar-width: thin;
}
</style>
