import { createRouter, createWebHashHistory } from 'vue-router'
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
import ChatMessages from '../views/ChatMessages.vue'
import CreateProfile from '../views/CreateProfile/CreateProfile.vue'
import CreateProfile2 from '../views/CreateProfile/CreateProfile2.vue'
import CreateProfile3 from '../views/CreateProfile/CreateProfile3.vue'
import CreateProfile4 from '../views/CreateProfile/CreateProfile4.vue'
import CreateProfile5 from '../views/CreateProfile/CreateProfile5.vue'
import myProfile from '../views/CreateProfile/myProfile.vue'
import editProfile from '../views/CreateProfile/editProfile.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
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
    },  {
      path: '/ChatMessages',
      name: 'ChatMessages',
      component: ChatMessages,
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
    {
      path: '/createProfile',
      name: 'CreateProfile',
      component: CreateProfile,
    },
    {
      path: '/createProfile-2',
      name: 'CreateProfile2',
      component: CreateProfile2,
    },
    {
      path: '/createProfile-3',
      name: 'CreateProfile3',
      component: CreateProfile3,
    },
    {
      path: '/createProfile-4',
      name: 'CreateProfile4',
      component: CreateProfile4,
    },
    {
      path: '/createProfile-5',
      name: 'CreateProfile5',
      component: CreateProfile5,
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: myProfile,
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: editProfile,
    },
  ],
})

export default router
