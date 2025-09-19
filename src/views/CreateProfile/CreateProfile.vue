<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from './HeaderView.vue'

import { ElDatePicker, ElSelect, ElOption, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

import CalendarIcon from '@/components/icons/CalendarIcon.vue'

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

const genderOptions = [
  { value: '', label: '請選擇性別', disabled: true },
  { value: 'female', label: '女' },
  { value: 'male', label: '男' },
  { value: 'other', label: '非二元性別' },
]
const regions = [
  { value: '', label: '請選擇地區', disabled: true },
  { value: 'TaipeiCounty', label: '台北市' },
  { value: 'NewTaipei', label: '新北市' },
  { value: 'Keelong', label: '基隆縣' },
  { value: 'Taoyuan', label: '桃園市' },
  { value: 'Hsinchu', label: '新竹縣' },
  { value: 'Miaoli', label: '苗栗縣' },
  { value: 'Taichung', label: '台中市' },
  { value: 'Changhua', label: '彰化縣' },
  { value: 'Nantou', label: '南投縣' },
  { value: 'Yunlin', label: '雲林縣' },
  { value: 'Chiayi', label: '嘉義縣' },
  { value: 'Tainan', label: '台南縣' },
  { value: 'Kaohsiung', label: '高雄市' },
  { value: 'Pingtung', label: '屏東縣' },
  { value: 'Taitung', label: '台東縣' },
  { value: 'Hualien', label: '花蓮縣' },
  { value: 'Yilan', label: '宜蘭縣' },
  { value: 'Penghu', label: '澎湖縣' },
  { value: 'Kinmen', label: '金門縣' },
  { value: 'Lienchiang', label: '連江縣' },
]
</script>

<template>
  <Header class="sticky-top" :back-path="'/login'" />
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
        <div>
          <label class="form-label ms-2 fw-bold">暱稱</label>
          <el-input
            v-model="nickname"
            maxlength="15"
            show-word-limit
            placeholder="輸入項目"
            class="rounded-pill"
            :class="{ 'is-invalid': nickname && !isNicknameValid, 'has-value': userInput }"
          />
          <div class="fs-text-sm text-end pt-spac-tiny text-secondary-500">
            {{ nickname.length }}/{{ NICK_MAX }}
          </div>
          <div v-if="nickname && !isNicknameValid" class="invalid-feedback">
            請輸入 1–{{ NICK_MAX }} 個字元的暱稱
          </div>
        </div>

        <!-- 性別 -->
        <div class="mb-3">
          <label class="form-label ms-2 fw-bold">性別</label>
          <el-select v-model="gender" class="rounded-pill" placeholder="請選擇性別">
            <el-option
              v-for="item in genderOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled || false"
            />
          </el-select>
        </div>

        <!-- 生日 -->
        <div class="mb-4">
          <label class="form-label ms-2 fw-bold">生日</label>
          <el-date-picker
            v-model="birthday"
            type="date"
            placeholder="請選擇生日"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="d-block birthday-cus"
            :prefix-icon="CalendarIcon"
          />
        </div>

        <!-- 地區 -->
        <div class="mb-spac-3xl">
          <label class="form-label ms-2 fw-bold">地區</label>
          <el-select v-model="region" placeholder="請選擇地區" filterable>
            <el-option
              v-for="option in regions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
              :disabled="option.disabled || false"
            />
          </el-select>
        </div>
      </form>
    </div>
  </div>
  <div class="border-top border-primary border-opacity-10 py-spac-l bg-white sticky-bottom">
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

<style scoped>
::v-deep(span) {
  color: var(--bs-primary);
}
::v-deep(.el-select__selected-item span) {
  margin: 0;
}

::v-deep(.el-input__suffix) {
  display: none;
}

::v-deep(.el-input__wrapper) {
  flex-direction: row-reverse;
}
::v-deep(.el-input),
::v-deep(.el-input__wrapper) {
  width: 100%;
}

::v-deep(.el-input__wrapper),
::v-deep(.is-hovering) {
  box-shadow: unset;
  border: none;
  background-color: var(--bs-secondary-50);
  border-radius: 24px;
  height: 40px;
  font-size: 16px;
}

::v-deep(.el-select__input) {
  box-shadow: unset;
  border-radius: 24px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
}

::v-deep(.el-input__inner::placeholder) {
  color: var(--bs-secondary-400);
  font-weight: 500;
  font-size: 16px;
}

::v-deep(.el-input__inner) {
  color: var(--bs-primary);
  font-weight: 500;
  font-size: 16px;
}

::v-deep(.el-select__wrapper) {
  box-shadow: unset;
  background: var(--bs-secondary-50);
  border-radius: 24px;
  height: 40px;
  font-size: 16px;
}
/* 1. 沒選值時（placeholder） */
::v-deep(.is-transparent span) {
  color: var(--bs-secondary-400);
  font-size: 16px;
  font-weight: 500;
}

::v-deep(.el-select__suffix .el-icon) {
  font-size: 24px;
  width: 16px;
  height: 10px;
  color: var(--bs-secondary-500);
}
</style>
<style>
.el-icon {
  margin-right: 9px;
  width: 24px;
  height: 24px;
}
.el-input__icon {
  svg {
    width: 18px;
    height: 20px;
  }
  margin-right: 0px;
}
.el-popper {
  border-radius: 16px;
  overflow: hidden;
  .is-disabled {
    display: none;
  }
  .el-select-dropdown__list {
    padding: 0;
  }
}
.el-select-dropdown__item {
  height: 46px;
  padding: 0px 16px;
  font-size: 16px;
  box-sizing: content-box;
  display: flex;
  text-align: left;
  align-items: center;
  span {
    margin: 0;
  }
  &.active,
  &:active {
    background-color: #1b1b1b1a;
  }
}
.el-select-dropdown__item.is-hovering,
.is-hovering,
.el-select-dropdown__item.is-selected,
.is-selected {
  background-color: #1b1b1b1a;
}
</style>
