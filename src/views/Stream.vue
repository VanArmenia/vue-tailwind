<template>
  <section class="pt-2 pb-8 bg-dark-amber text-amber-50 min-h-screen">
    <Providers :env = 'env'>
    <slot name="title"> </slot>
    </Providers>
    <movie-list :movies = 'moviesProv' :error = 'error'>
      <template v-slot:results>
        <h1 class="text-white text-2xl uppercase font-light text-left m-4 ml-4">Streaming now by provider <span class="font-bold">{{ provName }}</span></h1>
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
    return { provName,  page, error, moviesProv }
  },
});
</script>

<style>

</style>