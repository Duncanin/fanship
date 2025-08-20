<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import BgHeader from '../components/bg-header.vue'

const router = useRouter()
let timer = null
const isFadingOut = ref(false)

// 執行淡出並跳轉
function fadeOutAndNavigate(targetRoute) {
  // 開始淡出效果
  isFadingOut.value = true
  
  // 等待淡出動畫完成後再跳轉
  setTimeout(() => {
    router.push(targetRoute)
  }, 500) // 500ms 配合 CSS 動畫時間
}

// 取消搜尋
function cancelSearch() {
  // 清除計時器
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  // 淡出後返回首頁
  fadeOutAndNavigate('/pairing-index')
}

// 組件掛載時啟動倒數計時
onMounted(() => {
  timer = setTimeout(() => {
    // 5秒後淡出並跳轉到配對建議頁面
    fadeOutAndNavigate('/pairing-suggestion')
  }, 5000) // 5000毫秒 = 5秒
})

// 組件卸載時清除計時器
onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
})


</script>

<template>
  <main class="container bg-gradient-home min-vh-100"
  :class="{ 'fade-out': isFadingOut }"
  >
    <BgHeader />
    <div class="row">
      <div class="my-spac-5xl col-12 d-flex flex-column justify-content-center align-items-center">
        <h3 class="mb-spac-xs text-primary-400 fs-3 fw-bold text-center">正在尋找潛在飯友...</h3>
        <p class="text-secondary-900 lh-h6 text-center mb-spac-5xl">
          我們正在安排一場美味的邂逅，<br>緣分悄悄加熱中 👀
        </p>
        <img class="mb-spac-5xl" src="/images/animationGif/matching-loading.gif" alt="matching-loading">
        <button type="button" class="btn btn-secondary-0 py-spac-m px-spac-xl text-secondary-700 fw-bold fs-5 lh-h5 rounded-full shadow-light btn-search"
        @click="cancelSearch"> 
          取消尋找
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.btn-search {
  width: 160px;
}
main {
  opacity: 1;
  transition: opacity 0.5s ease-out;  /* 平滑的淡出效果 */
}

main.fade-out {
  opacity: 0;                          /* 淡出到透明 */
}
</style>
