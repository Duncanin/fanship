import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreateProfile from '../views/CreateProfile/CreateProfile.vue'
import CreateProfile2 from '../views/CreateProfile/CreateProfile2.vue'
import CreateProfile3 from '../views/CreateProfile/CreateProfile3.vue'

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
  ],
})

export default router
