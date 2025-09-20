<template>
  <div class="mt-spac-m">
    <div class="d-flex justify-content-between align-items-center conversation">
      <!-- 對方輸入框 -->
      <div 
        class="bg-lemon-100 rounded-xl w-50 me-spac-m position-relative"
        :class="lastSender === 'other' ? 'w-75' : 'w-25'"
      >

        <div class="conversation-Input d-flex justify-content-center align-items-center">
          <p class="text-secondary-400 fs-text-lg mb-0 py-spac-s px-spac-m">
            {{ otherMsg || "..." }}
          </p>
          <div class="otherInput-circle"></div>
        </div>
      </div>

      <!-- 自己輸入框 -->
      <div 
        class="position-relative bg-sage-100 rounded-xl w-50"
        :class="lastSender === 'self' ? 'w-75' : 'w-25'"
      >
        <div class="conversation-Input d-flex justify-content-center align-items-center">
          <p class="text-secondary-400 fs-text-lg mb-0 py-spac-s px-spac-m">
            {{ selfMsg || "說點什麼吧⋯" }}
          </p>
          <div class="myselfInput-circle"></div>
        </div>
      </div>
    </div>
    
    <!-- 頭像 -->
    <div class="d-flex justify-content-between align-items-center">
      <div class="position-relative">
        <img class="conversation-img" :src="other01Img" alt="">
        <div class="conversation-circle circle-other"></div>
      </div>
      <div class="position-relative">
        <img class="conversation-img" :src="self06Img" alt="">
        <div class="conversation-circle circle-self"></div>
      </div>
    </div>
  </div>

  <div class="mt-spac-m">
    <form class="d-flex flex-column gap-spac-s" @submit.prevent="sendMsg">
      <!-- 輸入框 -->
      <div class="position-relative"  >
        <label for="typeText" class="d-none"></label>
        <input 
          v-model="inputText"
          type="text" 
          class="form-control" 
          id="typeText" 
          placeholder="說說你的食物派系！" />
        <button
          type="submit"
          class="position-absolute top-0 end-0 me-spac-xs mt-spac-xs p-0 border-0 btn-submit"
        >
          <svg
            viewBox="2.59961 2 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            class="w-100 h-auto block"
            width="32"
            height="32"
          >
            <path
              d="M12.5996 22C14.5774 22 16.5108 21.4135 18.1553 20.3147C19.7998 19.2159 21.0815 17.6541 21.8384 15.8268C22.5953 13.9996 22.7933 11.9889 22.4075 10.0491C22.0216 8.10929 21.0692 6.32746 19.6707 4.92894C18.2722 3.53041 16.4903 2.578 14.5505 2.19215C12.6107 1.8063 10.6 2.00433 8.77277 2.76121C6.94551 3.51809 5.38373 4.79981 4.28491 6.4443C3.1861 8.08879 2.59961 10.0222 2.59961 12C2.59961 14.6522 3.65318 17.1957 5.52854 19.0711C6.45713 19.9997 7.55952 20.7363 8.77277 21.2388C9.98603 21.7413 11.2864 22 12.5996 22ZM8.90961 10.14L11.9096 7.28C11.953 7.23768 12.0039 7.20377 12.0596 7.18C12.1067 7.13754 12.1608 7.10369 12.2196 7.08C12.3393 7.0271 12.4687 6.99977 12.5996 6.99977C12.7305 6.99977 12.8599 7.0271 12.9796 7.08C13.1024 7.1276 13.2145 7.19896 13.3096 7.29L16.3096 10.29C16.4979 10.4783 16.6037 10.7337 16.6037 11C16.6037 11.2663 16.4979 11.5217 16.3096 11.71C16.1213 11.8983 15.8659 12.0041 15.5996 12.0041C15.3333 12.0041 15.0779 11.8983 14.8896 11.71L13.5996 10.41V16C13.5996 16.2652 13.4943 16.5196 13.3067 16.7071C13.1192 16.8946 12.8648 17 12.5996 17C12.3344 17 12.08 16.8946 11.8925 16.7071C11.705 16.5196 11.5996 16.2652 11.5996 16V10.34L10.2896 11.59C10.0973 11.773 9.84022 11.8721 9.57486 11.8656C9.3095 11.859 9.05761 11.7473 8.87461 11.555C8.69161 11.3627 8.59249 11.1056 8.59905 10.8403C8.60562 10.5749 8.71733 10.323 8.90961 10.14Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <!-- 隨機回覆 -->
      <div class="btn-reply-list fs-text-md mb-spac-s">
        <div class="btn-reply-wrapper">
          <button
            v-for="(c, i) in visibleReplies"
            :key="i"
            type="button"
            class="btn-reply-item"
            @click="pick(c)"
          >
            <div class="text-emj-item">{{ c.emoji }}</div>
            <div class="text-reply-color fw-medium fs-text-md">{{ c.text }}</div>
          </button>

          <button
            type="button"
            class="reload-quickReply"
            @click="shuffle()"
            aria-label="shuffle quick replies"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#4F4F4F"
            >
              <path
                d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
    <!-- emojis -->
    <div class="emo-group-list">
      <button
        v-for="(e, i) in emojis"
        :key="'e-' + i"
        type="button"
        class="d-block emo-group-item"
        @click="onEmoji(e)"
      >
        <div class="emo-group-emoji">{{ e }}</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import other01Img from '@/assets/images/pairing_img/anons/other01.webp';
