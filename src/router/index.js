import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import PairingIndex from '../views/PairingIndex.vue'
import PairingIcon from '../views/PairingIcon.vue'
import PairingFind from '../views/PairingFind.vue'
import PairingSuggestion from '../views/PairingSuggestion.vue'
import PairingGame from '../views/PairingGame.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
