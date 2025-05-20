<script setup lang="ts">
import jsonData from '../../locales/ru.json';
</script>

<template>
  <section class="page">
    <h1 class="title">{{ $t('interview.intro') }}</h1>
    <div class="topics">
      <div v-for="(topic, index) in jsonData.interview.topics" :key="index">
        <h2 class="topic">{{ topic.title }}</h2>
        <div class="pair" v-for="(pair, index) in topic.pairs" :key="index">
          <div class="question">- {{ pair.question }}</div>
          <div class="answer">- {{ pair.answer }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10vh 20%;
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
  height: 70%;
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

.title {
  font-size: 1.6rem;
  color: var(--dark-blue);
  white-space: pre-line;
}

.topic {
  color: var(--mid-blue);
}

.topics {
  width: 100%;
  margin: 15vh auto;
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.pair {
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-bottom: 4vh;
  border-bottom: 1px solid #ddd;
  padding-bottom: 4vh;
}

.question {
  background-color: #f0f8ff;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #a9cce3;
  color: #34495e;
  width: 70%;
  white-space: pre-line;
  font-size: 1.3rem;
}

.answer {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #453c5c;
  background-color: #f3f1fa;
  color: #453c5c;
  width: 70%;
  margin-left: auto;
  white-space: pre-line;
  font-size: 1.3rem;
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 1.2rem;
  }
  .page {
    padding: 5vh 10%;
  }
  .page:before {
    height: 65%;
    width: 200%;
  }
  .question {
    width: 80%;
    font-size: 1rem;
  }
  .answer {
    width: 80%;
    font-size: 1rem;
  }
  .topics {
    margin: 5vh auto;
  }
}
</style>
