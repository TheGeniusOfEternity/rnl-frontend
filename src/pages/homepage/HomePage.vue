<template>
  <section class="page">
    <div class="intro-container">
      <h2>{{ t('home.intro') }}</h2>
    </div>
    <div class="card-container">
      <section class="card">
        <div class="card-text">
          <h2>{{ t('home.history.title') }}</h2>
          <p>{{ t('home.history.origin') }}</p>
        </div>
      </section>

      <section class="card">
        <div class="card-text">
          <h2>Переиспользование</h2>
          <p>{{ t('home.history.reuse') }}</p>
        </div>
      </section>

      <section class="card">
        <div class="card-text">
          <h2>Местоположение</h2>
          <p>{{ t('home.history.location') }}</p>
          <p>{{ t('home.history.status') }}</p>
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
                  src="../../assets/main/ancient.jpeg"
                  alt="Древний Ньюгрейндж"
                />
              </div>
              <div class="period-text">
                <p>{{ t('home.history.periods.decline') }}</p>
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
                <p>{{ t('home.history.periods.rediscovery') }}</p>
              </div>
              <div class="period-image">
                <img
                  src="../../assets/main/rediscovery.jpeg"
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
                  src="../../assets/main/modern.jpeg"
                  alt="Археологические раскопки"
                />
              </div>
              <div class="period-text">
                <p>{{ t('home.history.periods.archaeological') }}</p>
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
            <h2>{{ t('home.history.theories.labor.title') }}</h2>
            <p>{{ t('home.history.theories.labor.description') }}</p>
          </div>
        </section>
        <section class="card">
          <div class="card-text">
            <h2>{{ t('home.history.theories.mystical.title') }}</h2>
            <p>{{ t('home.history.theories.mystical.description') }}</p>
          </div>
        </section>
        <section class="card">
          <div class="card-text">
            <h2>{{ t('home.history.theories.archaeological.title') }}</h2>
            <p>{{ t('home.history.theories.archaeological.description') }}</p>
          </div>
        </section>
      </div>
    </div>

    <div class="architecture-container">
      <div class="architecture-intro">
        <h2>{{ jsonData.home.architecture.title }}</h2>
        <p>{{ jsonData.home.architecture.description }}</p>
      </div>
      <div class="architecture-scroll" ref="scrollContent">
        <div
          class="architecture-card"
          v-for="(card, index) in architectureCards"
          :key="index"
        >
          <img
            :src="`/rnl-frontend/assets/main/arch-${index + 1}.png`"
            alt="image"
          />

          <div class="card-title">{{ card.title }}</div>

          <ul class="card-params">
            <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="scroll-buttons intro-scroll-buttons">
        <button @click="scrollLeft" :aria-label="t('home.scrollLeft')">
          {{ t('home.scrollLeft') }}
        </button>
        <button @click="scrollRight" :aria-label="t('home.scrollRight')">
          {{ t('home.scrollRight') }}
        </button>
      </div>
    </div>

    <div class="astronomy-container">
      <h2>Астрономическое значение</h2>
      <div class="timeline-container">
        <div class="timeline-item ancient">
          <div class="timeline-content">
            <h3>Астрономическая ориентация</h3>
            <div class="period-card">
              <div class="period-image">
                <img
                  src="../../assets/main/orientation.png"
                  alt="Древний Ньюгрейндж"
                />
              </div>
              <div class="period-text">
                <div class="astro-div">
                  {{ t('home.astronomy.orientation.tunnel') }}.
                </div>
                <div class="astro-div">
                  {{ t('home.astronomy.orientation.entrance') }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item rediscovery">
          <div class="timeline-content">
            <h3>Феномен солнцестояния</h3>
            <div class="period-card">
              <div class="period-text">
                <div class="astro-div">
                  {{ t('home.astronomy.fenomen.osvesh') }}
                </div>
                <div class="astro-div">
                  {{ t('home.astronomy.fenomen.duration') }}
                </div>
                <div class="astro-div">
                  {{ t('home.astronomy.fenomen.effect') }}.
                </div>
              </div>
              <div class="period-image">
                <img
                  src="../../assets/main/fenomen.png"
                  alt="Открытие Ньюгрейнджа"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item modern">
          <div class="timeline-content">
            <h3>Как попасть?</h3>
            <div class="period-card">
              <div class="period-image">
                <img
                  src="../../assets/main/modern.jpeg"
                  alt="Археологические раскопки"
                />
              </div>
              <div class="period-text">
                <div class="astro-div">
                  {{ t('home.astronomy.lottery&access.lottery') }}
                </div>
                <div class="astro-div">
                  {{ t('home.astronomy.lottery&access.stat') }}
                </div>
                <div class="astro-div">
                  {{ t('home.astronomy.lottery&access.reconstruction') }}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-container double-cards">
      <section class="card wide-card">
        <div class="card-text">
          <h2>Экскурсии и посещение</h2>
          <div class="card-content">
            <div class="card-section">
              <h3>Организация посещений</h3>
              <ul>
                <li>
                  {{ t('home.excursions&attendance.organization.guide') }}
                </li>
                <li>
                  {{ t('home.excursions&attendance.organization.groups') }}
                </li>
                <li>
                  {{ t('home.excursions&attendance.organization.access') }}
                </li>
              </ul>
            </div>
            <div class="card-section">
              <h3>Как добраться</h3>
              <ul>
                <li>{{ t('home.excursions&attendance.how2get.location') }}</li>
                <li>{{ t('home.excursions&attendance.how2get.access') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="card wide-card">
        <div class="card-text">
          <h2>Значение и наследие</h2>
          <div class="card-content">
            <div class="card-section">
              <h3>Мировое значение</h3>
              <ul>
                <li>
                  {{ t('home.value&heritage.worlwide_value.unesco') }}
                </li>
                <li>
                  {{ t('home.value&heritage.worlwide_value.neolit') }}
                </li>
              </ul>
            </div>
            <div class="card-section">
              <h3>Культурная ценность</h3>
              <p>{{ t('home.value&heritage.cultural_value') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import jsonData from '../../locales/ru.json';
import type { ArchitectureCard, ArchitectureSection } from './types.ts';
import '../../assets/style/main-page.css';
import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const architectureRaw = jsonData.home?.architecture;
const { t } = useI18n();
const architectureCards = ref<ArchitectureCard[]>(
  architectureRaw?.items?.map((section: ArchitectureSection) => ({
    title: section.title,
    items: section.params,
  })) ?? []
);

const scrollContent = ref<HTMLElement | null>(null);
const handleWheel = (e: WheelEvent) => {
  if (!scrollContent.value) return;
  e.preventDefault();
  scrollContent.value.scrollLeft += e.deltaY;
};

const setupScrollHandlers = () => {
  if (scrollContent.value) {
    scrollContent.value.addEventListener('wheel', handleWheel, {
      passive: false,
    });
  }
};

const removeScrollHandlers = () => {
  if (scrollContent.value) {
    scrollContent.value.removeEventListener('wheel', handleWheel);
  }
};

onMounted(() => {
  if (scrollContent.value) {
    scrollContent.value.addEventListener('mouseenter', setupScrollHandlers);
    scrollContent.value.addEventListener('mouseleave', removeScrollHandlers);
  }
});

onUnmounted(() => {
  if (scrollContent.value) {
    scrollContent.value.removeEventListener('mouseenter', setupScrollHandlers);
    scrollContent.value.removeEventListener('mouseleave', removeScrollHandlers);
    removeScrollHandlers();
  }
});

function scrollLeft(): void {
  if (scrollContent.value) {
    const scrollValue =
      window.innerWidth > 900
        ? -scrollContent.value.clientWidth * 0.34
        : -scrollContent.value.clientWidth * 1.1;
    scrollContent.value.scrollBy({
      left: scrollValue,
      behavior: 'smooth',
    });
  }
}

function scrollRight(): void {
  if (scrollContent.value) {
    const scrollValue =
      window.innerWidth > 900
        ? scrollContent.value.clientWidth * 0.34
        : scrollContent.value.clientWidth * 1.1;
    scrollContent.value.scrollBy({
      left: scrollValue,
      behavior: 'smooth',
    });
  }
}
</script>

<style scoped>
h1,
h2 {
  color: var(--dark-blue);
  margin-top: 2vh;
}

h3,
h4 {
  margin-top: 1vh;
  color: var(--mid-blue);
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
  width: 100%;
  min-height: 100vh;
  margin: var(--header-height) auto 0 auto;
  padding: 2vh 15%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  gap: 5vh;
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
    var(--green-tint) 0%,
    var(--green-pale),
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
  background: var(--beige-tint);
  z-index: -2;
}

.intro-container {
  text-align: left;
  padding: 1vh 0;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 40vw), 1fr));
  gap: 2vh;
}

.card {
  display: flex;
  overflow: hidden;
  background: var(--bg-white-soft);
  border-radius: 2vh;
  padding: 2vh;
  box-shadow: 0 0.4vh 2vh rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card h2 {
  color: var(--dark-blue);
  margin-bottom: 1vh;
  font-size: 1.5rem;
}

.card p,
.scroll-card {
  color: var(--light-grey);
  line-height: 1.6;
}

.history-timeline {
  width: 100%;
  margin: 4vh auto;
  background-image: var(--gradient-wave);
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
  color: var(--dark-blue);
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
  background: var(--white-hover);
  border: 0.4vh solid;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.timeline-item.ancient .marker-circle {
  border-color: var(--green-tint);
}

.timeline-item.rediscovery .marker-circle {
  border-color: var(--grey-medium);
}

.timeline-item.modern .marker-circle {
  border-color: var(--dark-blue);
}

.marker-line {
  position: absolute;
  left: 0.5vw;
  top: 2.5vh;
  width: 0.2vw;
  height: calc(100% + 3vh);
  background: linear-gradient(
    to bottom,
    var(--green-tint),
    var(--grey-medium-light),
    var(--dark-blue-light)
  );
  z-index: 1;
}

.timeline-item:last-child .marker-line {
  background: linear-gradient(
    to bottom,
    var(--green-tint),
    var(--pink-tint),
    var(--bg-white-soft)
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

.architecture-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}

.architecture-intro {
  color: var(--mid-blue-light);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.architecture-scroll {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 2%;
  scrollbar-width: none;
  width: 100%;
}

.architecture-scroll::-webkit-scrollbar {
  display: none;
}

.architecture-intro h2 {
  font-size: 24px;
  font-weight: bold;
}

.architecture-card {
  min-width: 32%;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.architecture-card img {
  height: 25vh;
  width: auto;
  object-fit: cover;
  border-radius: 15px;
}

.info span {
  font-size: 12px;
  color: #888;
}

.scroll-buttons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.intro-scroll-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.intro-scroll-buttons button {
  background: var(--brown);
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.intro-scroll-buttons button:hover {
  background: var(--brown-light);
}

.card-title {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
}

.card-params {
  list-style: none;
  padding-left: 0;
  font-size: 14px;
  color: #444;
  text-align: left;
  margin: 0;
}

.astronomy-container {
  position: relative;
  width: 100%;
  margin: 4vh auto;
  padding: 0 2vw;
  background-image: var(--gradient-wave);
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

.astronomy-container::before {
  background: radial-gradient(
    circle at center,
    var(--green-tint) 0%,
    var(--green-pale),
    transparent 100%
  );
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  width: 150%;
  height: 80%;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-45%);
  z-index: -1;
}

.astro-div {
  text-align: center;
  padding-left: 20px;
  color: var(--dark-blue-light);
}

.double-cards {
  display: flex;
  width: 100%;
}

.wide-card {
  flex: 1;
}

.card-content {
  display: flex;
  gap: 2vw;
}

.card-section {
  flex: 1;
}

.card-section h3 {
  color: var(--mid-blue);
  margin: 1.5vh 0;
  font-size: 1.2rem;
}

.card-section p,
.card-section li {
  color: var(--mid-blue-light);
}

@media (max-width: 900px) {
  .page {
    padding: 2vh 8%;
  }
  .intro-container h2 {
    font-size: 1rem;
  }
  .card-container {
    display: flex;
    flex-direction: column;
  }
  .period-card,
  .card-content {
    flex-direction: column;
  }
  .architecture-scroll {
    gap: 10%;
  }
  .architecture-card {
    min-width: 100%;
  }
  .card-section ul {
    padding-left: 8%;
  }
}
</style>
