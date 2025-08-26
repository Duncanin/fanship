<template>

  <div class="container pairingMenu-spacer mb-spac-s">
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-none border-0 py-0 px-0 btn-modal-box-shadow" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <img :src="arrowLeftImg" alt="arrowLeft" class="rrowLeft-img">
        </button>
        <img :src="moreImg" alt="more" class="more-img">
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content d-flex justify-content-center align-items-center bg-secondary-0 shadow-light px-spac-2xl py-spac-2xl rounded-m">
          <h1 class="modal-title fw-bold fs-4 lh-h4 mb-spac-m text-secondary-900" id="staticBackdropLabel ">要回首頁了嗎？</h1>
          <p class="mb-spac-xl text-secondary-700 fs-text-lg border-0 text-center py-0">返回首頁可能會錯過和飯友配對的機<br>會，確定要返回嗎？</p>
          <div>
            <button type="button" class="btn btn-secondary-0 shadow-light rounded-full text-secondary-700 me-spac-m fs-text-lg fw-bold modal-btn" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-secondary-900 shadow-light rounded-full text-secondary-0 fs-text-lg fw-bold modal-btn"
              @click="forceCloseAndNavigate"
              >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-bottom border-1 border-secondary-100 mb-spac-s"></div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import arrowLeftImg from '@/assets/images/icon/arrowLeft.svg';
import moreImg from '@/assets/images/icon/more.svg';

const router = useRouter()

const forceCloseAndNavigate = () => {
  const modalElement = document.getElementById('staticBackdrop')
  
  if (modalElement) {
    // 開始淡出：移除 show class，但保持 modal 可見
    modalElement.classList.remove('show')
    
    // 淡出 backdrop
    const backdrop = document.querySelector('.modal-backdrop')
    if (backdrop) {
      backdrop.classList.remove('show')
    }
    
    // 等待 Bootstrap 的淡出動畫完成後再清理並跳轉
    setTimeout(() => {
      // 完全清理 modal
      modalElement.style.display = 'none'
      modalElement.setAttribute('aria-hidden', 'true')
      modalElement.removeAttribute('aria-modal')
      
      // 清理 backdrop
      if (backdrop) {
        backdrop.remove()
      }
      
      // 清理 body
      document.body.classList.remove('modal-open')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('padding-right')
      
      // 跳轉到首頁
      router.push('/pairing-index')
    }, 300) // Bootstrap 預設的 fade 時間是 150ms
  } else {
    router.push('/pairing-index')
  }
}
</script>

<style scoped>
.pairingMenu-spacer {
  padding-top: 59px;
}
.arrowLeft-img,
.more-img {
  width: 32px;
  height: 32px;
}
.modal-btn{
  padding: 17px 24px;
  width: 127.5px;
}
.btn-modal-box-shadow{
  box-shadow: none;
}
</style>
