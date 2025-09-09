<template>
  <div class="main-nav_bar nav-bar-img">
    <ul class="d-flex justify-content-between align-items-center py-spac-s px-spac-5xl">
      <li class="nav_bar_item"
        :class="{ active: activeIndex === 0, hideLabel: activeIndex === 2 }"
        @click="setActive(0)" >
        <div class="nav_icon_wrapper">
          <div class="icon icon-chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
              <path fill="#ffedd5" d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7"/>
              <circle fill="#454545" cx="4" cy="8" r="1"/>
              <circle fill="#454545" cx="8" cy="8" r="1"/>
              <circle fill="#454545" cx="12" cy="8" r="1"/>
            </svg>
          </div>
          <p class="nav-label">飯聊</p>
        </div>
      </li>
      <!-- 首頁 -->
      <li class="nav_bar_item milli-w-cus mx-spac-4xl home-item"
      :class="{ active: activeIndex === 1}"
        @click="setActive(1)" >
        <!-- 固定凹槽 -->
        <!-- <div class="bgHalfGroove"></div> -->
        <div class="nav_icon_wrapper">
          <div class="icon">
            <img :src="milliImg" alt="milli" class="rounded-circle">
          </div>
          <p class="nav-label">首頁</p>
        </div>
        
      </li>
      <li class="nav_bar_item"
        :class="{ active: activeIndex === 2, hideLabel: activeIndex === 0 }"
        @click="setActive(2)">
        <div class="nav_icon_wrapper">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffedd5" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </div>
          <p class="nav-label">個人資料</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import milliImg from '@/assets/images/navigationBtn/milli.png'

const activeIndex = ref(-1)
const router = useRouter()
const route = useRoute()

function setActive(index) {
  activeIndex.value = index
  if (index === 0) {
    router.push('/ChatRoom')
  } else if (index === 1) {
    router.push('/pairing-index')
  }
  else if (index === 2) {
    router.push('/myProfile')
  }
}

//  activeIndex 與當前路徑一致
watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/ChatRoom') {
      activeIndex.value = 0
    } else if (newPath === '/pairing-index') {
      activeIndex.value = 1
    } else if (newPath === '/myProfile') {
      activeIndex.value = 2
    } else {
      activeIndex.value = -1
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.nav-bar-img {
  background-image: url("@/assets/images/navigationBtn/Subtract.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.main-nav_bar {
  margin: 0 auto;
  margin-bottom: 64px;
  position: relative;
  height: 64px;
  width: 100%;
  min-width: 325px;
  max-width: 375px;
}
.nav_bar_item {
  position: relative;
  z-index: 1;
  width: 40px;
  height: 40px; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_icon_wrapper  {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon svg,
.icon img {
  width: 40px;
  height: 40px;
  transition: all 0.5s ease;
}
.nav-label {
  font-size: 11px;
  line-height: 1;
  font-weight: bold;
  color: #ffedd5;
  margin: 0;
  padding: 1px 0 0 1px;
  text-align: center;
  white-space: nowrap;
  transition: all 0.5s ease;
}
/* 首頁 固定放大效果 */
.home-item .nav_icon_wrapper .icon {
  transform: translateY(-28px) scale(1.6);;
}
.home-item .nav-label {
  opacity: 0;
}
/* 左右兩邊項目的 active 狀態 */
.nav_bar_item.active .nav-label {
  color: #FDB468;
}
.nav_bar_item.active .icon svg path {
  fill: #FDB468;
}
.nav_bar_item.active .icon svg {
  fill: #FDB468;
}
.nav_bar_item.active .icon svg circle {
  fill: #454545; /* 保持圓點顏色不變 */
}
/* 點選左右 icon 隱藏另外一邊文字 */
.hideLabel .nav-label {
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden; /* 避免空白 */
  transition: all 0.3s ease;
}
/* 固定凹槽樣式 */
/* .bgHalfGroove {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: #FFF;
  border: 4px solid #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
.bgHalfGroove::before {
  content: '';
  position: absolute;
  top: 40%;
  left: -33px;
  width: 35px;
  height: 35px;
  background: transparent;
  border-top-right-radius: 35px;
  box-shadow: 1px -15px 0 #FFF;
}
.bgHalfGroove::after {
  content: '';
  position: absolute;
  top: 40%;
  right: -33px;
  width: 35px;
  height: 35px;
  background: transparent;
  border-top-left-radius: 35px;
  box-shadow: -1px -15px 0 #FFF;
}*/
</style> 