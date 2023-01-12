<template>
  <section class="artists pt-2 pb-8 bg-dark-amber text-amber-50 px-12">
    <movie-list :movies = 'moviesUp' :error = 'error' :page = 'page'>
    <h1 class="text-white text-3xl uppercase font-light text-left m-6 ml-4">Coming <span class="font-bold">Soon</span></h1>
  </movie-list>
  </section>
</template>

<script>

import MovieList from "@/components/movie/MovieList.vue";
import getMovies from "@/composables/getMoviesFromApi";
import {ref} from "vue";

export default ({
  props: {
    env: Object,
  },
  components: {
    MovieList
  },
  setup(props) {
    const page = ref( 1 )
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${props.env.tmdb_api_key}`;
    const { movies: moviesUp, error, load } = getMovies()
    const specGenre = ref( {id:0, name:'All'} )
    load( url, page, specGenre.value)

    return {moviesUp, error, load, page}
  },
});
</script>

<style>

</style>