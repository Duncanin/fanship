<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from './HeaderView.vue'

// form state
const nickname = ref('')
const gender = ref('')
const birthday = ref('')
const region = ref('')

// constraints
const NICK_MAX = 15
const router = useRouter()

// simple validity
const isNicknameValid = computed(
  () => nickname.value.trim().length > 0 && nickname.value.trim().length <= NICK_MAX,
)
const isGenderValid = computed(() => !!gender.value)
const isBirthdayValid = computed(() => !!birthday.value)
const isRegionValid = computed(() => !!region.value)

const isFormValid = computed(
  () =>
    isNicknameValid.value && isGenderValid.value && isBirthdayValid.value && isRegionValid.value,
)

function onSubmit() {
  if (!isFormValid.value) return
  console.log({
    nickname: nickname.value,
    gender: gender.value,
    birthday: birthday.value,
    region: region.value,
  })
  router.push('/createProfile-2').then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<template>
  <Header class="" />
  <div class="container">
    <div class="py-spac-l d-flex flex-column gap-spac-m">
      <!-- 進度條 -->
      <div class="progress bg-primary-100 shadow-none" style="height: 12px">
        <div
          class="progress-bar bg-primary-300 w-25"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <h2
        class="fs-5 d-flex justify-content-between align-items-center py-spac-s border-bottom border-secondary-950 border-opacity-10 m-0"
      >
        個人基本資料
        <span
          class="py-1 px-2 fw-medium fs-text-md rounded-3 border border-secondary-950 border-opacity-10 bg-white text-secondary-700 ms-auto lh-base"
          >必填</span
        >
      </h2>

      <form novalidate @submit.prevent="onSubmit">
        <!-- 暱稱 -->
        <div class="">
          <label class="form-label ms-2">暱稱</label>
          <input
            type="text"
            class="form-control rounded-pill py-2"
            :class="{ 'is-invalid': nickname && !isNicknameValid }"
            :maxlength="NICK_MAX"
            placeholder="輸入項目"
            v-model.trim="nickname"
          />
          <div class="fs-text-sm text-end pt-spac-tiny text-secondary-500">
            {{ nickname.length }}/{{ NICK_MAX }}
          </div>
          <div class="invalid-feedback">請輸入 1–{{ NICK_MAX }} 個字元的暱稱</div>
        </div>

        <!-- 性別 -->
        <div class="mb-3">
          <label class="form-label ms-2">性別</label>
          <select
            class="form-select rounded-pill py-2 shadow-none"
            v-model="gender"
            :class="gender ? 'text-primary' : 'text-secondary-400'"
          >
            <option value="" class="d-none" disabled>請選擇性別</option>
            <option value="female">女</option>
            <option value="male">男</option>
            <option value="other">非二元性別</option>
          </select>
        </div>

        <!-- 生日 -->
        <div class="mb-3">
          <label class="form-label ms-2">生日</label>
          <input
            type="date"
            class="form-control rounded-pill pe-spac-m py-2"
            v-model="birthday"
            :class="birthday ? 'text-primary' : 'text-secondary-400'"
            placeholder="請選擇生日"
          />
        </div>

        <!-- 地區 -->
        <div class="mb-4">
          <label class="form-label ms-2">地區</label>
          <select
            class="form-select rounded-pill py-2 shadow-none"
            v-model="region"
            :class="region ? 'text-primary' : 'text-secondary-400'"
          >
            <option value="" disabled>請選擇地區</option>
            <option value="TaipeiCounty">台北市</option>
            <option value="NewTaipei">新北市</option>
            <option value="Keelong">基隆市</option>
            <option value="Taoyuan">桃園</option>
            <option value="Hsinchu">新竹</option>
            <option value="Miaoli">苗栗</option>
            <option value="Taichung">台中市</option>
            <option value="Changhua">彰化</option>
            <option value="Nantou">南投</option>
            <option value="Yunlin">雲林</option>
            <option value="Chiayi">嘉義</option>
            <option value="Tainan">台南</option>
            <option value="Kaohsiung">高雄</option>
            <option value="Pingtung">屏東</option>
            <option value="Taitung">台東</option>
            <option value="Hualien">花蓮</option>
            <option value="Yilan">宜蘭</option>
            <option value="Penghu">澎湖</option>
            <option value="Kinmen">金門</option>
            <option value="Lienchiang">連江</option>
          </select>
        </div>
      </form>
    </div>
  </div>
  <div class="border-top border-primary border-opacity-10 pt-spac-l bg-white sticky-bottom">
    <div class="container">
      <button
        type="submit"
        class="btn btn-primary text-white w-100 rounded-pill py-3"
        :disabled="!isFormValid"
        @click="onSubmit"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<style>
/* input[type='date'] {
  appearance: none !important;
  -webkit-appearance: none !important;
  text-align: left !important;
  -webkit-text-align: left !important;
} */
</style>
