<template>
  <div class="bg-primary-50">
    <bg_header class="" />
    <div class="recapSuccess">
      <h5>恭喜成為飯友 🎉</h5>
      <div class="pairImg">
        <img src="../assets/img/m-pfp2.png" alt="他人" />
        <div class="connect">
          <img src="../assets/img/highfive.png" alt="擊掌火花" />
          <div class="connentHand">
            <img src="../assets/img/hand01.png" alt="左手" />
            <img src="../assets/img/hand02.png" alt="右手" />
          </div>
        </div>

        <img src="../assets/img/user.png" alt="自己" />
      </div>
      <img src="../assets/img/matching-success.gif" alt="成功動圖" />
    </div>
    <a class="btnA pairingChat" href="ChatRoom">前往聊天室</a>
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
.pairImg {
  position: relative;
  margin-top: 36px;
  justify-content: space-around;
  margin-bottom: 0;
}
.pairImg img {
  margin-bottom: 0;
}
.connect {
  position: absolute;
  top: -40px;
  left: 92px;
  z-index: 1;
}
.connect img {
  width: 40px;
  height: 46px;
  margin: 0;
  padding: 0;
}
.connentHand {
  display: flex;
}
.connentHand img {
  width: 20px;
  height: 100%;
}

</style>

<script setup>
import bg_header from '../components/bg-header.vue'
</script>