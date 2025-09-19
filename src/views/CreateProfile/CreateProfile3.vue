<script setup>
import Header from './HeaderView.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const lifeStyles = [
  '收納控',
  '慢生活',
  '香氛愛好者',
  '極簡生活',
  '極繁主義',
  '儀式感滿分',
  '改造租屋中',
  '家居美學控',
  '鬧鐘設十個',
  'IG螞蟻限動',
  '固定健身',
  '下班只想躺',
  '打掃當療癒',
  '餐桌是工作桌',
]
const wearings = [
  '穿搭達人',
  'Uniqlo控',
  'Y2K',
  '襪子控',
  '太窮沒錢買衣服',
  '古著',
  '極簡',
  '機能風',
  '街頭風',
  '正式通勤',
  '運動休閒',
]
const trips = [
  '旅遊達人',
  '拍照比景點多',
  '景點一定要咖啡廳',
  '排行程強迫症',
  '說走就走咖',
  '小資自助派',
  '露營野餐',
  '輕旅行',
  '背包客',
]
const pets = [
  '貓奴',
  '狗派',
  '天天曬毛孩',
  '聽得懂喵語',
  '爬蟲類',
  '魚類',
  '小動物',
  '不養寵物',
  '鼠兔',
  '鳥類',
]
const movies = [
  '電影迷',
  '鹹爆米花',
  '甜爆米花',
  '爛片研究員',
  '恐怖片',
  '愛情片',
  '紀錄片',
  '動畫片',
  '文青片',
  '科幻片',
  '犯罪懸疑',
]
const exhibitions = [
  '看展打卡派',
  '只拍展不拍人',
  '藝術展',
  '插畫展',
  '設計展',
  '攝影展',
  '科普展',
  '歷史展',
  '地方展',
]
const anime = [
  '動漫迷',
  '二次元戀人',
  '配音樂迷',
  '輕小說',
  '熱血派',
  '療癒派',
  '機甲控',
  '日漫派',
  '美漫派',
]
const languages = [
  '看劇學語派',
  '每天都在背單字',
  '英語',
  '日語',
  '韓語',
  '法語',
  '德語',
  '西語',
  '台語',
  '客語',
  '廣東話',
]

const selectedLifeStyles = ref([])
const selectedWearings = ref([])
const selectedTrips = ref([])
const selectedPets = ref([])
const selectedMovies = ref([])
const selectedExhibitions = ref([])
const selectedAnime = ref([])
const selectedLanguages = ref([])

const MAX = 5

const limitLife = computed(() => selectedLifeStyles.value.length >= MAX)
const limitWear = computed(() => selectedWearings.value.length >= MAX)
const limitTrip = computed(() => selectedTrips.value.length >= MAX)
const limitPet = computed(() => selectedPets.value.length >= MAX)
const limitMovie = computed(() => selectedMovies.value.length >= MAX)
const limitExh = computed(() => selectedExhibitions.value.length >= MAX)
const limitAnime = computed(() => selectedAnime.value.length >= MAX)
const limitLang = computed(() => selectedLanguages.value.length >= MAX)

function toggleFrom(list, value, limiter) {
  const idx = list.value.indexOf(value)
  if (idx > -1) list.value.splice(idx, 1)
  else if (!limiter.value) list.value.push(value)
}

function toggleLife(v) {
  toggleFrom(selectedLifeStyles, v, limitLife)
}
function toggleWear(v) {
  toggleFrom(selectedWearings, v, limitWear)
}
function toggleTrip(v) {
  toggleFrom(selectedTrips, v, limitTrip)
}
function togglePet(v) {
  toggleFrom(selectedPets, v, limitPet)
}
function toggleMovie(v) {
  toggleFrom(selectedMovies, v, limitMovie)
}
function toggleExh(v) {
  toggleFrom(selectedExhibitions, v, limitExh)
}
function toggleAnime(v) {
  toggleFrom(selectedAnime, v, limitAnime)
}
function toggleLang(v) {
  toggleFrom(selectedLanguages, v, limitLang)
}

