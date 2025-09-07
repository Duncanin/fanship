<template>
  <div class="container">
    <h6 class="fs-6 text-center fw-bold bg-primary-50 pt-spac-5xl pb-17 mb-spac-s">聊天室</h6>
    <input type="text" class="form-control mb-spac-s " id="typeText" placeholder="搜尋" />
    <ul class="d-flex list-unstyled mb-spac-s">
      <li class="me-spac-s d-flex flex-column justify-content-end align-items-center">
        <p
          class="px-spac-s py-spac-m bg-primary-50 rounded-s fw-medium text-secondary-400 fs-text-xs"
        >
          在想什麼?
        </p>
        <img
          class="rounded-full iconwh60 mt-20"
          src="..\assets\images\chatRoom\喔嚕嚕.png"
          alt="icon"
        />
        <p class="text-center text-secondary-400 fs-text-xs">建立便條</p>
      </li>
      <li class="me-spac-s d-flex flex-column justify-content-end align-items-center">
        <p
          class="px-spac-s py-spac-m bg-primary-50 rounded-s fw-medium text-secondary-900 thinking fs-text-xs"
        >
          好餓喔好餓喔好餓喔
        </p>
        <img
          class="rounded-full iconwh60 mt-20"
          src="..\assets\images\chatRoom\sasa.png"
          alt="icon"
        />
        <p class="text-center text-secondary-900 fs-text-xs">莎莎</p>
      </li>
      <li class="me-spac-s d-flex flex-column justify-content-end align-items-center">
        <p
          class="px-spac-s py-spac-m bg-primary-50 rounded-s fw-medium text-secondary-900 thinking fs-text-xs"
        >
          今天去 101 新開幕的景觀餐廳探...
        </p>
        <img
          class="rounded-full iconwh60 mt-20"
          src="..\assets\images\chatRoom\ben.png"
          alt="icon"
        />
        <p class="text-center text-secondary-900 fs-text-xs">Ben</p>
      </li>
      <li class="me-spac-s d-flex flex-column justify-content-end align-items-center">
        <p
          class="px-spac-s py-spac-m bg-primary-50 rounded-s fw-medium text-secondary-900 thinking fs-text-xs"
        >
          未知的首爾好好看
        </p>
        <img
          class="rounded-full iconwh60 mt-20"
          src="..\assets\images\chatRoom\jason.png"
          alt="icon"
        />
        <p class="text-center text-secondary-900 fs-text-xs">Jason</p>
      </li>
    </ul>
    <ul class="list-unstyled">
      <li>
        <router-link to="/ChatMessages" class="d-flex flex-row align-items-center textbox">
          <div class="userIcon me-spac-s">
            <img class="rounded-full" src="..\assets\images\chatRoom\sasa.png" alt="icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pin-angle-fill pin"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"
              />
            </svg>
          </div>
          <div class="userMessage">
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-blod fs-text-lg mb-0">莎莎</p>
              <p class="fs-text-xs text-secondary-300 mb-0">6:10 PM</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-blod message fs-text-sm me-spac-s mb-0">
                看來也是每天要注射咖啡因的捧友！看來也是每天要注射咖啡因的捧友！看來也是每天要注射咖啡因的捧友！
              </p>
              <p
                class="fs-text-sm bg-primary-400 rounded-full text-white wh20 text-center me-spac-xs mb-0"
              >
                3
              </p>
            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link to="/ChatMessages" class="d-flex flex-row align-items-center textbox">
          <div class="userIcon me-spac-s">
            <img class="rounded-full" src="..\assets\images\chatRoom\dog.png" alt="icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pin-angle-fill pin"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"
              />
            </svg>
          </div>
          <div class="userMessage">
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-blod fs-text-lg mb-0">
                小歐<span class="ms-spac-xxs"
                  ><img class="wh16" src="..\assets\images\chatRoom\bell.png" alt="bell"
                /></span>
              </p>
              <p class="fs-text-xs text-secondary-300 mb-0">4:22 PM</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-blod message fs-text-sm text-secondary-400 mb-0 me-spac-s">不可能吧！我不相信！</p>
              <p
                class="fs-text-sm bg-primary-400 rounded-full text-white wh20 text-center invisible me-spac-xs mb-0"
              >
                3
              </p>
            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link to="/ChatMessages" class="d-flex flex-row align-items-center textbox">
          <div class="userIcon me-spac-s">
            <img class="rounded-full" src="..\assets\images\chatRoom\jason.png" alt="icon" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pin-angle-fill pin"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"
              />
            </svg>
          </div>
          <div class="userMessage">
            <div class="d-flex justify-content-between  align-items-center">
              <p class="fw-blod fs-text-lg mb-0">Jason</p>
              <p class="fs-text-xs text-secondary-300 mb-0">2:10 PM</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-blod message fs-text-sm mb-0 me-spac-s">哈哈哈哈哈哈哈哈哈哈哈哈哈超好笑</p>
              <p
                class="fs-text-sm bg-primary-400 rounded-full text-white wh20 text-center me-spac-xs mb-0"
              >
                3
              </p>
            </div>
          </div>
        </router-link>
      </li>

      <li>
        <router-link to="/ChatMessages" class="d-flex flex-row align-items-center textbox">
          <div class="userIcon me-spac-s">
            <img class="rounded-full" src="..\assets\images\pairing_img\m-pfp2.png" alt="icon" />
          </div>
          <div class="userMessage ">
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-blod fs-text-lg mb-0">陽光宅男</p>
              <p class="fs-text-xs text-secondary-300 mb-0">1:04 PM</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-blod message fs-text-sm text-secondary-400 mb-0 me-spac-s">你家的貓會滾幾圈？</p>
              <p
                class="fs-text-sm bg-primary-400 rounded-full text-white wh20 text-center invisible me-spac-xs mb-0"
              >
                3
              </p>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/ChatMessages" class="d-flex flex-row align-items-center textbox">
          <div class="userIcon me-spac-s">
            <img class="rounded-full" src="..\assets\images\chatRoom\ben.png" alt="icon" />
          </div>
          <div class="userMessage ">
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-blod fs-text-lg mb-0">Ben</p>
              <p class="fs-text-xs text-secondary-300 mb-0">10:21 AM</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fw-blod message fs-text-sm text-secondary-400 mb-0 me-spac-s">Ben 已成為飯友</p>
              <p
                class="fs-text-sm bg-primary-400 rounded-full text-white wh20 text-center invisible me-spac-xs mb-0"
              >
                3
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>

    <MainNavBar />
  </div>
</template>

<style scoped>
.pb-17 {
  padding-bottom: 17px;
}
.iconwh60 {
  width: 60px;
  height: 60px;
}

.thinking {
  width: 88px;
}
.userIcon {
  position: relative;
  width: 52px;
  height: 52px;
}

.pin {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fdb468;
  width: 16px;
  height: 16px;
  border-radius: 1000px;
  padding: 2.35px;
}
.message {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 230px;
}
.mt-20 {
  margin-top: -20px;
  z-index: -1;
}
.wh20 {
  width: 20px;
  height: 20px;
}
.textbox {
  border-bottom: 0.75px solid #e7e7e7;
  padding: 12px 16px;
}

.wh16 {
  width: 16px;
  height: 16px;
}
/* * {
  outline: 1px solid pink;
} */
</style>
<script setup>
import MainNavBar from '../components/main-nav-bar.vue'
</script>
