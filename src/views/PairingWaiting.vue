<template>
  <div class="bg-primary-50">
    <bg_header class="" />
    <div class="recapWaiting">
      <h5>等待飯友回應中⋯</h5>
      <img src="../assets/img/result-waiting.gif" alt="">
    </div>

    <a class="btnA pairingChat" href="PairingSuccess">繼續聊天</a>
    <a class="btnA pairingError" href="#">我們可能不適合做飯友</a>
  </div>
</template>
<style>

.recapWaiting {
  padding-top: 101px;
  padding-bottom: 101px;
  max-width: 327px;
  margin: 0 auto;
  margin-top: 36px;
  background-color: #ffffff;
  text-align: center;
  font-weight: 700;
  border-radius: 32px;
  font-size: 20px;
}
.recapWaiting h5{
    margin-bottom: 44px;
}
.recapWaiting img{
    width: 208px;
    height: 208px;
}

</style>

<script setup>
import bg_header from '../components/bg-header.vue'
</script>