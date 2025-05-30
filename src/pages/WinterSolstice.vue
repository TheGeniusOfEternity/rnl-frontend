<template>
  <section class="page">
    <div class="intro-container">
      <h2>Зимнее солнцестояние в Ньюгрейндже</h2>
    </div>
    <div class="card-container">
      <section class="card wide-card">
        <div class="card-image">
          <img
            src="/src/assets/winter-solstice/solstice-beam.jpg"
            alt="Солнечный луч в Ньюгрейндже"
          />
        </div>
        <div class="card-text">
          <h2>1. Особенность зимнего солнцестояния</h2>
          <p>
            Каждый год приблизительно с 19 по 23 декабря, во время восхода
            солнца, лучи света проникают через специальное окно над входом,
            проходят по коридору и на ≈17 минут заполняют внутреннюю камеру.
            Явление длится всего несколько дней и привлекает тысячи туристов и
            исследователей.
          </p>
        </div>
      </section>

      <section class="card wide-card reverse">
        <div class="card-image">
          <img
            src="/src/assets/winter-solstice/entrance-roofbox.jpg"
            alt="Вход и roof-box Ньюгрейнджа"
          />
        </div>
        <div class="card-text">
          <h2>2. Архитектура и астрономические знания</h2>
          <p>
            Окно над входом («roof-box») расположено с потрясающей точностью:
            оно направляет солнечный луч точно внутрь в дни зимнего
            солнцестояния. В центральной камере стоит чаша — вероятно,
            ритуального назначения; поэтому её часто называют погребальной.
          </p>
        </div>
      </section>

      <section class="card wide-card">
        <div class="card-image">
          <img
            src="/src/assets/winter-solstice/lottery-winners.jpg"
            alt="Внутри Ньюгрейнджа на рассвете"
          />
        </div>
        <div class="card-text">
          <h2>3. Посещение во время зимнего солнцестояния</h2>
          <p>
            Попасть внутрь в эти дни непросто — нужно выиграть ежегодную
            лотерею. Лишь по 10 счастливчиков в день наблюдают явление из
            центральной камеры. Очевидцы описывают это как нечто магическое и
            мистическое.
          </p>
        </div>
      </section>

      <section class="card wide-card reverse">
        <div class="card-image">
          <img
            src="/src/assets/winter-solstice/artificial-light.jpg"
            alt="Искусственная демонстрация эффекта"
          />
        </div>
        <div class="card-text">
          <h2>4. Посещение в другие дни</h2>
          <p>
            В остальное время для посетителей проводят демонстрацию с
            проекторами: узкий луч искусственного света повторяет путь
            солнечного луча. Камера невелика, поэтому на реконструкцию пускают
            максимум 24 человека в день.
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  padding: var(--header-height) 2vw;
  max-width: 60%;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.page::before {
  content: '';
  position: fixed;
  top: -30%;
  left: 50%;
  width: 200%;
  height: 100%;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-20%);
  background: radial-gradient(
    circle at center,
    rgba(173, 193, 120, 0.8) 0%,
    rgba(221, 229, 182, 0.5) 70%,
    transparent 100%
  );
  z-index: -2;
}

.page::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(248, 249, 250, 0.95);
  z-index: -3;
}

.intro-container h2 {
  font-size: 2rem;
  margin: 5vh 0 3vh 0;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 4vh;
}

.card {
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5vh;
  overflow: hidden;
  box-shadow: 0 0.4vh 2vh rgba(0, 0, 0, 0.1);
}

.card.reverse {
  flex-direction: row-reverse;
}

.card-image img {
  border-radius: 1.5vh;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-text {
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2vh 2vw;
}

.card-image {
  flex: 1;
  width: 100%;
}

.card-text h2 {
  margin-bottom: 1vh;
  font-size: 1.2rem;
  color: rgba(44, 62, 80, 0.9);
}

.card-text p {
  line-height: 1.6;
  color: rgba(52, 73, 94, 0.85);
}

@media (max-width: 900px) {
  .page {
    max-width: 90%;
    padding-bottom: 5%;
  }
  .intro-container h2 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 0;
  }

  .card-container {
    gap: 5vh;
  }

  .card,
  .card.reverse {
    flex-direction: column;
    gap: 2vh;
    padding: 1.3rem;
  }

  .card-text h2 {
    margin-top: 0;
  }

  .card-text p {
    margin-top: 0;
  }
}
</style>
