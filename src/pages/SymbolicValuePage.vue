<template>
  <div class="page">
    <header class="hero">
      <h1>Ньюгрейндж в ирландской мифологии и его символическое значение</h1>
    </header>

    <section class="section section-light">
      <h2>1 Мифологические названия и роль</h2>
      <p>
        <strong>Сид ин Брога</strong> (совр. Сидхе ан Бруга, Си ан Бру) — одно
        из имён Ньюгрейнджа в ирландской мифологии. Считался порталом в
        Потусторонний мир и обителью богов Туата Де Дананн.
      </p>
    </section>

    <section class="section section-dark">
      <h2>2 Легенда о Дагде, Боанн и Энгусе</h2>
      <h3>Начало:</h3>
      <p>
        Дагда (верховный бог) влюбляется в Боанн (богиню реки Бойн), жену
        Элкмара.
      </p>
      <p>
        Дагда отправляет Элкмара прочь и останавливает солнце, чтобы скрыть
        беременность Боанн.
      </p>
      <p>
        Боанн рожает Энгуса (Маккан Ога — «маленького сына»), который позже
        требует у Дагды землю.
      </p>
      <h3>Хитрость Энгуса:</h3>
      <p>
        Он просит Бру-на-Бойн «на день и ночь», но затем заявляет, что всё время
        состоит из дней и ночей, поэтому владеет землёй вечно. В некоторых
        версиях он отбирает Бру у самого Дагды тем же способом.
      </p>
      <h3>Итоги легенды:</h3>
      <p>
        Миф может отражать зимнее солнцестояние, когда солнечный луч (Дагда)
        проникает в камеру (чрево Боанн). Энгус символизирует возрождение солнца
        после самой долгой ночи.
      </p>
    </section>

    <section class="section section-light">
      <h2>3 Легенда о Доуте (Дабхаде) и остановке времени</h2>
      <p>
        <strong>Легенда:</strong> Король Бресал заставляет ирландцев построить
        башню до небес за один день. Его сестра останавливает солнце, продлевая
        день, но Бресал совершает инцест, разрушая заклятие. Солнце заходит,
        строители уходят, и место получает имя Dubhadh («потемнение»).
      </p>
      <p>
        <em>Удивительный факт:</em> Анализ ДНК показал, что один из погребённых
        в Ньюгрейндже был рождён от брата и сестры.
      </p>
    </section>

    <section class="section section-dark">
      <h2>4 Описание Ньюгрейнджа в мифах</h2>
      <p>Как называют Ньюгрейндж в легендах?</p>
      <ul>
        <li>«С белой вершиной» (отсылка к кварцевому покрытию).</li>
        <li>
          «Сияющий при приближении», «украшенный огнями» (возможно, ритуальные
          огни или отблески камней).
        </li>
      </ul>
    </section>

    <section class="section section-light">
      <h2>5 Современное понимание Ньюгрейнджа</h2>
      <p>
        Первоначально считался гробницей, но теперь признан многофункциональным
        священным комплексом.
      </p>
      <h3>Зимнее солнцестояние:</h3>
      <p>
        21 декабря луч солнца проникает внутрь, освещая центральную камеру. Это
        явление изучал археолог Майкл Дж. О’Келли.
      </p>
      <h3>Архитектурный термин:</h3>
      <p>
        Ньюгрейндж называют «пирамидой» — искусственной насыпью из камней и
        гравия.
      </p>
      <h3>Статус:</h3>
      <p>Объект Всемирного наследия ЮНЕСКО.</p>
    </section>

    <section class="section section-dark">
      <h2>6 Сохранение фольклора</h2>
      <p>
        Местные предания о Ньюгрейндже передавались устно и дошли до наших дней.
      </p>
    </section>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

:root {
  --pale-cream: #f0ead2;
  --light-green: #dde5b6;
  --medium-green: #adc178;
  --warm-tan: #a98467;
  --dark-brown: #6c584c;
  --light-section: #f5f5f5;
  --dark-section: #e0e0e0;
  --highlight-color: #d1e7dd;
}

.page {
  width: 100%;
  background: var(--pale-cream);
  color: var(--dark-brown);
  padding: 1rem;
}

.hero {
  background: var(--light-green);
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
  border: 2px solid var(--medium-green);
}

.hero h1 {
  margin: 0;
  font-size: 3rem;
}

.section {
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--dark-brown);
  border-radius: 5px;
  opacity: 0;
  animation: slideIn 0.5s ease-out forwards;
  transition: all 0.3s ease;
}

.section-light {
  background: var(--light-section);
}

.section-dark {
  background: var(--dark-section);
}

.section h2 {
  margin-top: 0;
  font-size: 2rem;
  color: var(--warm-tan);
}

.section h3 {
  color: var(--medium-green);
  margin: 1rem 0 0.5rem;
}

.section p {
  margin: 1rem 0;
}

.section ul {
  padding-left: 2rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section:nth-child(2) {
  animation-delay: 0.2s;
}
.section:nth-child(3) {
  animation-delay: 0.4s;
}
.section:nth-child(4) {
  animation-delay: 0.6s;
}
.section:nth-child(5) {
  animation-delay: 0.8s;
}
.section:nth-child(6) {
  animation-delay: 1s;
}
.section:nth-child(7) {
  animation-delay: 1.2s;
}

.section:hover {
  background-color: var(--highlight-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  border-color: var(--medium-green);
}
</style>
