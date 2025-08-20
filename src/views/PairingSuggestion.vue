<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BgHeader from '../components/bg-header.vue'

const router = useRouter()

const titleFaded = ref(false)
const avatarVisible = ref(false)
const infoVisible = ref(false)
const headerFadeOut = ref(false)
const contentFadeOut = ref(false)

onMounted(() => {
  // 階段1：1秒後標題開始淡入
  setTimeout(() => {
    titleFaded.value = true
  }, 1000)
  
  // 階段2：1.5秒後頭像開始翻轉進入
  setTimeout(() => {
    avatarVisible.value = true
  }, 1500)
  
  // 階段3：1.5秒後名稱和描述同時向上淡入
  setTimeout(() => {
    infoVisible.value = true
  }, 1500)
  
  // 階段4：5秒後開始淡出效果
  setTimeout(() => {
    headerFadeOut.value = true
    contentFadeOut.value = true
  }, 4000)
  
  // 階段5：6秒後(淡出完成)跳轉頁面
  setTimeout(() => {
    router.push('/pairing-game')
  }, 5000)
})
</script>

<template>
  <main class="container bg-gradient-home min-vh-100">
    <div :class="{ 'header-fade-up': headerFadeOut }">
      <BgHeader />
    </div>
    <div class="row" 
        :class="{ 'content-fade-down': contentFadeOut }">
      <div class="my-spac-5xl col-12 d-flex flex-column justify-content-center align-items-center">
        <h4 
          class="mb-spac-5xl text-secondary-900 fs-4 lh-h4 fw-bold text-center title"
          :class="{ 'fade-in': titleFaded }"
        >
          你的潛在飯友是...
        </h4>
        <img 
          class="mb-spac-xl other01-img shadow-glow avatar" 
          :class="{ 'flip-in': avatarVisible }"
          src="/images/pairing_img/anons/other01.png" 
          alt="other01"
        >
        <div class="info-section" :class="{ 'slide-up': infoVisible }">
          <h2 class="text-primary-400 fs-2 lh-h2 text-center mb-spac-m">
            陽光宅男
          </h2>
          <p class="text-secondary-500 text-lg lh-h6 text-center">
            快問快答即將開始囉！
          </p>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
.other01-img {
  width: 196px;
  height: 196px;
  border-radius: 50%;
}
/* 標題淡出動畫 */
.title {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.title.fade-in {
  opacity: 1;
}
/* 頭像水平翻轉動畫 */
.avatar {
  opacity: 0;
  transform: rotateY(-90deg);
  transition: all 0.6s ease-out;
}
.avatar.flip-in {
  opacity: 1;
  transform: rotateY(0deg);
}
/* 資訊區塊向上滑入動畫 */
.info-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease-in;
}
.info-section.slide-up {
  opacity: 1;
  transform: translateY(0);
}
/* Header 往上淡出動畫 */
.header-fade-up {
  opacity: 0;
  transform: translateY(-100vh);
  transition: all 1s ease-out;
}
/* 內容區塊往下淡出動畫 */
.content-fade-down {
  opacity: 0;
  transform: translateY(100vh);
  transition: all 1s ease-out;
}
</style>
