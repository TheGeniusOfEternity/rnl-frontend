<script setup lang="ts">
import jsonData from '../../locales/ru.json';
</script>

<template>
  <section class="page">
    <h1 class="title">{{ $t('interview.intro') }}</h1>
    <div class="topics">
      <div
        v-for="(topic, topicIndex) in jsonData.interview.topics"
        :key="topicIndex"
      >
        <h2 class="topic">{{ topic.title }}</h2>
        <div
          class="pair"
          v-for="(pair, pairIndex) in topic.pairs"
          :key="pairIndex"
        >
          <div class="question">- {{ pair.question }}</div>
          <div class="answer">
            - {{ pair.answer }}
            <a
              class="link"
              v-if="pair.link"
              :href="pair.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ pair.link }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
      <h1 class="title">Полезные ссылки от Клэр Таффи</h1>
      <div
        class="credit"
        v-for="(credit, index) in jsonData.interview.credits"
        :key="index"
      >
        <h4>- {{ credit.title }}</h4>
        <a
          class="link"
          :href="credit.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ credit.link }}
        </a>
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
  width: 250%;
  height: 43%;
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
  margin: 5vh auto;
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

.link {
  font-style: italic;
}
.credits {
  background-color: #f3f1fa;
  color: #453c5c;
  padding: 2vw;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 3vh;

  .title {
    margin: 0;
  }

  .credit {
    display: flex;
    flex-direction: column;

    h4,
    a {
      margin: 0;
      font-size: 1.2rem;
    }
  }
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
  .credits {
    padding: 5vw 5vw 15vh 5vw;

    .credit {
      h4,
      a {
        font-size: 1rem;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
