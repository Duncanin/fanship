<template>
  <div class="bg-primary-50">
    <bg_header class="" />
    <div class="recap">
      <img src="../assets/img/other01.png" alt="anon" />
      <h5>你與<span>陽光宅男</span><br />完成了一場美食默契大挑戰！</h5>
      <p>點擊上方頭像解鎖對方照片！</p>
    </div>
    <a class="btnA pairingChat" href="PairingDetail">繼續聊天</a>
    <a class="btnA pairingError" href="#">我們可能不適合做飯友</a>
  </div>
</template> 

<style>
.recap {
  max-width: 327px;
  margin: 0 auto;
  margin-top: 36px;
  background-color: #ffffff;
  text-align: center;
  font-weight: 700;
  padding: 76px 24px;
  border-radius: 32px;
  font-size: 20px;
}
.recap img {
  width: 100%;
  margin-top: 76px;
  margin-bottom: 32px;
}
.recap img:active {
  content: url('../assets/img/m-pfp2.png');
  border-radius: 1000px;
}
span {
  margin-left: 16px;
  color: #fb923c;
}
.recap p {
  font-weight: 500;
  color: #6d6d6d;
  margin-top: 32px;
  font-size: 16px;
}
</style>

<script setup>
import bg_header from '../components/bg-header.vue'
</script>