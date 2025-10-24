import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirebaseSigninView from '../components/FirebaseSigninView.vue'
import FirebaseRegisterView from '../components/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/FireLogin',
      name: '/FireLogin',
      component: FirebaseSigninView,
    },
    {
      path: '/FireRegister',
      name: '/FireRegister',
      component: FirebaseRegisterView,
    },
    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBookView,
    },
    {
      path: '/GetBookCount',
      name: 'GetBookCount',
      component: GetBookCountView,
    },
    {
      path: '/WeatherCheck',
      name: 'WeatherCheck',
      component: WeatherView,
    },
    {
      path: '/CountBookAPI',
      name: 'CountBookAPI',
      component: CountBookAPI,
    },
  ],
})

export default router
