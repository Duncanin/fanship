<template>
  <div class="bg-gradient-home">
    <BgHeader />
    <main class="container"
    :class="{ 'fade-out': isFadingOut }"
    >
      <div class="row">
        <div class="my-spac-5xl col-12 d-flex flex-column justify-content-center align-items-center">
          <h3 class="mb-spac-xs text-primary-400 fs-3 fw-bold text-center">正在尋找潛在飯友...</h3>
          <p class="text-secondary-900 lh-h6 text-center mb-spac-5xl">
            我們正在安排一場美味的邂逅，<br>緣分悄悄加熱中 👀
          </p>
          <img :src="matchingLoadingGif" alt="matching-loading" class="mb-spac-5xl">
          <button type="button" class="btn btn-secondary-0 py-spac-m px-spac-xl text-secondary-700 fw-bold fs-5 lh-h5 rounded-full shadow-light btn-search"
          @click="cancelSearch"> 
            取消尋找
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import BgHeader from '../components/bg-header.vue';
import matchingLoadingGif from '@/assets/images/animationGif/matching-loading.gif';

const router = useRouter();
let timer = null;
const isFadingOut = ref(false);

function fadeOutAndNavigate(targetRoute) {

  isFadingOut.value = true;
  
  setTimeout(() => {
    router.push(targetRoute);
  }, 500);
};

function cancelSearch() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  fadeOutAndNavigate('/pairing-index');
};

onMounted(() => {
  timer = setTimeout(() => {
    fadeOutAndNavigate('/pairing-suggestion');
  }, 5000);
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  };
});
</script>

<style scoped>
.btn-search {
  width: 160px;
}
main {
  opacity: 1;
  transition: opacity 0.5s ease-out;
}
main.fade-out {
  opacity: 0;                         
}
</style>
