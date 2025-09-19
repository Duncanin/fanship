<script setup>
import Header from './HeaderView.vue'
import { ref, computed } from 'vue'

const cuisineOptions = [
  '日式料理',
  '韓式料理',
  '義式料理',
  '中式料理',
  '美式料理',
  '港式點心',
  '泰式料理',
  '印度香料料理',
  '健康蔬食',
  '甜點魂',
  '咖啡因中毒',
  '街頭小吃',
  '全素食者',
  '蛋奶素',
  '無麩質',
  '調酒',
  '餐酒館',
  '家常料理',
  '熱炒',
  '亞洲胃',
]
const personalFeature = [
  '喜歡分享料理過程',
  '手機先吃',
  '重視擺盤美感',
  '每次都點一樣的',
  '喜歡跟人一起煮',
  '煮飯像冥想',
  '愛挑戰新菜色',
  '一週做一次菜',
  '每天都要下廚',
  '討厭香菜！',
  '討厭葡萄乾！',
]
const skills = [
  '家常便當大人',
  '炸物愛好者',
  '煲湯高手',
  '義大利麵控',
  '生酮 / 健身飲食料理',
  '甜點烘焙',
  '氣炸鍋研究員',
  '微波懶人廚神',
  '麵包超人',
  '中式年菜高手',
  '露營煮飯職人',
  '加油寶寶副食品',
  '正在學習中',
  '下次別再炸廚房',
  '外送族不煮飯',
]

const selectedCuisines = ref([])
const selectedFeatures = ref([])
const selectedSkills = ref([])

const MAX = 5

const limitCuisine = computed(() => selectedCuisines.value.length >= MAX)
const limitFeature = computed(() => selectedFeatures.value.length >= MAX)
const limitSkill = computed(() => selectedSkills.value.length >= MAX)

function toggleFrom(list, value, limiter) {
  const idx = list.value.indexOf(value)
  if (idx > -1) list.value.splice(idx, 1)
  else if (!limiter.value) list.value.push(value)
}

function toggleCuisine(value) {
  toggleFrom(selectedCuisines, value, limitCuisine)
}
function toggleFeature(value) {
  toggleFrom(selectedFeatures, value, limitFeature)
}
function toggleSkill(value) {
  toggleFrom(selectedSkills, value, limitSkill)
}

const isFormValid = computed(
  () =>
    selectedCuisines.value.length + selectedFeatures.value.length + selectedSkills.value.length > 0,
)

import { useRouter } from 'vue-router'
const router = useRouter()
function onNext() {
  if (!isFormValid.value) return
  router.push('/createProfile-3').then(() => {
    window.scrollTo(0, 0)
  })
}
function onSkip() {
  router.push('/createProfile-3').then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<template>
  <Header class="sticky-top" :back-path="'/createProfile'"/>

  <div class="container">
    <div class="py-spac-l d-flex flex-column gap-spac-m profile2">
      <!-- 進度條 -->
      <div class="progress bg-primary-100 shadow-none" style="height: 12px">
        <div
          class="progress-bar bg-primary-300 w-50"
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <h2
        class="fs-5 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10 m-0"
      >
        選擇你的美食標籤
      </h2>

      <div class="d-flex py-spac-s px-spac-m bg-primary-100 rounded-m">
        <div class="rounded-pill mili-img shadow-light overflow-hidden">
          <img src="/src/assets/images/login/milli.png" alt="image" class="object-fit-cover" />
        </div>
        <p class="text-secondary-500 fs-text-md m-0">
          挑選你美食標籤，讓飯友更快了解到你是怎樣的美食夥伴！
        </p>
      </div>

      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          你的料理偏好
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>

        <div class="d-flex flex-wrap gap-3 mt-3">
          <template v-for="opt in cuisineOptions" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`cuisine-${opt}`"
              :value="opt"
              :checked="selectedCuisines.includes(opt)"
              :disabled="limitCuisine && !selectedCuisines.includes(opt)"
              @change="toggleCuisine(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedCuisines.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`cuisine-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          你的飲食人格
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>

        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in personalFeature" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`feature-${opt}`"
              :value="opt"
              :checked="selectedFeatures.includes(opt)"
              :disabled="limitFeature && !selectedFeatures.includes(opt)"
              @change="toggleFeature(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedFeatures.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`feature-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          你的烹飪技能
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>

        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in skills" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`skill-${opt}`"
              :value="opt"
              :checked="selectedSkills.includes(opt)"
              :disabled="limitSkill && !selectedSkills.includes(opt)"
              @change="toggleSkill(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedSkills.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`skill-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>
    </div>
  </div>
  <div class="sticky-bottom pt-spac-l pb-spac-3xl border-top bg-white">
    <div class="container">
      <div class="d-flex flex-column gap-spac-s">
        <button
          type="button"
          class="btn btn-primary text-white w-100 rounded-pill py-3"
          :disabled="!isFormValid"
          @click="onNext"
        >
          下一步
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
