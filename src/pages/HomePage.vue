<!-- src/views/HomeView.vue -->
<template>
  <section class="page">
    <div class="intro-container">
      <h2>{{ $t('home.intro') }}</h2>
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
          <h2>{{ $t('home.history.theories.labor.title') }}</h2>
          <p>{{ $t('home.history.theories.labor.description') }}</p>
        </section>
        <section class="card">
          <h2>{{ $t('home.history.theories.mystical.title') }}</h2>
          <p>{{ $t('home.history.theories.mystical.description') }}</p>
        </section>
        <section class="card">
          <h2>{{ $t('home.history.theories.archaeological.title') }}</h2>
          <p>{{ $t('home.history.theories.archaeological.description') }}</p>
        </section>
      </div>
    </div>
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

.history-timeline {
  width: 100%;
  max-width: 1200px;
  margin: 4vh auto;
  padding: 0 2vw;
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
  background-color: rgba(221, 229, 182, 0.95);
  background-image: url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 500 100%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath d%3D%22M0,50 C150,100 350,0 500,50 L500,0 L0,0 Z%22 fill%3D%22rgba(169, 132, 103, 0.9)%22 /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-size: cover;
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
  color: rgba(52, 73, 94, 0.9);
  line-height: 1.7;
  margin-bottom: 1.5vh;
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
</style>
