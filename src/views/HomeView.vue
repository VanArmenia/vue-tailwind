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
                  <p v-if="searchQuery" class="text-white text-left italic ml-4">Search results for <span class="font-bold">{{searchQuery}}</span></p>
                  <p v-if="specGenreAssigned && specGenreAssigned.name !== 'All'" class="text-white text-left italic ml-4">results for genre <span class="font-bold">{{specGenreAssigned.name}}</span></p>
                </div>
              </template>
            </movie-list>
            <div v-else>
              <Spinner />
            </div>
          </div>

          <div class="w-1/6 mt-8">
            <Search @searchEvent="SearchMovies"></Search>
            <GenresBlock :genres="genres" @filterByGenre="filterByGenre"/>
          </div>
        </div>
      </section>
      <Upcoming :env = 'env' />

      <section class="pb-2 bg-dark-amber pt-0.5 text-amber-200">
        <div class="mx-auto px-4">
          <div class="flex flex-wrap mt-4">
            <div id="content" class="w-full">
              <div class="h-6 flex justify-between border-b-amber-100 border-b-2 mb-2">
                <h2 class="text-xs font-anton tracking-widest">LATEST TRAILERS</h2>
                <p class=""><a href="#">See all</a></p>
              </div>
              <div class="box w-full grid grid-cols-5 gap-4">
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Providers :env = 'env' />
          <div class="news flex flex-wrap mt-16 py-3 bg-lighter-amber">
            <div class="flex p-4 pt-1">
              <div class="w-3 h-3 shadow-lg rounded-full bg-amber-200 mr-2 mt-1">
              </div>
              <h3 class="text-sm font-anton tracking-widest text-amber-100">
                TOP NEWS
              </h3>
            </div>
            <div class="w-full mr-auto ml-auto grid-cols-3 grid text-amber-50 pt-2">
              <div class="grid grid-cols-5">
                <div class="px-4 col-span-2">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
                    <img alt="..."
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                         class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative py-2 px-2">
                      <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 w-full block"
                          style="height: 95px; top: -94px;"
                      >
                        <polygon
                            points="-30,95 583,95 583,65"
                            class="text-cyan-600 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                    </blockquote>
                  </div>
                </div>
                <div class="px-4 col-span-3">
                  <p class="text-lg font-light leading-relaxed">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-5">
                <div class="px-4 col-span-2">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
                    <img alt="..."
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                         class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative py-2 px-2">
                      <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 w-full block"
                          style="height: 95px; top: -94px;"
                      >
                        <polygon
                            points="-30,95 583,95 583,65"
                            class="text-cyan-600 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                    </blockquote>
                  </div>
                </div>
                <div class="px-4 col-span-3">
                  <p class="text-lg font-light leading-relaxed">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
import {ref} from 'vue';

import getMovies from '../composables/getMoviesFromApi'

// component imports
import Spinner from '@/components/Spinner.vue'
import Search from '@/components/Search.vue'
import GenresBlock from '@/components/extras/Genres.vue'
import Upcoming from '@/components/extras/Upcoming.vue'
import Providers from '@/components/extras/Providers.vue'
import MovieList from "@/components/movie/MovieList.vue";


export default {
  name: "landing-page",
  components: {
    Spinner, GenresBlock, Search, Upcoming, Providers, MovieList
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
    const genres = ref([]);

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
    }

    // fetching movie genres from Themoviedb
    fetch(` https://api.themoviedb.org/3/genre/movie/list?api_key=${props.env.tmdb_api_key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          data.genres.unshift({id:0, name:'All'});
          genres.value = data.genres;
          console.log(genres.value)
        });


    return { moviesGen, error, SearchMovies, genres, GenresBlock, filterByGenre, page, searchTriggered, MoviesNextPage, MoviesPrevPage, searchQuery, specGenreAssigned }
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