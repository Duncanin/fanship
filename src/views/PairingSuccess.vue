<template>
  <div class="bg-primary-50">
    <bg_header class="" />
    <div class="recapSuccess">
      <h5>恭喜成為飯友 🎉</h5>
      <div class="pairImgSuccess">
        <img class="mb-0" src="../assets/img/m-pfp2.png" alt="他人" />
        <div class="connect">
          <img src="../assets/img/hands highfive.png" alt="擊掌火花" />
        </div>

        <img class="mb-0" src="../assets/img/user.png" alt="自己" />
      </div>
      <img src="../assets/img/matching-success.gif" alt="成功動圖" />
    </div>
    <router-link to="/ChatRoom" class="btnA pairingChat">前往聊天室</router-link>
    <a class="btnA pairingError" href="#">返回首頁</a>
  </div>
</template>
<style>
.recapSuccess {
  padding-top: 76px;
  padding-bottom: 76px;
  max-width: 327px;
  margin: 0 auto;
  margin-top: 36px;
  background-color: #ffffff;
  text-align: center;
  font-weight: 700;
  border-radius: 32px;
  font-size: 20px;
}

.pairImgSuccess {
  display: flex;
  justify-content: space-evenly;
  margin: 36px 51px 0px 51px;
  position: relative;
}

.pairImgSuccess img {
  border-radius: 1000px;
  width: 84px;
  height: 84px;
  margin-bottom: 0px;
  position: relative;
  z-index: 1;
}
.pairImgSuccess .connect {
  position: absolute;
  z-index: 0;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pairImgSuccess .connect img {
  width: 120%;
  height: 120%;
 
}

/* * {
  outline: 1px solid pink;
} */
</style>

<script setup>
import bg_header from '../components/bg-header.vue'
</script>