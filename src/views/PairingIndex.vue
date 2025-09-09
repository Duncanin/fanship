<template>
  <div class="bg-gradient-home">
    <BgHeader />
    <main class="container">
      <div class="row mt-spac-2xl">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h2 class="text-primary-400 fs-2 fw-bold">快來尋找</h2>
          <h2 class="text-primary-400 fw-bold mb-spac-xs">你的靈魂飯友吧！</h2>
          <p class="text-secondary-900 lh-h6 text-center mb-spac-3xl">
            嘴不合也能擦出火花，誰說對味才是默契？<br>一起回答問題、即時互動聊出默契！
          </p>

          <button type="button" class="btn btn-primary-400 mb-spac-3xl py-spac-m px-spac-2xl text-secondary-0 fw-bold fs-5 lh-h5 rounded-full shadow-light btn-search-width"
          @click="$router.push('/pairing-icon')"> 
          尋找飯友
          </button>

          <img :src="homepageImg" alt="homepage" class="img-homepage mb-spac-m">

          <!-- <MainNavBar /> -->
          <MainNavBarOther />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import BgHeader from '../components/bg-header.vue';
// import MainNavBar from '../components/main-nav-bar.vue';
import homepageImg from '@/assets/images/pairing_img/homepage.png';
import MainNavBarOther from '@/components/MainNavBarOther.vue';
</script>

<style scoped>
.img-homepage {
  max-height: 264px;
  max-width: 264px;
}
.btn-search-width {
  min-width: 160px;
}
</style>
