<template>
  <div class="main-nav_bar bg-secondary-800 rounded-pill">
    <ul class="d-flex justify-content-between align-items-center py-spac-s px-spac-5xl">
      <li class="nav_bar_item"
        :class="{ active: activeIndex === 0 }"
        @click="setActive(0, $event)">
        <div class="nav_icon_wrapper">
          <div class="icon icon-chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
              
              <path fill="#ffedd5" d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7"/>
              
              <circle fill="#454545" cx="4" cy="8" r="1"/>
              <circle fill="#454545" cx="8" cy="8" r="1"/>
              <circle fill="#454545" cx="12" cy="8" r="1"/>
            </svg>
          </div>
        </div>
      </li>
      <li class="nav_bar_item milli-w-cus mx-spac-4xl"
        :class="{ active: activeIndex === 1 }"
        @click="setActive(1, $event)">
        <div class="nav_icon_wrapper">
          <div class="icon">
            <img :src="milliImg" alt="milli" class="rounded-circle">
          </div>
        </div>
      </li>
      <li class="nav_bar_item"
        :class="{ active: activeIndex === 2 }"
        @click="setActive(2, $event)">
        <div class="nav_icon_wrapper">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffedd5" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </div>
        </div>
      </li>
      <div class="bgHalfGroove" 
      :style="{ transform: `translateX(calc(80px * ${activeIndex}))` }"
      ref="groove"
      ></div>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import milliImg from '@/assets/images/navigationBtn/milli.png';

const activeIndex = ref(1)
const groove = ref(null)

function moveGrooveTo(index) {
  const items = document.querySelectorAll(".nav_bar_item")
  const grooveEl = groove.value
  if (!items[index] || !grooveEl) return

  const targetRect = items[index].getBoundingClientRect()
  const navBarRect = items[0].parentNode.getBoundingClientRect()
  
  // 計算中心位置
  const targetCenterX = targetRect.left - navBarRect.left + targetRect.width / 2
  
  // 凹槽寬度的一半，設定居中對齊
  const grooveHalfWidth = 40
  
  grooveEl.style.transform = `translateX(${targetCenterX - grooveHalfWidth}px)`
}

function setActive(index) {
  activeIndex.value = index
  nextTick(() => moveGrooveTo(index))
}

onMounted(() => {
  // 初始狀態下凹槽位置要是正確
  nextTick(() => moveGrooveTo(activeIndex.value))
})
</script>

<style scoped>
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main-nav_bar {
  margin-bottom: 64px;
  position: relative;
  height: 64px;
  width: 100%;
  min-width: 325px;
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
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.icon svg,
.icon img {
  position: relative;
  width: 40px;
  height: 40px;
  transition: 0.5s;
}
.nav_bar_item.active .nav_icon_wrapper .icon {
  transform: translateY(-32px) scale(1.6);
  /* filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1)); */
  border: transparent;
}
/* 選中狀態下改變 SVG 顏色 */
.nav_bar_item.active .icon svg path {
  fill: #FDB468;
}
/* 保持圓點顏色不變 */
.nav_bar_item.active .icon svg circle {
  fill: #454545;
}
.nav_bar_item.active .icon svg {
  fill: #FDB468;
}
/* 凹槽 */
.bgHalfGroove {
  position: absolute;
  top: -55%;
  left: 0;
  width: 80px;
  height: 80px;
  background: #FFF;
  border: 6px solid #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  
}
.bgHalfGroove::before {
  content: '';
  position: absolute;
  top: 43%;
  left: -31px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-top-right-radius: 30px;
  box-shadow: 1px -12px 0 #FFF;
}
.bgHalfGroove::after {
  content: '';
  position: absolute;
  top: 43%;
  right: -31px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-top-left-radius: 30px;
  box-shadow: -1px -12px 0 #FFF;
}

</style>