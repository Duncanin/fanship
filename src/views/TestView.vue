<template>
  <main class="bg-primary-100">
    <bg_header class="" />

    <div class="container">
      <DefaultReply />
      <div class="row">
        <button type="button" class="btn btn-sm">確認並開始</button>
        <button type="button" class="btn btn-primary col-3">
          Button
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-0-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"
              />
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"
              />
            </svg>
          </span>
        </button>
        <button type="button" class="btn btn-secondary col-2">
          Button
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-0-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"
              />
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"
              />
            </svg>
          </span>
        </button>
        <button type="button" class="btn btn-brand col-2">
          Button
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-0-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"
              />
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"
              />
            </svg>
          </span>
        </button>
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
    </div>
  </main>
</template>

<script setup>
import DefaultReply from '@/components/DefaultReply.vue'
import bg_header from '../components/bg-header.vue'
</script>