import self06Img from '@/assets/images/pairing_img/anons/self06.png';

// 綁定的訊息
const selfMsg = ref(""); // 自己輸入的文字
const otherMsg = ref(""); // 模擬對方輸入
const inputText = ref(""); // 輸入框內容

// 模擬對方答案
const otherReplies = [
  "😍 好像不錯耶！",
  "❗❗❗ 真的假的？",
  "🙌 哈哈哈我也是這樣想",
  "😰 這個我無法接受啦 ",
  "😎 有道理耶！",
  "😆 哈哈哈你太誇張了",
];

const textReplay = ref([
  { emoji: '✋', text: ' 擊掌' },
  { emoji: '🙌', text: ' 我們簡直天生一對' },
  { emoji: '🤝', text: ' 很有默契喔' },
  { emoji: '😦', text: ' 蛤' },
  { emoji: '🗯️', text: ' 太離譜了吧' },
  { emoji: '🤢', text: ' 我要報警了' },
])

const emojis = ref(['🔥', '😍', '👀', '😂', '😢', '🥵'])
const visibleReplies = ref([]);

// 判斷選擇是那個對話 "self" 或 "other"
const lastSender = ref(""); 

// 隨機點判斷覆判斷
function pick(c) {
  selfMsg.value = c.emoji + c.text; // 帶進右邊框框
  lastSender.value = "self"; // 預設自己對話
  console.log('pick:', c)
  simulateOtherReply();
}

// 輸入文字後點選送出
function sendMsg() {
  if (inputText.value.trim()) {
    selfMsg.value = inputText.value.trim();
    inputText.value = "";
    lastSender.value = "self";
    setTimeout(() => {
      simulateOtherReply();
    }, 3000);
  }
}
// 模擬對方延遲回覆
function simulateOtherReply() {
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * otherReplies.length);
    otherMsg.value = otherReplies[randomIndex];
    lastSender.value = "other"; 
  }, 1500);
}
// 點選 emoji
function onEmoji(e) {
  console.log('emoji:', e)
}
// 隨機挑五個
function shuffle() {
  const shuffled = [...textReplay.value].sort(() => Math.random() - 0.5)
  visibleReplies.value = shuffled.slice(0, 5)
}

// 初始載入五個
shuffle();
</script>

<style scoped>
  /* 對話 */
.conversation {
  margin-bottom: 18px;
}
.conversation-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.conversation-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}
.circle-other {
  background: #FCF6C5;
  position: absolute;
  top: -7%;
  left: 15%;
}
.circle-self {
  background: #EFF3D4;
  position: absolute;
  top: -4%;
  right: 18%;
}
.conversation-Input {
  height: 81px;
}
.otherInput-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #FCF6C5;
  position: absolute;
  bottom: -15%;
  left: 15%;
}
.myselfInput-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #EFF3D4;
  position: absolute;
  bottom: -15%;
  right: 15%;
}

/* 隨機五個對話 */
.btn-reply-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}
.btn-reply-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.btn-reply-item {
  appearance: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 1000px;
  background: #EFEFEF;
  white-space: nowrap;
}
.text-emj-item {
  width: 14px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  margin-right: 4px;
}
.text-reply-color {
  color: #3D3D3D;
  line-height: 20px;
}
.reload-quickReply {
  flex: none;
  appearance: none;
  border: none;
  background: transparent;
  padding: 4px;
  border-radius: 4px;
}
.emo-group-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7.8px;
}
.emo-group-item {
  appearance: none;
  border: none;
  background: #EFEFEF;
  border-radius: 1000px;
  padding: 8px 10px;
}
.emo-group-emoji {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>