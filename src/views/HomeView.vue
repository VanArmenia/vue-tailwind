<template>
    <main>
      <section class="w-full h-full bg-cover bg-hero-pattern">
        <div class="w-full md:w-1/6 absolute right-0 md:-top-4 z-10 flex">
          <Search  @click="showGenres = !showGenres" @searchEvent="SearchMovies"></Search>
          <transition
              enter-active-class="transform transition duration-500 ease-custom"
              enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
              enter-to-class="translate-y-0 scale-y-100 opacity-100"
              leave-active-class="transform transition duration-500 ease-custom"
              leave-from-class="translate-y-0 scale-y-100 opacity-100"
              leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
          >
          <GenresBlock v-if="showGenres" :genres="genres" @filterByGenre="filterByGenre"/>
          </transition>
        </div>
        <span class="w-full h-full absolute opacity-30 bg-black"></span>
        <div class="pb-2 pt-0.5 text-amber-200 flex md:px-8 pt-6">
          <div class="w-full mr-4">
            <div v-if="error">{{ error }}</div>
            <div class="mt-6">
              <div class="w-full px-4 text-center flex justify-between">
                <div class="w-full px-4 text-center flex justify-between">
                  <h1 class="text-white md:text-3xl text-xl uppercase font-light text-left">
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
                  <p v-if="searchQuery" class="text-white text-left italic ml-4">Search results for <span class="font-bold">{{searchQuery}}</span></p>
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
      <Upcoming :env = 'env' />

      <section class="pb-2 bg-dark-amber pt-0.5 text-amber-200">
        <div class="mx-auto px-4">
          <Providers :env = 'env' :show = 'show' :opt_class = 'opt_class'>
           <template #title>
              <h2 class="text-white text-xl md:text-2xl uppercase font-light text-left m-6 ml-0 mt-2"><span class="font-bold">Explore </span>what’s streaming</h2>
            </template>
          </Providers>

          <News />

        </div>
      </section>

      <section class="artists pt-2 pb-48 bg-dark-amber text-amber-50">
        <div class="artists mx-auto px-4">
          <div class="flex flex-wrap mt-16 p-3 bg-lighter-amber">
            <div class="flex pt-1 ">
              <div class="w-3 h-3 shadow-lg rounded-full bg-amber-200 mr-2 mt-1">
              </div>
              <h3 class="text-sm font-anton tracking-widest text-amber-100">
                TOP ARTISTS
              </h3>
            </div>
            <div class="grid-cols-6 grid pt-6">
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
</template>
<script>
import {onMounted, ref} from 'vue';

import getMovies from '../composables/getMoviesFromApi'

// component imports
import Spinner from '@/components/Spinner.vue'
import News from '@/components/News.vue'
import Search from '@/components/Search.vue'
import GenresBlock from '@/components/extras/Genres.vue'
import Upcoming from '@/components/extras/Upcoming.vue'
import Providers from '@/components/extras/Providers.vue'
import MovieList from "@/components/movie/MovieList.vue";


export default {
  name: "landing-page",
  components: {
    Spinner, GenresBlock, Search, Upcoming, Providers, MovieList, News
  },
  props: {
    env: Object,
  },
  setup(props) {
    const page = ref( 1 )
    const urlGen = `https://api.themoviedb.org/3/discover/movie?api_key=${props.env.tmdb_api_key}`;
    const { movies: moviesGen, error, load } = getMovies()
    const specGenre = ref( {id:0, name:'All'} )
    const specGenreAssigned = ref({id:0, name:'All'});
    const searchQuery = ref("");
    const searchTriggered = ref(false);
    const opt_class = ref(false);
    const genres = ref([]);
    const show = ref(true);
    const showGenres = ref(false);

    load( urlGen, page, specGenre.value)
    const MoviesNextPage = () => {
      page.value ++
      if (searchTriggered.value) {
        SearchMovies(searchQuery.value)
      } else {
        filterByGenre(specGenreAssigned.value)
      }
    }

    const MoviesPrevPage = () => {
      page.value --
      if (searchTriggered.value) {
        SearchMovies(searchQuery.value)
      } else {
        filterByGenre(specGenreAssigned.value)
      }
    }

    // fetching movies by search
    const SearchMovies = (search, clickFromSearch) => {
      specGenreAssigned.value = ''
      if (clickFromSearch) {
        page.value = 1
      }
      searchTriggered.value = true
      searchQuery.value = search
      const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${props.env.tmdb_api_key}`;
      if (search !== "") {
        load( urlSearch, page, specGenre.value, search )
      }
    }

    // filtering movies by specific genre
    const filterByGenre = (specGenre , clickFromGenre) =>  {
      searchQuery.value = ''
      searchTriggered.value = false
      if (clickFromGenre === 1) {
        page.value = 1
      }
      specGenreAssigned.value = specGenre
      load( urlGen, page, specGenre)
      showGenres.value = false
    }

    // fetching movie genres from Themoviedb
    fetch(` https://api.themoviedb.org/3/genre/movie/list?api_key=${props.env.tmdb_api_key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          data.genres.unshift({id:0, name:'All'});
          genres.value = data.genres;
          console.log(genres.value)
        });


    return { moviesGen, error, SearchMovies, genres, GenresBlock, filterByGenre, page, searchTriggered, MoviesNextPage, MoviesPrevPage, searchQuery, specGenreAssigned, show, opt_class, showGenres}
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