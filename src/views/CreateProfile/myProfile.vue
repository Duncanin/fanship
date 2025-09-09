<script setup>
import MainNavBarOther from '@/components/MainNavBarOther.vue';
</script>

<template>
  <div class="bg-primary-50 profileHeader sticky-top border-bottom border-secondary-100">
    <div class="container">
      <h1 class="fs-6 text-center text-primary position-relative pt-1 pb-3 m-0">
        我的小卡
        <button class="position-absolute end-0 top-0 border-0 bg-primary-50 text-secondary-700">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_468_1636)">
              <path
                d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                fill="currentColor"
              />
              <path
                d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                fill="currentColor"
              />
              <path
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_468_1636">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </h1>
    </div>
  </div>
  <div class="primary-gradient">
    <div class="container py-spac-xl">
      <div class="bg-white shadow-light rounded-xl px-spac-2xl py-spac-3xl">
        <div class="d-flex flex-column gap-spac-l">
          <div class="d-flex gap-spac-xl border-bottom border-primary border-opacity-10 pb-spac-l">
            <div style="width: 80px; height: 80px">
              <img
                src="/src/assets/images/喔嚕嚕.png"
                alt="photo"
                class="w-100 h-auto d-block object-fit-cover rounded-circle"
              />
            </div>
            <div class="d-flex align-items-center gap-2 text-primary">
              <div>
                <h3 class="fs-5 mb-1">喔嚕嚕</h3>
                <p class="fs-text-md m-0">非二元·25·台北市</p>
              </div>
              <router-link
                to="/editProfile"
                class="p-2 border-0 rounded-circle bg-white shadow-light"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_468_1638)">
                    <path
                      d="M20.2001 7.3401L17.4601 4.6001C17.1025 4.2642 16.6339 4.07146 16.1434 4.05855C15.653 4.04565 15.1749 4.21347 14.8001 4.5301L5.8001 13.5301C5.47687 13.8561 5.27561 14.2833 5.2301 14.7401L4.8001 18.9101C4.78663 19.0566 4.80564 19.2042 4.85576 19.3425C4.90589 19.4808 4.9859 19.6063 5.0901 19.7101C5.18354 19.8028 5.29436 19.8761 5.4162 19.9259C5.53803 19.9756 5.66849 20.0009 5.8001 20.0001H5.8901L10.0601 19.6201C10.5169 19.5746 10.9441 19.3733 11.2701 19.0501L20.2701 10.0501C20.6194 9.68107 20.8082 9.18861 20.7951 8.68064C20.782 8.17266 20.568 7.69061 20.2001 7.3401ZM16.8001 10.6801L14.1201 8.0001L16.0701 6.0001L18.8001 8.7301L16.8001 10.6801Z"
                      fill="#4F4F4F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_468_1638">
                      <rect width="24" height="24" fill="white" transform="translate(0.799805)" />
                    </clipPath>
                  </defs>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- about -->
          <div class="d-flex flex-column border-bottom border-primary border-opacity-10 pb-spac-l">
            <h4 class="d-flex fs-text-lg align-items-center gap-2 mb-spac-s">
              <span class="m-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.30431 14.5C9.30431 14.5 10.6168 16 12.8043 16C14.9918 16 16.3043 14.5 16.3043 14.5M15.5543 9.5H15.5643M10.0543 9.5H10.0643M12.8043 20.5C17.4987 20.5 21.3043 16.6944 21.3043 12C21.3043 7.30558 17.4987 3.5 12.8043 3.5C8.10989 3.5 4.30431 7.30558 4.30431 12C4.30431 12.95 4.46016 13.8636 4.74768 14.7166C4.85588 15.0376 4.90998 15.1981 4.91974 15.3214C4.92938 15.4432 4.92209 15.5286 4.89197 15.6469C4.86146 15.7668 4.79411 15.8915 4.65941 16.1408L3.02375 19.1684C2.79044 19.6002 2.67378 19.8161 2.69989 19.9828C2.72263 20.1279 2.80806 20.2557 2.93349 20.3322C3.07749 20.4201 3.32161 20.3948 3.80985 20.3444L8.93088 19.815C9.08596 19.799 9.1635 19.791 9.23417 19.7937C9.30369 19.7963 9.35276 19.8029 9.42054 19.8185C9.48947 19.8344 9.57613 19.8678 9.74947 19.9345C10.6975 20.2998 11.7275 20.5 12.8043 20.5ZM16.0543 9.5C16.0543 9.77614 15.8305 10 15.5543 10C15.2782 10 15.0543 9.77614 15.0543 9.5C15.0543 9.22386 15.2782 9 15.5543 9C15.8305 9 16.0543 9.22386 16.0543 9.5ZM10.5543 9.5C10.5543 9.77614 10.3305 10 10.0543 10C9.77817 10 9.55431 9.77614 9.55431 9.5C9.55431 9.22386 9.77817 9 10.0543 9C10.3305 9 10.5543 9.22386 10.5543 9.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              關於我
            </h4>
            <p class="text-secondary-400 fs-text-md m-0">
              添加一段自我介紹，讓其他飯友更了解你吧～
            </p>
          </div>

          <!-- food tags -->
          <div class="d-flex flex-column border-bottom border-primary border-opacity-10 pb-spac-l">
            <h4 class="d-flex fs-text-lg align-items-center gap-2 mb-spac-s">
              <span class="m-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1045 1.56946C18.0245 2.99546 20.708 6.92696 20.978 12.9985C21.006 13.627 20.7 14.2225 20.129 14.4875C19.7215 14.6765 19.1705 14.8915 18.4765 15.0745C18.354 15.1055 18.2471 15.1804 18.1761 15.285C18.1051 15.3896 18.075 15.5166 18.0915 15.642L18.7045 19.931C18.8745 21.1225 18.408 22.19 17.247 22.5095C16.162 22.8085 15 22.0875 15 20.9615V2.25296C15 1.61096 15.589 1.18696 16.1045 1.56946Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.973 2.679C11.203 4.038 11.525 6.4125 11.499 8.948C11.4855 10.2565 10.6115 11.429 9.23749 11.737C8.95399 11.8005 8.65099 11.858 8.33499 11.9025L9.25699 19.8925C9.39699 21.1085 8.64399 22.301 7.43149 22.465C7.28856 22.486 7.14442 22.4977 6.99999 22.5C6.85571 22.4977 6.71174 22.486 6.56898 22.465C5.35649 22.301 4.60299 21.1085 4.74349 19.8925L5.66549 11.9025C5.36257 11.8596 5.0615 11.8045 4.76298 11.7375C3.38899 11.429 2.51498 10.256 2.50148 8.9475C2.47548 6.4125 2.79649 4.0385 3.02649 2.6795C3.14399 1.987 3.74999 1.5 4.45199 1.5H9.54748C10.25 1.5 10.856 1.9865 10.973 2.679Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.75 1.5L5.5 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 1.5L8.5 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              我的美食標籤
            </h4>
            <div class="d-flex flex-wrap gap-2">
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >日式料理</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >甜點魂</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >咖啡因中毒</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >手機先吃</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >討厭葡萄乾！</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >微波懶人廚神</label
              >
            </div>
          </div>

          <!-- other tags -->
          <div class="d-flex flex-column border-bottom border-primary border-opacity-10 pb-spac-l">
            <h4 class="d-flex fs-text-lg align-items-center gap-2 mb-spac-s">
              <span class="m-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.5C21 14.8978 21 15.5967 20.7716 16.1481C20.4672 16.8831 19.8831 17.4672 19.1481 17.7716C18.5967 18 17.8978 18 16.5 18C16.0114 18 15.7671 18 15.5405 18.0535C15.2383 18.1248 14.9569 18.2656 14.7185 18.4645C14.5397 18.6137 14.3931 18.8091 14.1 19.2L12.64 21.1467C12.4229 21.4362 12.3143 21.5809 12.1812 21.6327C12.0647 21.678 11.9353 21.678 11.8188 21.6327C11.6857 21.5809 11.5771 21.4362 11.36 21.1467L9.9 19.2C9.60685 18.8091 9.46028 18.6137 9.2815 18.4645C9.04312 18.2656 8.76169 18.1248 8.45951 18.0535C8.23287 18 7.98858 18 7.5 18C6.10218 18 5.40326 18 4.85195 17.7716C4.11687 17.4672 3.53284 16.8831 3.22836 16.1481C3 15.5967 3 14.8978 3 13.5V7.8Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9973 8.33059C11.1975 7.4216 9.8639 7.17708 8.86188 8.00945C7.85986 8.84182 7.71879 10.2335 8.50568 11.2179C8.97361 11.8033 10.1197 12.8531 10.9719 13.6079C11.3237 13.9195 11.4996 14.0753 11.7114 14.1385C11.8925 14.1926 12.102 14.1926 12.2832 14.1385C12.4949 14.0753 12.6708 13.9195 13.0226 13.6079C13.8748 12.8531 15.0209 11.8033 15.4888 11.2179C16.2757 10.2335 16.1519 8.83306 15.1326 8.00945C14.1134 7.18584 12.797 7.4216 11.9973 8.33059Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              我的其他標籤
            </h4>
            <div class="d-flex flex-wrap gap-2">
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >慢生活</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >極簡生活</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >下班只想躺</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >Uniqlo控</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >排行程強迫症</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >貓奴</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >鹹爆米花</label
              >
              <label
                class="rounded-pill border border-secondary-950 border-1 fw-medium fs-text-md lh-base text-primary"
                style="--bs-border-opacity: 0.2; padding: 6px 10px"
                >周杰倫</label
              >
            </div>
          </div>

          <!-- other Info -->
          <div class="d-flex flex-column border-bottom border-primary border-opacity-10 pb-spac-l">
            <h4 class="d-flex fs-text-lg align-items-center gap-2 mb-spac-s">
              <span class="m-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.5C21 14.8978 21 15.5967 20.7716 16.1481C20.4672 16.8831 19.8831 17.4672 19.1481 17.7716C18.5967 18 17.8978 18 16.5 18C16.0114 18 15.7671 18 15.5405 18.0535C15.2383 18.1248 14.9569 18.2656 14.7185 18.4645C14.5397 18.6137 14.3931 18.8091 14.1 19.2L12.64 21.1467C12.4229 21.4362 12.3143 21.5809 12.1812 21.6327C12.0647 21.678 11.9353 21.678 11.8188 21.6327C11.6857 21.5809 11.5771 21.4362 11.36 21.1467L9.9 19.2C9.60685 18.8091 9.46028 18.6137 9.2815 18.4645C9.04312 18.2656 8.76169 18.1248 8.45951 18.0535C8.23287 18 7.98858 18 7.5 18C6.10218 18 5.40326 18 4.85195 17.7716C4.11687 17.4672 3.53284 16.8831 3.22836 16.1481C3 15.5967 3 14.8978 3 13.5V7.8Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9973 8.33059C11.1975 7.4216 9.8639 7.17708 8.86188 8.00945C7.85986 8.84182 7.71879 10.2335 8.50568 11.2179C8.97361 11.8033 10.1197 12.8531 10.9719 13.6079C11.3237 13.9195 11.4996 14.0753 11.7114 14.1385C11.8925 14.1926 12.102 14.1926 12.2832 14.1385C12.4949 14.0753 12.6708 13.9195 13.0226 13.6079C13.8748 12.8531 15.0209 11.8033 15.4888 11.2179C16.2757 10.2335 16.1519 8.83306 15.1326 8.00945C14.1134 7.18584 12.797 7.4216 11.9973 8.33059Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              我的其他資訊
            </h4>

            <div class="d-flex flex-column gap-2 px-2">
              <div class="d-flex gap-2">
                <h5 class="fs-text-md lh-base m-0" style="width: 56px">職業</h5>
                <p class="fs-text-md text-secondary-400 fw-medium lh-base m-0">尚未新增</p>
              </div>

              <div class="d-flex gap-2">
                <h5 class="fs-text-md lh-base m-0" style="width: 56px">學校</h5>
                <p class="fs-text-md text-secondary-400 fw-medium lh-base m-0">尚未新增</p>
              </div>

              <div class="d-flex gap-2">
                <h5 class="fs-text-md lh-base m-0" style="width: 56px">MBTI</h5>
                <p class="fs-text-md text-secondary-400 fw-medium lh-base m-0">尚未新增</p>
              </div>

              <div class="d-flex gap-2">
                <h5 class="fs-text-md lh-base m-0" style="width: 56px">個性</h5>
                <p class="fs-text-md text-secondary-400 fw-medium lh-base m-0">尚未新增</p>
              </div>

              <div class="d-flex gap-2">
                <h5 class="fs-text-md lh-base m-0" style="width: 56px">寵物</h5>
                <p class="fs-text-md text-secondary-400 fw-medium lh-base m-0">尚未新增</p>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column">
            <h4 class="d-flex fs-text-lg align-items-center gap-2 mb-spac-s">
              <span class="m-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              我的照片牆
            </h4>
            <p class="text-secondary-400 fs-text-md m-0">尚未新增照片</p>
          </div>
        </div>
      </div>
      
      <div class="sticky-bottom">
        <MainNavBarOther />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
