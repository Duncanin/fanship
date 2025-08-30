<script setup>
import { ref, computed } from 'vue'
import Header from './HeaderView.vue'
import { useRouter } from 'vue-router'

import milliImg from '@/assets/images/login/milli.png'

const defaultAvatar = milliImg
const selectedImage = ref(null)

const isFormValid = computed(() => !!selectedImage.value)
const router = useRouter()
function onNext() {
  if (!isFormValid.value) return
  router.push('/createProfile-5')
}
function onSkip() {
  router.push('/createProfile-5')
}

function onFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    selectedImage.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <Header class="sticky-top" />

  <div class="container">
    <div class="py-spac-l d-flex flex-column gap-spac-m profile2">
      <!-- 進度條 -->
      <div class="progress bg-primary-100" style="height: 12px">
        <div
          class="progress-bar bg-primary-300 w-100"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <h2
        class="fs-5 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10 m-0"
      >
        上傳個人照
      </h2>

      <div class="d-flex py-spac-s px-spac-m bg-primary-100 rounded-m">
        <div class="rounded-pill mili-img shadow-light overflow-hidden">
          <img :src="defaultAvatar" alt="image" class="object-fit-cover" />
        </div>
        <p class="text-secondary-500 fs-text-md m-0">
          上傳一張代表你的照片吧！真人、側臉、背影都 OK，有圖更容易讓人記住你喔～
        </p>
      </div>

      <div class="mx-auto my-spac-5xl">
        <div class="m-0 position-relative" style="width: 196px; height: 196px">
          <div
            class="rounded-pill mili-img shadow-light overflow-hidden w-100 h-100 m-0 position-relative"
          >
            <img
              :src="selectedImage || defaultAvatar"
              alt="image"
              class="object-fit-cover w-100 h-100"
              :style="!selectedImage ? 'filter: grayscale(100%) brightness(1)' : ''"
            />
          </div>

          <label
            for="uploadAvatar"
            class="btn btn-secondary-900 rounded-circle d-flex justify-content-center align-items-center position-absolute end-0 bottom-0 p-2 shadow-light z-2"
            aria-label="上傳大頭貼"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_468_1638)">
                <path
                  d="M20.2001 7.3401L17.4601 4.6001C17.1025 4.2642 16.6339 4.07146 16.1434 4.05855C15.653 4.04565 15.1749 4.21347 14.8001 4.5301L5.8001 13.5301C5.47687 13.8561 5.27561 14.2833 5.2301 14.7401L4.8001 18.9101C4.78663 19.0566 4.80564 19.2042 4.85576 19.3425C4.90589 19.4808 4.9859 19.6063 5.0901 19.7101C5.18354 19.8028 5.29436 19.8761 5.4162 19.9259C5.53803 19.9756 5.66849 20.0009 5.8001 20.0001H5.8901L10.0601 19.6201C10.5169 19.5746 10.9441 19.3733 11.2701 19.0501L20.2701 10.0501C20.6194 9.68107 20.8082 9.18861 20.7951 8.68064C20.782 8.17266 20.568 7.69061 20.2001 7.3401ZM16.8001 10.6801L14.1201 8.0001L16.0701 6.0001L18.8001 8.7301L16.8001 10.6801Z"
                  fill="#FFFFFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_468_1638">
                  <rect width="24" height="24" fill="white" transform="translate(0.799805)" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <input
            type="file"
            id="uploadAvatar"
            class="d-none"
            accept="image/*"
            @change="onFileChange"
          />
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
          完成
        </button>
        <button
          type="button"
          class="btn btn-secondary shadow-light w-100 rounded-pill py-3"
          @click="onSkip"
        >
          略過
        </button>
      </div>
    </div>
  </div>
</template>
