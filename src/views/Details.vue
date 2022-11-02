<template>

  <div v-if="movie" class="p-16 flex gap-10 bg-dark-amber text-amber-50">
    <div class="w-1/3">
      <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
      <img :src="fullPath + movie.poster_path" alt="Movie Poster" class="poster"/>
      <p class="text-xl">Rating {{ movie.vote_average }}</p>
      <p class="text-xl">Voted by {{ movie.vote_count }} people</p>
    </div>

    <div class="w-2/3 text-amber-100">
      <h2 class="text-3xl mb-4">{{ movie.title }}</h2>
      <div class="flex flex-row pb-4">
        <p v-for="genre in movie.genres" :key="genre.id"
           class="pr-3 px-3 m-1 bg-transparent border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none inline-flex transition-all duration-300"> {{genre.name}}
        </p>
      </div>

      <p class="text-xl py-4">Release Date: {{ movie.release_date }}</p>
      <p class="text-xl">{{ movie.overview }}</p>

      <div class="my-6">
        <p class="underline text-amber-400">Director:</p>
        <p v-for="crew in crew.crew" :key="crew.id"> {{crew.name}}</p>
      </div>
      <div class="my-6">
        <p class="underline text-amber-400"> Stars:</p>
        <p v-for="cast in crew.cast" :key="cast.cast_id"> {{cast.name}}</p>
      </div>


    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
// component imports

import Spinner from '../components/Spinner.vue'
import {ref} from "vue";
export default {
  props: {
    env: Object,
  },
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    // console.log(route)
    console.log(route.params)
    const movie = ref( {} )
    const error = ref( '' )
    const crew = ref( {} )

    const fullPath = "https://image.tmdb.org/t/p/w500"


    // fetching specific movie from Themoviedb
    try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {
            movie.value = data;
            console.log( data)
          });

    }
    catch(err) {
      error.value = err.message
    }

    // fetching movie crew from Themoviedb
    try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {
            crew.value = data;
            console.log( data)
          });

    }
    catch(err) {
      error.value = err.message
    }
    return { error, movie, fullPath, crew }
  },
}
</script>

<style scoped>

</style>