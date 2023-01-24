<template>
  <section class="pt-2 pb-8 bg-dark-amber text-amber-50 min-h-screen">

    <!-- Mobile menu button -->
      <div class="flex justify-end bg-lighter-amber p-2 md:pr-6">
          <svg class=" w-8 cursor-pointer" @click="show = !show" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 61.94 63.76"><defs><radialGradient id="a" cx="31.29" cy="-21.02" r="63.62" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fc0000"/><stop offset=".62" stop-color="#d40000"/><stop offset="1" stop-color="#c10000"/></radialGradient><linearGradient id="b" x1="30.97" x2="30.97" y1="49.36" y2="12.57" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fad3e4"/><stop offset=".16" stop-color="#fce5ef"/><stop offset=".37" stop-color="#fef4f8"/><stop offset=".62" stop-color="#fffcfd"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><rect width="61.94" height="61.94" fill="url(#a)" rx="16.96"/><path fill="url(#b)" d="M34.8,12.63h5.53V47.18l-4.55.48c-.37.05-.76.06-1.13.13s-.69-.09-.85-.55q-2.09-6-4.21-12c-.77-2.2-1.55-4.4-2.47-6.6v.58c0,6.2,0,12.4,0,18.6,0,.62-.09.9-.81.95-1.35.1-2.69.34-4,.52-.21,0-.43,0-.67,0V12.63c.23,0,.44,0,.65,0,1.48,0,3,0,4.44,0a.77.77,0,0,1,.89.62Q31,23,34.48,32.78a1.18,1.18,0,0,0,.32.51Z"/></svg>
      </div>

    <Providers :env = 'env' :show = 'show' :opt_class = 'opt_class'>
    <slot name="title"> </slot>

    </Providers>
    <movie-list :movies = 'moviesProv' :error = 'error'>
      <template v-slot:results>
        <h1 class="text-white text-xl md:text-2xl uppercase font-light text-left m-4 ml-4">Streaming now by provider <span class="font-bold">{{ provName }}</span></h1>
      </template>
      <template v-slot:pager>
        <div class="m-4">
          <div class="flex pt-2 mx-2 h-12">
            <div @click="page --" :class="page === 1 ? 'noMouse' : ''" class="w-10 -scale-x-100 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer transition-all duration-300">
              <svg class="fill-amber-600 w-6 transition-all duration-500 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
            </div>
            <div @click="page ++" class="w-10 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer duration-500">
              <svg class="fill-amber-600 w-6 duration-300 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
            </div>
          </div>
        </div>
      </template>
    </movie-list>
  </section>

</template>

<script>


import {useRoute} from "vue-router/dist/vue-router";

import getMovies from "@/composables/getMoviesFromApi";
import MovieList from "@/components/movie/MovieList.vue";
import {onBeforeMount, onUpdated, ref, watch} from "vue";

import Providers from '@/components/extras/Providers.vue'

export default ({
  components: {
     MovieList, Providers
  },
  props: {
    env: Object,
  },
  setup(props) {
    const route = useRoute()
    const provName = route.params.provider
    const specGenre = ref( {id:0, name:'All'} )
    const show = ref(false);
    const opt_class = ref(true);

    // url for movies by specific streaming provider
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${props.env.tmdb_api_key}&with_watch_providers=${route.params.id}`;

    const { movies: moviesProv, error, load } = getMovies()

    const page = ref( 1 )

    // fetching movies by specific streaming provider
    load( url, page, specGenre.value)


    // watch the page variable change and trigger load() function
    watch(page, () => {
      load( url, page, specGenre.value)
    });

    watch(provName, () => {
      load( url, page, specGenre.value)
    });

    console.log(moviesProv.value)
    return { provName,  page, error, moviesProv, show, opt_class }
  },
});
</script>

<style>

</style>