// 表單有效：任一組有選
const isFormValid = computed(
  () =>
    selectedLifeStyles.value.length +
      selectedWearings.value.length +
      selectedTrips.value.length +
      selectedPets.value.length +
      selectedMovies.value.length +
      selectedExhibitions.value.length +
      selectedAnime.value.length +
      selectedLanguages.value.length >
    0,
)

// 導頁
const router = useRouter()
function onNext() {
  if (!isFormValid.value) return
  router.push('/createProfile-4').then(() => {
    window.scrollTo(0, 0)
  })
}
function onSkip() {
  router.push('/createProfile-4').then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<template>
  <Header class="sticky-top" :back-path="'/createProfile-2'" />

  <div class="container">
    <div class="py-spac-l d-flex flex-column gap-spac-m profile2">
      <!-- 進度條 -->
      <div class="progress bg-primary-100 shadow-none" style="height: 12px">
        <div
          class="progress-bar bg-primary-300 w-75"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <h2
        class="fs-5 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10 m-0"
      >
        其他趣味標籤
      </h2>

      <div class="d-flex py-spac-s px-spac-m bg-primary-100 rounded-m">
        <div class="rounded-pill mili-img shadow-light overflow-hidden">
          <img src="/src/assets/images/login/milli.png" alt="image" class="object-fit-cover" />
        </div>
        <p class="text-secondary-500 fs-text-md m-0">
          分享你除了飲食之外的興趣，看看有沒有志同道合的飯友！
        </p>
      </div>

      <!-- 生活風格 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          生活風格
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in lifeStyles" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`life-${opt}`"
              :value="opt"
              :checked="selectedLifeStyles.includes(opt)"
              :disabled="limitLife && !selectedLifeStyles.includes(opt)"
              @change="toggleLife(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedLifeStyles.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`life-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 穿搭 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          穿搭
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in wearings" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`wear-${opt}`"
              :value="opt"
              :checked="selectedWearings.includes(opt)"
              :disabled="limitWear && !selectedWearings.includes(opt)"
              @change="toggleWear(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedWearings.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`wear-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 旅遊 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          旅遊
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in trips" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`trip-${opt}`"
              :value="opt"
              :checked="selectedTrips.includes(opt)"
              :disabled="limitTrip && !selectedTrips.includes(opt)"
              @change="toggleTrip(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedTrips.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`trip-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 寵物 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          寵物
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in pets" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`pet-${opt}`"
              :value="opt"
              :checked="selectedPets.includes(opt)"
              :disabled="limitPet && !selectedPets.includes(opt)"
              @change="togglePet(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedPets.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`pet-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 電影 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          電影
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in movies" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`movie-${opt}`"
              :value="opt"
              :checked="selectedMovies.includes(opt)"
              :disabled="limitMovie && !selectedMovies.includes(opt)"
              @change="toggleMovie(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedMovies.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`movie-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 展覽 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          展覽
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in exhibitions" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`exh-${opt}`"
              :value="opt"
              :checked="selectedExhibitions.includes(opt)"
              :disabled="limitExh && !selectedExhibitions.includes(opt)"
              @change="toggleExh(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedExhibitions.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`exh-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 動漫 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          動漫
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in anime" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`anime-${opt}`"
              :value="opt"
              :checked="selectedAnime.includes(opt)"
              :disabled="limitAnime && !selectedAnime.includes(opt)"
              @change="toggleAnime(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedAnime.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`anime-${opt}`"
              >{{ opt }}</label
            >
          </template>
        </div>
      </form>

      <!-- 語言 -->
      <form action="">
        <h3
          class="fs-6 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10"
        >
          語言
          <span
            class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto"
            >最多選擇 {{ MAX }} 項</span
          >
        </h3>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <template v-for="opt in languages" :key="opt">
            <input
              class="btn-check"
              type="checkbox"
              :id="`lang-${opt}`"
              :value="opt"
              :checked="selectedLanguages.includes(opt)"
              :disabled="limitLang && !selectedLanguages.includes(opt)"
              @change="toggleLang(opt)"
            />
            <label
              class="btn btn-tag rounded-pill border-secondary-950 border-1 fw-medium fs-text-md lh-base"
              :class="selectedLanguages.includes(opt) ? 'btn-secondary-800 text-white' : ''"
              :for="`lang-${opt}`"
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
