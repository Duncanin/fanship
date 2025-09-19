<script setup>
import { useRouter } from 'vue-router'
import { toRefs } from 'vue'
const props = defineProps({
  backPath: { type: String, default: '' },
})
const { backPath } = toRefs(props)
const router = useRouter()
const goBack = () => {
  if (backPath.value) {
    router.push(backPath.value)
    setTimeout(() => window.scrollTo(0, 0), 30)
  } else if (window.history.length > 1) {
    router.back()
    setTimeout(() => window.scrollTo(0, 0), 30)
  } else {
    router.push('/') // fallback，首頁或預設
    setTimeout(() => window.scrollTo(0, 0), 30)
  }
}
</script>

<template>
  <div class="bg-primary-100 profileHeader">
    <div class="container">
      <h1 class="fs-6 text-center text-primary position-relative pt-spac-s pb-3">
        <button
          type="button"
          class="border-0 bg-primary-100 p-0 position-absolute top-50 start-0 translate-middle-y text-secondary-700"
          @click="goBack"
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
        </button>
        建立個人小卡
      </h1>
    </div>
  </div>
</template>
