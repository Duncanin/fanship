<template>
  <div class="bg-gradient-home">
    <div :class="{ 'header-fade-up': headerFadeOut }">
      <BgHeader />
    </div>
    <main class="container">
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
            :src="other01Img"
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BgHeader from '../components/bg-header.vue';
import other01Img from '@/assets/images/pairing_img/anons/other01.png';

const router = useRouter();
const titleFaded = ref(false);
const avatarVisible = ref(false);
const infoVisible = ref(false);
const headerFadeOut = ref(false);
const contentFadeOut = ref(false);

onMounted(() => {

  setTimeout(() => {
    titleFaded.value = true;
  }, 1000);
  
  setTimeout(() => {
    avatarVisible.value = true;
  }, 1500);
  
  setTimeout(() => {
    infoVisible.value = true;
  }, 1500);
  
  setTimeout(() => {
    headerFadeOut.value = true;
    contentFadeOut.value = true;
  }, 4000);
  
  setTimeout(() => {
    router.push('/pairing-game')
  }, 5000);
});
</script>

<style scoped>
.other01-img {
  width: 196px;
  height: 196px;
  border-radius: 50%;
}
.title {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.title.fade-in {
  opacity: 1;
}
.avatar {
  opacity: 0;
  transform: rotateY(-90deg);
  transition: all 0.6s ease-out;
}
.avatar.flip-in {
  opacity: 1;
  transform: rotateY(0deg);
}
.info-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.3s ease-in;
}
.info-section.slide-up {
  opacity: 1;
  transform: translateY(0);
}
.header-fade-up {
  opacity: 0;
  transform: translateY(-100vh);
  transition: all 1s ease-out;
}
.content-fade-down {
  opacity: 0;
  transform: translateY(100vh);
  transition: all 1s ease-out;
}
</style>
