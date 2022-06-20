import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'news',
    //   component: HomeView
    // },
    // {
    //   path: '/',
    //   name: 'in theaters',
    //   component: HomeView
    // },
    {
      path: "/landing",
      name: 'Landing',
      component: Landing,
    },
  ]
})

export default router
