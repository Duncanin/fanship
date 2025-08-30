<script setup>
import { useRouter } from 'vue-router'

import milliImg from '@/assets/images/login/milli.png'

const defaultAvatar = milliImg
const router = useRouter()
function onParing() {
  router.push('/pairing-index')
}
function toProfile() {
  router.push('/myProfile')
}
</script>

<template>
  <div class="bg-primary-100 profileHeader sticky-top">
    <div class="container">
      <h1 class="fs-6 text-center text-primary position-relative pt-1 pb-3">
        <!-- <button
          type="button"
          class="border-0 bg-primary-100 p-0 position-absolute top-0 start-0 text-secondary-700"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5996 12H4.59961M4.59961 12L10.5996 18M4.59961 12L10.5996 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> -->
        建立個人小卡
      </h1>
    </div>
  </div>

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

      <div class="mx-auto py-spac-5xl mb-spac-5xl">
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
          <h3 class="fs-4 text-center lh-sm mt-spac-s">喔嚕嚕</h3>
        </div>
      </div>

      <div
        class="mt-auto d-flex flex-column gap-spac-s sticky-bottom pt-spac-l pb-spac-3xl border-top bg-white"
      >
        <button
          type="button"
          class="btn btn-primary text-white w-100 rounded-pill py-3"
          @click="onParing"
        >
          開始尋找飯友
        </button>
        <button
          type="button"
          class="btn btn-secondary shadow-light w-100 rounded-pill py-3"
          @click="toProfile"
        >
          查看我的小卡
        </button>
      </div>
    </div>
  </div>
</template>
