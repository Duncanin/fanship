<script setup>
import PairingMenu from '../components/PairingMenu.vue'
</script>

<template>
  <main class="container bg-gradient-home min-vh-100">
    <PairingMenu />
    <div class="d-flex justify-content-center align-items-center">
      <div class="progress rounded-full  progress-w me-spac-s" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-primary-300" style="width: 25%"></div>
      </div>
      <p class="fw-bold text-secondary-500 fs-text-md mb-0">26秒</p>
    </div>

  </main>
</template>

<style scoped>
.progress-w {
  width: 281px;
  height: 12px;
}
.progress {
  --surface-progressbar-surface-progressbar-empty: rgba(255, 237, 213, 1);
}
</style>
