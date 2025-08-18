<template>
  <div class="bg-primary-50">
    <bg_header class="" />
    <div class="recapDetail">
      <div class="pairImg">
        <img src="../assets/img/m-pfp2.png" alt="他人" />
        <img class="pairConnect" src="../assets/img/resultSuccess.png" alt="icon" />
        <img src="../assets/img/user.png" alt="自己" />
      </div>

      <h5>你與<span>陽光宅男</span><br />完成了一場美食默契大挑戰！</h5>
      <div class="pairStar">
        <p>默契指數：</p>
        <img src="../assets/img/star.svg" alt="star" />
        <img src="../assets/img/star.svg" alt="star" />
        <img src="../assets/img/star.svg" alt="star" />
        <img src="../assets/img/star.svg" alt="star" />
        <img src="../assets/img/star.svg" alt="star" />
      </div>
      <h6>默契發酵中，驚喜也在路上！🍀</h6>
      <p>不太一樣沒關係，總得有人負責驚喜吧？ <br />也許聊下去，就能長出意想不到的契合感！</p>

      <a class="linkInfo" href="#">查看對方的個人小卡</a>
    </div>
    <a class="btnA pairingChat" href="PairingWaiting">繼續聊天</a>
    <a class="btnA pairingError" href="#">我們可能不適合做飯友</a>
  </div>
</template>

<style>
.recapDetail {
  padding-top: 56px;
  padding-bottom: 66px;
  max-width: 327px;
  margin: 0 auto;
  margin-top: 36px;
  background-color: #ffffff;
  text-align: center;
  font-weight: 700;
  border-radius: 32px;
}

.pairImg {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0px 51px 16px 51px;
}

.pairImg img {
  width: 100%;
  border-radius: 1000px;
  width: 84px;
  height: 84px;
  margin-bottom: 52px;
}
.pairImg .pairConnect {
  width: 100px;
  height: 100px;
  border-radius: 0;
  position: absolute;
  top: 20px;
  left: 62.5px;
  z-index: 1;
}
.btnA {
  text-decoration: none;
}

.recapDetail h5 {
  margin-bottom: 16px;
}
.recapDetail h6 {
  font-weight: 700;
  font-size: 18px;
}
.recapDetail p {
  font-weight: 500;
  font-size: 14px;
}
.pairStar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
}
.pairStar img:hover {
  /* 這邊待修改，填色問題 */
  fill: yellow;
  background-color: red;
}
.pairStar p {
  margin: 0;
}
.linkInfo {
  text-decoration: none;
  color: #ea580c;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid#EA580C;
  padding-bottom: 4px;
  margin-top: 32px;
  margin-bottom: 66px;
}
.linkInfo:hover{
    color:#FB923C;
    border-bottom: 1px solid #FB923C;
}

</style>



<script setup>
import bg_header from '../components/bg-header.vue'
</script>