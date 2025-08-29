<template>
  <div class="bg-primary-50">
    <bg_header />
    <div class="recapDetail">
      <div class="pairImg">
        <img src="../assets/images/pairing_img/m-pfp2.png" alt="他人" />
        <img class="pairConnect" src="../assets/images/pairing_img/resultSuccess.png" alt="icon" />
        <img src="../assets/images/pairing_img/user.png" alt="自己" />
      </div>

      <h5>你與<span>陽光宅男</span><br />完成了一場美食默契大挑戰！</h5>
      <div class="pairStar">
        <p>默契指數：</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E7E7E7"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E7E7E7"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          /></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E7E7E7"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          /></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E7E7E7"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          /></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#E7E7E7"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </div>
      <h6>默契發酵中，驚喜也在路上！🍀</h6>
      <p>不太一樣沒關係，總得有人負責驚喜吧？ <br />也許聊下去，就能長出意想不到的契合感！</p>

      <a class="linkInfo" href="#">查看對方的個人小卡</a>
    </div>
    <router-link to="/PairingWaiting" class="btnA pairingChat">繼續聊天</router-link>
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
.pairStar svg:hover {
  fill: #f6d74e;
}
.pairStar p {
  margin: 0;
}
.linkInfo {
  text-decoration: none;
  color: #ea580c;
  font-size: 16px;
  font-weight: 500;
  /* border-bottom: 1px solid#EA580C; */
  padding-bottom: 4px;
  margin-top: 32px;
  margin-bottom: 66px;

}
.linkInfo:hover {
  color: #fb923c;
  /* border-bottom: 1px solid #fb923c; */
}
</style>



<script setup>
import bg_header from '../components/bg-header.vue'
</script>