import { createRouter, createWebHashHistory } from 'vue-router'
// 1.插入vue檔案
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PairingIndex from '../views/PairingIndex.vue'
import PairingIcon from '../views/PairingIcon.vue'
import PairingFind from '../views/PairingFind.vue'
import PairingSuggestion from '../views/PairingSuggestion.vue'
import PairingGame from '../views/PairingGame.vue'
import PairingResult from '../views/PairingResult.vue'
import PairingDetail from '../views/PairingDetail.vue'
import PairingWaiting from '../views/PairingWaiting.vue'
import PairingSuccess from '../views/PairingSuccess.vue'
import ChatRoom from '../views/ChatRoom.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/PairingResult',
      name: 'PairingResult',
      component: PairingResult,
    },
    {
      path: '/PairingDetail',
      name: 'PairingDetail',
      component: PairingDetail,
    },
    {
      path: '/PairingWaiting',
      name: 'PairingWaiting',
      component: PairingWaiting,
    },
    {
      path: '/PairingSuccess',
      name: 'PairingSuccess',
      component: PairingSuccess,
    },
    {
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom,
    },
    {
      path: '/pairing-index',
      name: 'pairingIndex',
      component: PairingIndex,
    },
    {
      path: '/pairing-icon',
      name: 'pairingIcon',
      component: PairingIcon,
    },
    {
      path: '/pairing-find',
      name: 'pairingFind',
      component: PairingFind,
    },
    {
      path: '/pairing-suggestion',
      name: 'pairingSuggestion',
      component: PairingSuggestion,
    },
    {
      path: '/pairing-game',
      name: 'PairingGame',
      component: PairingGame,
    },
  ],
})

export default router