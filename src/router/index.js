import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import Genres from '../views/Genres.vue'
import About from '../views/About.vue'
import InTheatres from '../views/InTheatres.vue'
import Stream from '../views/Stream.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: '/genres/:name',
      name: 'Genres',
      component: Genres,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/theatres',
      name: 'In Theatres',
      component: InTheatres
    },
    {
      path: '/stream',
      name: 'Stream',
      component: Stream
    }
  ]
})

export default router
