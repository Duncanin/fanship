<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BgHeader from '../components/bg-header.vue'

const router = useRouter()

// 頭像數據
const avatars = [
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self01.png", alt: "self01" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self02.png", alt: "self02" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self03.png", alt: "self03" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self04.png", alt: "self04" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self05.png", alt: "self05" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self06.png", alt: "self06" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self07.png", alt: "self07" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self08.png", alt: "self08" },
  { src: import.meta.env.BASE_URL + "images/pairing_img/anons/self09.png", alt: "self09" }
]

// 當前選中的頭像
const selectedAvatar = ref(null)

// 選擇頭像
function selectAvatar(index) {
  // 如果點擊的是已選中的頭像，則取消選擇
  if (selectedAvatar.value === index) {
    selectedAvatar.value = null
  } else {
    // 否則選擇新的頭像
    selectedAvatar.value = index
  }
}

// 確認選擇
function confirmSelection() {
  if (selectedAvatar.value !== null) {
    // 這裡可以儲存選擇的頭像到 store 或 localStorage
    // console.log('選擇的頭像:', avatars[selectedAvatar.value])
    router.push('/pairing-find')
  }
}
</script>

<template>
  <main class="container bg-gradient-home min-vh-100">
    <BgHeader />
    <div class="row">
      <div class="my-spac-5xl col-12">
        <h3 class="mb-spac-xs text-primary-400 fs-3 fw-bold text-center">選擇你的匿名頭像</h3>
        <p class="text-secondary-900 lh-h6 text-center mb-spac-2xl">
          彼此都會以匿名頭像進行遊戲，<br>放輕鬆、自在做自己！
        </p>
        <div class="row gx-3 gy-3 avatars-spacer">
          <div class="col-4" 
          v-for="(avatar, index) in avatars" :key="index">
          
            <div
                class="avatar-container"
                :class="{ 'selected': selectedAvatar === index }"
                @click="selectAvatar(index)"
            >
              <img 
                class="self-img-size" 
                :src="avatar.src" 
                :alt="avatar.alt"
              >
              <div class="overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="white" class="check-icon" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-secondary-400 mb-spac-s py-spac-m px-spac-2xl text-secondary-0 fw-bold fs-5 lh-h5 rounded-full w-100"
        :class="{
            'btn-secondary-400 text-secondary-0': selectedAvatar === null,
            'btn-selected': selectedAvatar !== null
        }"
        :disabled="selectedAvatar === null"
          @click="confirmSelection"
        > 
        確認並開始
        </button>
      </div>
      <div class="col-12">
        <button type="button" class="btn btn-secondary-0 mb-spac-s py-spac-m px-spac-2xl text-secondary-700 fw-bold fs-5 lh-h5 rounded-full w-100 shadow-light"
        @click="$router.push('/pairing-index')"> 
        返回首頁
        </button>
      </div>
    </div>

  </main>
</template>

<style scoped>
.self-img-size {
  width: 80px;
  height: 80px;
}
.avatars-spacer {
  padding: 0px 23.5px;
}
/* 遮罩效果 */
.avatar-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.2s ease;
}
.avatar-container:hover {
  transform: scale(1.05);
}
.avatar-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(27, 27, 27, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.avatar-container.selected .overlay {
  opacity: 1;
}
 /* icon 大小 */
.check-icon {
  width: 40.1px;
  height: 30.11px;
  transform: scale(0.8);          /* 初始狀態縮小 */
  transition: transform 0.3s ease; /* 平滑動畫 */
}
.avatar-container.selected .check-icon {
  transform: scale(1.6);          /* 選中時放大 */
}
/* 按鈕效果 */
/* 按鈕禁用狀態 */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
/* 選中狀態的按鈕樣式 */
.btn-selected {
  background: #3D3D3D;
  color: #FFFFFF;
  border-color: transparent;
}
.btn-selected:hover {
  background: rgba(27, 27, 27, 0.35);
  color: #3D3D3D;
}
</style>
