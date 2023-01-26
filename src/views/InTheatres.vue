<template>
  <section class="pt-2 pb-8 bg-dark-amber text-amber-50 min-h-screen">

      <movie-list :movies = 'moviesInTheatres' :error = 'error' :page = 'page'>
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
        <h1 class="text-white text-3xl uppercase font-light text-left m-6 ml-4">Now In <span class="font-bold">Theatres</span></h1>
       </movie-list>

  </section>
</template>

<script>

import MovieList from "@/components/movie/MovieList.vue";
import getMovies from "../composables/getMoviesFromApi";
import {ref, watch} from "vue";


export default ({
  props: {
    env: Object,
  },
  components: {
    MovieList
  },
  setup(props) {
    const page = ref( 1 )
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${props.env.tmdb_api_key}&region=CZ`;
    const { movies: moviesInTheatres, error, load } = getMovies()
    const specGenre = ref( {id:0, name:'All'} )

    load( url, page, specGenre.value)


    // watch the page variable change and trigger load() function
    watch(page, () => {
      load( url, page, specGenre.value)
    });

    return { moviesInTheatres, error, load, page }
  },
});
</script>

<style>

</style>