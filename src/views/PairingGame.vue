<template>
  <main class="bg-gradient-home">
    <PairingMenu />
    <div class="container mt-spac-s">
      <!-- 進度條 -->
      <div class="d-flex justify-content-start align-items-center mb-spac-m">
        <div class="progress-bar rounded-full me-spac-s">
          <div 
            class="progress-fill rounded-full" 
            :style="{ width: `${progressPercentage}%` }"
          ></div>
        </div>
        <div class="flex-shrink-0">
          {{ remainingTime }} 秒
        </div>
      </div>

      <!-- 問題 + 選項 區域 -->
      <transition name="slide" mode="out-in">
        <div :key="currentQuestion">
          <div class="row">
            <div class="col-12">
              <p class="text-primary fs-text-lg fw-bold lh-h6 mb-spac-xs">
                問題 {{ currentQuestion + 1 }} / {{ totalQuestions }}
              </p>
              <h1 class="text-primary fs-4 fw-bold lh-h4 mb-spac-m">
                {{ questions[currentQuestion]?.question }}
              </h1>
            </div>
          </div>

          <!-- 選擇答案 -->
          <div class="row">
            <div 
              class="col-12 gy-3" 
              v-for="(option, index) in questions[currentQuestion]?.options" 
              :key="index"
            >
              <button
                type="button"
                class="answer-btn d-flex justify-content-center align-items-center px-spac-xs"
                :class="{
                  'selected': userChoice === index,
                  'disabled': hasAnswered || remainingTime === 0
                }"
                :disabled="hasAnswered || remainingTime === 0"
                @click="selectAnswer(index)"
              >
                <!-- 左邊對方模擬答案 -->
                <img 
                  v-if="opponentChoice === index && hasAnswered" 
                  :src="other01Img" 
                  alt="opponent" 
                  class="choice-icon otherSide-choice"
                />

                <!-- 中間文字 -->
                <span class="answer-text">
                  {{ option }}
                </span>

                <!-- 右邊自己選擇答案 -->
                <img 
                  v-if="userChoice === index && hasAnswered" 
                  :src="self06Img" 
                  alt="player" 
                  class="choice-icon myself-choice"
                />
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import PairingMenu from '../components/PairingMenu.vue';
import other01Img from '@/assets/images/pairing_img/anons/other01.png';
import self06Img from '@/assets/images/pairing_img/anons/self06.png';

const router = useRouter();
const currentQuestion = ref(0);
const totalQuestions = ref(5);
const remainingTime = ref(30);
const hasAnswered = ref(false);
const userChoice = ref(null);
const opponentChoice = ref(null);
let timer = null;

// 問題資料
const questions = ref([
  {
    question: "吃滷肉飯的時候你的習慣是？",
    options: ["飯跟滷肉拌在一起", "飯跟滷肉分開", "看心情決定"]
  },
  {
    question: "吃火鍋湯底加芋頭嗎？",
    options: ["必須加滿", "堅決不加", "看心情決定"]
  },
  {
    question: "粽子你站哪邊？",
    options: ["北部粽", "南部粽", "都可以，好吃最重要"]
  },
  {
    question: "湯圓你喜歡？",
    options: ["甜湯圓", "鹹湯圓", "甜鹹都愛"]
  },
  {
    question: "早餐店你最常點？",
    options: ["蛋餅", "麵包", "我不吃早餐"]
  }
]);

// 進度條
const progressPercentage = computed(() => {
  return (remainingTime.value / 30) * 100;
});

// 開始計時
function startTimer() {
  timer = setInterval(() => {
    remainingTime.value--;
    
    if (remainingTime.value <= 0) {
      // 30秒結束自動切換到下一題
      nextQuestion();
    }
  }, 1000);
};

// 選擇答案
function selectAnswer(index) {
  if (hasAnswered.value || remainingTime.value === 0) return;
  
  userChoice.value = index;
  hasAnswered.value = true;
  
  // 模擬對手選擇
  setTimeout(() => {
    opponentChoice.value = Math.floor(Math.random() * questions.value[currentQuestion.value].options.length)
  }, 2000);
};

// 下一題
function nextQuestion() {
  clearInterval(timer);
  
  if (currentQuestion.value < totalQuestions.value - 1) {
    
    currentQuestion.value++;
    resetQuestionState();
    startTimer();
  } else {
    // 問題答完切換下一頁
    router.push('/PairingResult');
  };
};

// 重設問題秒數
function resetQuestionState() {
  remainingTime.value = 30;
  hasAnswered.value = false;
  userChoice.value = null;
  opponentChoice.value = null;
};

// 從開始第一題
onMounted(() => {
  startTimer();
});

// 清除計時器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  };
});
</script>

<style scoped>
/* 進度條樣式 */
.progress-bar {
  position: relative;
  width: 281px;
  height: 12px;
  background-color: var(--surface-progressbar-empty, #FFEDD5);
  overflow: hidden;
}
.progress-bar::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(27, 27, 27, 0.1); 
  pointer-events: none;
}
.progress-fill {
  width: 100%;
  height: 100%;
  background: #FDB468;
  transition: width 3s linear;
}

/* 答案選項 */
.answer-btn {
  background-color: #FFEDD5;
  border: 1.5px solid #1B1B1B1A;
  border-radius: 1000px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 15px 0px;
  width: 100%;
}
.answer-btn.selected {
  background-color: #FB923C;
  border: none;
  color: white;
  text-align: center;
}
.choice-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: opacity 0.8s ease;
  opacity: 1;
}
.answer-text {
  flex: 1;
  text-align: center;
}
/* 切換題目效果 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>