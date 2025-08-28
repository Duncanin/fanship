import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreateProfile from '../views/CreateProfile/CreateProfile.vue'
import CreateProfile2 from '../views/CreateProfile/CreateProfile2.vue'
import CreateProfile3 from '../views/CreateProfile/CreateProfile3.vue'
import CreateProfile4 from '../views/CreateProfile/CreateProfile4.vue'
import CreateProfile5 from '../views/CreateProfile/CreateProfile5.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
  ],
})

export default router
