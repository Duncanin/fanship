<template>
  <div class="bg-primary-50">
    <bg_header />
    <div class="recap">
      <div class="combine">      
          <img class="resultImg" src="../assets/images/pairing_img/other01.png" alt="anon" />    
        <div>
          <img class="pointerImg" src="../assets/images/pairing_img/point.png" alt="pointer" />
        </div>
      </div>

      <h5>你與<span>陽光宅男</span><br />完成了一場美食默契大挑戰！</h5>
      <p>點擊上方頭像解鎖對方照片！</p>
    </div>

    <div>
      <router-link to="/PairingDetail" class="btnA pairingChat">繼續聊天</router-link>
      <router-link to="/pairing-index" class="btnA pairingError">我們可能不適合做飯友</router-link>
    </div>

    <hr class="border-0 m-0" />
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
.resultImg {
  max-width: 196px;
  width: 100%;
  margin: 76px auto 32px auto;
  display: block;
}
.resultImg:active {
  content: url('../assets/images/pairing_img/m-pfp2.png');
  border-radius: 1000px;
}
.resultImg:visited {
  content: url('../assets/images/pairing_img/m-pfp2.png');
  border-radius: 1000px;
}

.combine {
  position: relative;
  max-width: 196px;
  margin: 0 auto;
}
.pointerImg {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  display: block;
  width: 56px;
  height: 56px;
  background-color: #fb923c73;
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