<template>
  <div class="d-flex">
    <div class="p-5 bg-black bg-opacity-10 text-black opacity-10">123</div>
    <div class="text-primary-900 bg-primary-950">primay</div>
  </div>

  <span class="text-shadow fs-1 shadow">Hello test-border</span>

  <div class="">
    <h1>H1~h6 fw-700</h1>
    <div class="bg-green-400 p-spac-tiny d-inline-block">spac-tiny (p-spac-tiny)</div>
    <p>1234預設 fw-500, 16px <br /><span class="fw-bold"> fw-bold //700</span></p>
    <p class="fs-text-lg">fs-text-lg 等同預設樣式</p>
    <p class="fs-text-xxs">fs-text-xxs</p>
  </div>
  <hr />
  <h2>border-radius (rounded-)</h2>
  <div class="d-flex flex-wrap">
    <div
      class="border d-inline-block bg-red-200 rounded-xxs m-1 shadow-light"
      style="width: 100px; height: 100px"
    >
      <p>4 -xxs <br />shadow-light</p>
    </div>
    <div
      class="border d-inline-block bg-red-200 rounded-xs m-1 shadow-dark"
      style="width: 100px; height: 100px"
    >
      <p>8 -xs <br />shadow-dark</p>
    </div>
    <div
      class="border d-inline-block bg-red-200 rounded-s m-1 shadow-glow"
      style="width: 100px; height: 100px"
    >
      <p>12 -s <br />shadow-glow</p>
    </div>
    <div class="w-50 border p-spac-2xl" style="background-color: var(--bs-gray-100)">
      <!-- <div class="w-50 border p-spac-2xl bg-black"> -->
      <div
        class="d-inline-block bg-white rounded-m m-1 shadow-photo border-0"
        style="width: 100px; height: 100px"
      >
        <p>16 -m shadow-photo</p>
      </div>
      <div
        class="d-inline-block bg-white rounded-l m-1 shadow-background border-0"
        style="width: 100px; height: 100px"
      >
        <p>
          20 -l <br />
          shadow-background
        </p>
      </div>
    </div>
    <div
      class="border d-inline-block bg-red-200 rounded-xl m-1"
      style="width: 100px; height: 100px"
    >
      <p>24 -xl</p>
    </div>
    <div
      class="border d-inline-block bg-red-200 rounded-xxl m-1"
      style="width: 100px; height: 100px"
    >
      <p>32 -xxl</p>
    </div>
    <div
      class="border d-inline-block bg-red-200 rounded-full m-1"
      style="width: 100px; height: 100px"
    >
      <p>1000 -full</p>
    </div>
  </div>
</template>
<style scoped>
.text-shadow {
  /* text-shadow:
    -1px -1px 0 red,
    1px -1px 0 red,
    -1px 1px 0 red,
    1px 1px 0 red; */
  -webkit-text-stroke: 1px #ea9707; /* 描邊顏色 + 粗細 */
  color: greenyellow;
}
</style>
<script setup></script>
