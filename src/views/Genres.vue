<template>
    <main>
      <section class="w-full h-full bg-cover bg-hero-pattern">
        <span class="w-full h-full absolute opacity-30 bg-black"></span>
        <div class="pb-2 pt-0.5 text-amber-200 flex px-8">
          <div class="w-5/6 mr-4">
            <div v-if="error">{{ error }}</div>
            <div class="my-6">
              <div class="w-full px-4 text-center flex justify-between">
                <div class="w-full px-4 text-center flex justify-between">
                  <h1 class="text-white text-3xl uppercase font-light text-left">
                    <span class="font-bold"> arthouse </span> movies hub
                  </h1>
                  <div class="flex pt-2 mx-2 h-12">
                    <div @click="MoviesPrevPage" :class="page === 1 ? 'noMouse' : ''" class="w-10 -scale-x-100 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer transition-all duration-300">
                      <svg class="fill-amber-600 w-6 transition-all duration-500 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                    </div>
                    <div @click="MoviesNextPage" class="w-10 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer duration-500">
                      <svg class="fill-amber-600 w-6 duration-300 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <movie-list v-if="moviesGen.length" :movies = 'moviesGen' :error = 'error'>
              <template v-slot:results>
                <div class="h-8 text-amber-200">
                  <p v-if="specGenreAssigned && specGenreAssigned.name !== 'All'" class="text-white text-left italic ml-4">results for genre <span class="font-bold">{{specGenreAssigned.name}}</span></p>
                </div>
              </template>
            </movie-list>
            <div v-else>
              <Spinner />
            </div>
          </div>
        </div>
      </section>
    </main>
</template>
<script>
import {ref} from 'vue';

import getMovies from '../composables/getMoviesFromApi'

// component imports
import Spinner from '@/components/Spinner.vue'
import MovieList from "@/components/movie/MovieList.vue";
import {useRoute} from "vue-router/dist/vue-router";


export default {
  name: "landing-page",
  components: {
    Spinner, MovieList
  },
  props: {
    env: Object,
  },
  setup(props) {
    const route = useRoute()

    const page = ref(1)
    const urlGen = 'https://api.themoviedb.org/3/discover/movie';
    const {movies: moviesGen, error, load} = getMovies()
    const specGenre = ref({})



      // fetching specific genre having the name
      fetch(` https://api.themoviedb.org/3/genre/movie/list?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {
            specGenre.value = data.genres.filter(item => (item.name.includes(route.params.name)))[0];
            load( urlGen, props.env, page, specGenre.value)
            console.log(specGenre.value.id)
          });



    const MoviesNextPage = () => {
      page.value ++
    }

    const MoviesPrevPage = () => {
      page.value --
    }

    // filtering movies by specific genre
    const filterByGenre = (specGenre , clickFromGenre) =>  {

      if (clickFromGenre === 1) {
        page.value = 1
      }
      specGenreAssigned.value = specGenre
      load( urlGen, props.env, page, specGenre)
    }

    return { moviesGen, error, filterByGenre, page,  MoviesNextPage, MoviesPrevPage, }
  },
}
</script>
<style>
 .noMouse {
   pointer-events: none;
 }
 .poster, .posterHover {
   animation: fadein 1s;
 }

 @keyframes fadein {
   0% {
     opacity: .1;
   }
   100% {
     opacity: 1;
   }
 }
</style>