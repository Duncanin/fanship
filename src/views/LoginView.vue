<template>
  <div class="loginBG">
    <Header />
    <div class="container">
      <div class="">
        <div class="w-50 mx-auto">
          <div class="rounded-pill mili-img shadow-light mt-spac-5xl overflow-hidden">
            <img src="../assets/images/login/milli.png" alt="image" class="object-fit-cover" />
          </div>

          <div class="mt-spac-m">
            <img src="../assets/images/login/logo.svg" alt="logo" class="d-block w-100 h-auto" />
          </div>
          <h3 class="fs-5 text-center text-secondary-500 mb-0 mt-spac-m text-nowrap">
            聊出你的食物默契 ✨
          </h3>
        </div>

        <div class="login">
          <router-link to="/CreateProfile" class="btn btn-primary w-100">登入</router-link>
          <router-link to="/register" class="btn btn-secondary w-100">註冊</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from '../components/bg-header.vue'
</script>
