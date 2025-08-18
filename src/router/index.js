import { createRouter, createWebHistory } from 'vue-router'
// 1.插入vue檔案
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import PairingResult from '../Views/PairingResult.vue'
import PairingDetail from '../Views/PairingDetail.vue'
import PairingWaiting from '../Views/PairingWaiting.vue'
import PairingSuccess from '../Views/PairingSuccess.vue'
import ChatRoom from '../Views/ChatRoom.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 2.設定路徑
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },{
      path: '/PairingResult',
      name: 'PairingResult',
      component: PairingResult,
    },{
      path: '/PairingDetail',
      name: 'PairingDetail',
      component: PairingDetail,
    },{
      path: '/PairingWaiting',
      name: 'PairingWaiting',
      component: PairingWaiting,
    },{
      path: '/PairingSuccess',
      name: 'PairingSuccess',
      component: PairingSuccess,
    },{
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom,
    }
  ],
})

export default router