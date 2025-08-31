<template>
  <form class="d-flex flex-column gap-spac-s">
    <!-- text input -->
    <div class="position-relative">
      <label for="typeText" class="d-none"></label>
      <input type="text" class="form-control" id="typeText" placeholder="說說你的食物派系！" />
      <button
        type="submit"
        class="position-absolute top-0 end-0 me-spac-xs mt-spac-xs p-0 border-0 btn-submit"
      >
        <svg
          viewBox="2.59961 2 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          class="w-100 h-auto block"
          width="32"
          height="32"
        >
          <path
            d="M12.5996 22C14.5774 22 16.5108 21.4135 18.1553 20.3147C19.7998 19.2159 21.0815 17.6541 21.8384 15.8268C22.5953 13.9996 22.7933 11.9889 22.4075 10.0491C22.0216 8.10929 21.0692 6.32746 19.6707 4.92894C18.2722 3.53041 16.4903 2.578 14.5505 2.19215C12.6107 1.8063 10.6 2.00433 8.77277 2.76121C6.94551 3.51809 5.38373 4.79981 4.28491 6.4443C3.1861 8.08879 2.59961 10.0222 2.59961 12C2.59961 14.6522 3.65318 17.1957 5.52854 19.0711C6.45713 19.9997 7.55952 20.7363 8.77277 21.2388C9.98603 21.7413 11.2864 22 12.5996 22ZM8.90961 10.14L11.9096 7.28C11.953 7.23768 12.0039 7.20377 12.0596 7.18C12.1067 7.13754 12.1608 7.10369 12.2196 7.08C12.3393 7.0271 12.4687 6.99977 12.5996 6.99977C12.7305 6.99977 12.8599 7.0271 12.9796 7.08C13.1024 7.1276 13.2145 7.19896 13.3096 7.29L16.3096 10.29C16.4979 10.4783 16.6037 10.7337 16.6037 11C16.6037 11.2663 16.4979 11.5217 16.3096 11.71C16.1213 11.8983 15.8659 12.0041 15.5996 12.0041C15.3333 12.0041 15.0779 11.8983 14.8896 11.71L13.5996 10.41V16C13.5996 16.2652 13.4943 16.5196 13.3067 16.7071C13.1192 16.8946 12.8648 17 12.5996 17C12.3344 17 12.08 16.8946 11.8925 16.7071C11.705 16.5196 11.5996 16.2652 11.5996 16V10.34L10.2896 11.59C10.0973 11.773 9.84022 11.8721 9.57486 11.8656C9.3095 11.859 9.05761 11.7473 8.87461 11.555C8.69161 11.3627 8.59249 11.1056 8.59905 10.8403C8.60562 10.5749 8.71733 10.323 8.90961 10.14Z"
            fill="currentColor"
          />
        </svg>
        <!-- <span class="text-primary w-100 h-100">
        </span> -->
      </button>
    </div>

    <!-- quit text reply -->
    <div class="btn-reply-group fs-text-md">
      <button
        v-for="(c, i) in textReplay"
        :key="i"
        type="button"
        class="btn-reply"
        @click="pick(c)"
      >
        <span class="text-emj">{{ c.emoji }}</span>
        <span class="fw-medium text-nowrap">{{ c.text }}</span>
      </button>
      <button
        type="button"
        class="reload-quickReply"
        @click="shuffle()"
        aria-label="shuffle quick replies"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentcolor"
        >
          <path
            d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"
          />
        </svg>
      </button>
    </div>

    <!-- emojis -->
    <div class="emo-group">
      <button
        v-for="(e, i) in emojis"
        :key="'e-' + i"
        type="button"
        class="d-block"
        @click="onEmoji(e)"
      >
        {{ e }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const textReplay = ref([
  { emoji: '🙌', text: ' 我們簡直天生一對' },
  { emoji: '🤝', text: ' 很有默契喔' },
  { emoji: '🥲', text: ' 蛤' },
  { emoji: '🗯️', text: ' 太離譜了吧' },
  { emoji: '🤢', text: ' 我要報警了' },
])

const emojis = ref(['🔥', '😍', '👀', '😂', '🥲', '🥵'])

function pick(c) {
  console.log('pick:', c)
}

function onEmoji(e) {
  console.log('emoji:', e)
}
</script>
