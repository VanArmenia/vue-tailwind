import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Artist from '../views/Artist.vue'
import Details from '../views/Details.vue'
import Genres from '../views/Genres.vue'
import About from '../views/About.vue'
import InTheatres from '../views/InTheatres.vue'
import Stream from '../views/Stream.vue'


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Movie Finder - Home',
        description: 'Website to find the movies in theatres next to you'
      }
    },
    {
      path: '/movie/:id/:title',
      name: 'Details',
      component: Details,
      props: true,
      meta: {
        title: 'Movie Finder - Movie'
      }
    },
    {
      path: '/genres/:name',
      name: 'Genres',
      component: Genres,
      props: true,
      meta: {
        title: 'Genres'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/theatres',
      name: 'In Theatres',
      component: InTheatres,
    },
    {
      path: '/stream/:id/:provider',
      name: 'Stream',
      component: Stream,
      props: true,
    },
    {
      path: '/artist/:id/:name',
      name: 'Artist',
      component: Artist,
      props: true,
      meta: {
        title: 'Movie Finder - Movie'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  let docTitle = `${to.meta.title}`
  if (to.params.title){
    docTitle += `- ${to.params.title}`
  }
  if (to.params.name){
    docTitle += `- ${to.params.name}`
  }
  document.title = docTitle;
  next();
})

export default router
