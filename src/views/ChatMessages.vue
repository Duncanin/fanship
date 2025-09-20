<template>
  <div class="bg-primary-50 pt-spac-5xl pb-spac-s mb-spac-xl">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <button
          type="button"
          class="btn btn-none border-0 py-0 px-0 btn-modal-box-shadow"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          @click="$router.push({ path: '/ChatRoom' })"
        >
          <img class="wh32" src="..\assets\images\chatRoom\back.png" alt="back" />
        </button>
        <img
          class="rounded-full wh32 mx-spac-s"
          src="..\assets\images\pairing_img\m-pfp2.png"
          alt="icon"
        />
        <h6 class="fw-medium mb-0">陽光宅男</h6>
      </div>
      <div class="d-flex">
        <img class="wh32" src="..\assets\images\chatRoom\search.png" alt="search" />
        <img class="wh32 ms-spac-xs" src="..\assets\images\chatRoom\album.png" alt="file" />
        <img class="wh32" src="..\assets\images\icon\more.svg" alt="more" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="bg-primary-100 px-spac-xl py-spac-l rounded-m borderPrimary mb-spac-s">
      <p class="text-center fs-text-md">你們的共同點</p>
      <ul class="list-unstyled d-flex justify-content-center">
        <li class="bg-white rounded-full borderTag px-spac-s py-spac-xxs fs-text-sm">日式料理</li>
        <li class="bg-white rounded-full borderTag px-spac-s py-spac-xxs mx-spac-xs fs-text-sm">
          甜點魂
        </li>
        <li class="bg-white rounded-full borderTag px-spac-s py-spac-xxs fs-text-sm">咖啡因中毒</li>
      </ul>
    </div>
    <div class="d-flex mb-spac-xl">
      <div class="bg-primary-100 px-spac-s py-spac-m rounded-m borderPrimary mb-spac-s me-spac-s">
        <p class="fw-bold fs-text-md mb-spac-s">Q1 吃滷肉飯的時候你的習慣是？</p>
        <div class="d-flex">
          <img
            class="rounded-full mx-spac-s wh20"
            src="..\assets\images\chatRoom\喔嚕嚕.png"
            alt="icon"
          />
          <p class="fs-text-md mb-spac-xs text-secondary-700">飯跟滷肉拌在一起</p>
        </div>
        <div class="d-flex">
          <img
            class="rounded-full mx-spac-s wh20"
            src="..\assets\images\pairing_img\m-pfp2.png"
            alt="icon"
          />
          <p class="fs-text-md mb-0 text-secondary-700">飯跟滷肉分開</p>
        </div>
      </div>
      <div class="bg-primary-100 px-spac-s py-spac-m rounded-m borderPrimary mb-spac-s">
        <p class="fw-bold fs-text-md mb-spac-s">Q2 早餐我通常會吃？</p>

        <div class="d-flex">
          <img
            class="rounded-full mx-spac-s wh20"
            src="..\assets\images\chatRoom\喔嚕嚕.png"
            alt="icon"
          />
          <p class="fs-text-md mb-spac-xs text-secondary-700">飯糰</p>
        </div>
        <div class="d-flex">
          <img
            class="rounded-full mx-spac-s wh20"
            src="..\assets\images\pairing_img\m-pfp2.png"
            alt="icon"
          />
          <p class="fs-text-md mb-0 text-secondary-700">麵包</p>
        </div>
      </div>
    </div>
    <p
      class="text-center mb-spac-s fw-medium fs-text-sm text-secondary-500 bg-secondary-50 px-spac-s py-spac-xxs w48 mx-auto borderRadius100 mb-spac-s"
    >
      今天
    </p>

    <div class="d-flex align-items-end">
      <div class="userchat d-flex">
        <img
          class="rounded-full wh36 me-spac-xs"
          src="..\assets\images\pairing_img\m-pfp2.png"
          alt="icon"
        />
        <p class="bg-lemon-100 px-spac-m py-spac-xs rounded-m ts-text-lg">哈囉哈囉</p>
      </div>
      <div class="mtime ms-spac-xs">
        <p class="fw-medium fs-text-xs text-secondary-500">12:56</p>
      </div>
    </div>
    <div class="d-flex align-items-end justify-content-end mbtextbox">
      <div class="mtime">
        <p class="fw-medium fs-text-xs text-secondary-500 me-spac-xs">12:56</p>
      </div>
      <p class="bg-sage-100 px-spac-m py-spac-xs rounded-m ts-text-lg">
        看來也是每天注射咖啡因的朋友！
      </p>
    </div>

    <div class="enter d-flex pt-spac-m pb-spac-4xl">
      <img class="wh40 transform-xl" src="..\assets\images\chatRoom\plus.png" alt="add" />
      <img class="wh40 transform-xl" src="..\assets\images\chatRoom\camera.png" alt="takepic" />
      <img class="wh40" src="..\assets\images\chatRoom\picicon.png" alt="openpic" />
      <input
        type="text"
        class="form-control mb-spac-s mx-spac-xs"
        id="typeText"
        placeholder="輸入項目"
      />
      <img class="wh40" src="..\assets\images\chatRoom\voice.png" alt="voice" />
    </div>
  </div>
</template>

<style scoped>
.wh32 {
  width: 32px;
  height: 32px;
}
.wh36 {
  width: 36px;
  height: 36px;
}
.wh40 {
  width: 40px;
  height: 40px;
}
.wh20 {
  width: 20px;
  height: 20px;
}
.borderTag {
  border: 1px solid #1b1b1b33;
}
.borderPrimary {
  border: 1px solid #1b1b1b1a;
}
.w48 {
  width: 48px;
}
.borderRadius100 {
  border-radius: 100px;
}
.mbtextbox {
  margin-bottom: 207px;
}
.transform-xl {
  transform: scale(1.3);
}
/* 
* {
  outline: 1px solid pink;
}*/
</style> 

<script setup>
</script>
