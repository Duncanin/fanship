<script setup>
import Header from './HeaderView.vue'

const defaultAvatar = './src/assets/images/login/milli.png'
</script>

<template>
  <Header class="sticky-top" />

  <div class="container">
    <div class="py-spac-l d-flex flex-column gap-spac-m profile2">
      <h2
        class="fs-5 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10 m-0"
      >
        你的小卡已經準備好啦！
      </h2>

      <div class="d-flex py-spac-s px-spac-m bg-primary-100 rounded-m">
        <div class="rounded-pill mili-img shadow-light overflow-hidden">
          <img :src="defaultAvatar" alt="image" class="object-fit-cover" />
        </div>
        <p class="text-secondary-500 fs-text-md m-0">
          你的專屬小卡已經建立完成，快去看看有哪些飯友在等你吧！
        </p>
      </div>

      <div class="mx-auto my-spac-5xl">
        <div class="m-0 position-relative" style="width: 196px; height: 196px">
          <div
            class="rounded-pill mili-img shadow-light overflow-hidden w-100 h-100 m-0 position-relative"
          >
            <img
              src="/src/assets/images/喔嚕嚕.png"
              alt="image"
              class="object-fit-cover w-100 h-100"
            />
          </div>
        </div>
      </div>

      <div
        class="mt-auto d-flex flex-column gap-spac-s sticky-bottom pt-spac-l pb-spac-3xl border-top bg-white"
      >
        <button
          type="button"
          class="btn btn-primary text-white w-100 rounded-pill py-3"
          :disabled="!isFormValid"
          @click="onNext"
        >
          開始尋找飯友
        </button>
        <button
          type="button"
          class="btn btn-secondary shadow-light w-100 rounded-pill py-3"
          @click="onSkip"
        >
          查看我的小卡
        </button>
      </div>
    </div>
  </div>
</template>
