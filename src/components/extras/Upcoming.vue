<template>
  <section class="artists pt-2 pb-8 bg-dark-amber text-amber-50 md:px-12 px-2">
    <h1 class="text-white md:text-3xl text-xl uppercase font-light text-left my-8 ml-4">Coming <span class="font-bold">Soon</span></h1>
    <Slider :items = 'moviesUp' :fullPath = 'fullPath'/>
  </section>
</template>

<script>

import getMovies from "@/composables/getMoviesFromApi";
import {ref} from "vue";

import Slider from '@/components/extras/Slider.vue'

export default ({
  props: {
    env: Object,
  },
  components: {
   Slider
  },
  setup(props) {
    const fullPath = "https://image.tmdb.org/t/p/w500"
    const page = ref( 1 )
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${props.env.tmdb_api_key}`;
    const { movies: moviesUp, error, load } = getMovies()
    const specGenre = ref( {id:0, name:'All'} )
    load( url, page, specGenre.value)

    return {moviesUp, error, load, page, fullPath}
  },
});
</script>

<style>

</style>