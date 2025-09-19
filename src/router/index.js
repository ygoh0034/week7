import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirebaseSigninView from '../components/FirebaseSigninView.vue'
import FirebaseRegisterView from '../components/FirebaseRegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
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
  ],
})

export default router
