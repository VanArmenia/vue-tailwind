<template>

  <div v-if="movie" class="bg-dark-amber text-amber-50 px-8 py-4">
    <div class="p-2 md:flex gap-10">
      <div class="md:w-1/3 relative w-full">
        <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
        <img :src="fullPath + movie.poster_path" alt="Movie Poster" class=""/>
        <div class="card absolute top-0 -right-10">
          <div class="">
            <svg>
              <circle cx="34" cy="34" r="30"></circle>
              <circle cx="34" cy="34" r="30" :style="{'stroke-dashoffset': percentForStyle + 'px'}"></circle>
            </svg>
            <div class="number">
              <h3>{{ Math.ceil(movie.vote_average * 10) }}<span style="font-size: 0.5rem
" class="align-super">%</span></h3>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-2/3 text-gray-300 md:ml-8 w-full">
        <h2 class="text-3xl my-4 md:my-0 md:mb-4 text-gray-200 font-anton">{{ movie.title }}</h2>
        <div class="flex flex-row pb-4">
          <p v-for="genre in movie.genres" :key="genre.id"
             class="pr-3 px-3 mr-2 bg-transparent border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none inline-flex transition-all duration-300">
            <router-link :to="{ name: 'Genres', params: { name: genre.name }}">
              {{genre.name}}
            </router-link>
          </p>
        </div>

        <p class="text-lg py-1" v-if="movie"><span class="italic">Release Year:</span> &nbsp;{{ movie.release_date.substring(0, 4)}}</p>
        <p class="text-lg" v-if="movie"><span class="italic">Country: </span><span v-for="country in  movie.production_countries" :key="country.iso_3166_1">&nbsp; {{ country.iso_3166_1}}</span></p>

        <p class="text-xl py-4">{{ movie.overview }}</p>

        <iframe class="mt-8 w-full h-60 md:w-3/4 xl:w-1/2 xl:h-72" v-for="item in offTrailer" :key="item.id"  :src="youtubePath + item.key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="" v-if="crew">
          <p class="text-amber-400 mt-4 ml-0 text-xl">Director: <span class="font-bold text-amber-100">{{crew.name}}</span></p>
          <div class="my-6 p-2 bg-lighter-amber">
            <img v-if="crew.profile_path" :src="fullPath + crew.profile_path" alt="Movie Poster" class="w-36 rounded-md"/>
          </div>
          <div class="my-2" v-if="cast">
            <p class="text-amber-400 m-2 ml-0 text-xl "> Stars</p>

            <div class="mb-10">
              <Slider :items = 'cast' :fullPath = 'fullPath'/>
            </div>
          </div>
          <div v-if="providersFiltered">
            <p class="text-amber-400 m-2 ml-0 text-xl py-2"> Stream</p>
            <div  class="flex flex-col mt-2 py-1 bg-lighter-amber">
              <div class="flex flex-wrap p-1" >
                <div v-for="provider in providersFiltered" :key="provider.provider_id" class="p-1 py-2">
                  <router-link :to="{ name: 'Stream', params: {id:provider.provider_id, provider: provider.provider_name }}" class="relative group block mr-4 flex-shrink-0">
                    <img :src="fullPath + provider.logo_path" alt="Movie Poster" class="w-12 border-amber-900 border-2 rounded-md"/>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="m-4 mb-12" v-if="simMovies">
      <p class="text-amber-400 my-2 text-xl"> Similar movies</p>
      <Slider :items = 'simMovies.results' :fullPath = 'fullPath'/>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>

</template>

<script>
import { useRoute } from 'vue-router'
import ct from  'countries-and-timezones'
// component imports

import Spinner from '../components/Spinner.vue'
import Slider from '../components/extras/Slider.vue'
import {computed, ref} from "vue";
export default {
  props: {
    env: Object,
  },
  components: { Spinner,Slider },

  setup(props) {

    const route = useRoute()
    const movie = ref( {} )
    const providers = ref( {} )
    const providersFiltered = ref( {} )
    const simMovies = ref( {} )
    const error = ref( '' )
    const crew = ref( {} )
    const cast = ref( {} )
    const offTrailer = ref( {} )
    const percent = computed(() => {
      return Math.ceil(movie.value.vote_average * 10)
    })
    const percentForStyle = computed(() => {
      return 184 - (184 * (percent.value))/ 100
    })
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
    console.log(zone)
    const countries = ct.getCountryForTimezone(zone);
    console.log(countries)



    const fullPath = "https://image.tmdb.org/t/p/w500"
    const youtubePath = "https://www.youtube.com/embed/"

    // fetching specific movie from Themoviedb
    const fetchMovie = () => {
      try {
         fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              movie.value = data;
            });

      }
      catch(err) {
        error.value = err.message
      }
    }
    fetchMovie()

    // fetching similar movies
    const similarMovies = () => {
      try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/similar?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              simMovies.value = data;
            });
      }
      catch(err) {
        error.value = err.message
      }
    }
    similarMovies()

    // fetching movie crew from Themoviedb
    try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {
            crew.value =  data.crew.filter(item => (item.known_for_department.includes('Directing')))[0];

            cast.value =  data.cast.filter(item => (item.profile_path !== null) );
          });

    }
    catch(err) {
      error.value = err.message
    }

      // fetching movie videos from Themoviedb
      try {
        fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              offTrailer.value = data.results.filter(item => (item.name === 'Official Trailer'))
            });
      }
      catch(err) {
        error.value = err.message
      }

      // providers
    try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/watch/providers?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {
            providers.value = data.results;
            providersFiltered.value =  providers.value.hasOwnProperty('CZ')? providers.value.CZ.flatrate : null
            console.log( providersFiltered.value)
          });
    }
    catch(err) {
      error.value = err.message
    }


    return { error, movie, fullPath, crew, cast, offTrailer, youtubePath, percent, percentForStyle, simMovies, providersFiltered }
  },
}
</script>

<style>
iframe {
  border: #c7a367 2px solid;
  border-radius: 8px;
}

</style>