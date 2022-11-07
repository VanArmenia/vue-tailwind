<template>

  <div v-if="movie" class="p-16 flex gap-10 bg-dark-amber text-amber-50">
    <div class="w-1/3">
      <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
      <img :src="fullPath + movie.poster_path" alt="Movie Poster" class="poster"/>
    </div>

    <div class="w-2/3 text-amber-100">
      <h2 class="text-3xl mb-4">{{ movie.title }}</h2>
      <div class="flex flex-row pb-4">
        <p v-for="genre in movie.genres" :key="genre.id"
           class="pr-3 px-3 m-1 bg-transparent border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none inline-flex transition-all duration-300"> {{genre.name}}
        </p>
      </div>

      <div class="card flex-row justify-start">
        <div class="percent">
          <svg>
            <circle cx="34" cy="34" r="30"></circle>
            <circle cx="34" cy="34" r="30" :style="{'stroke-dashoffset': percentForStyle + 'px'}"></circle>
          </svg>
          <div class="number">
            <h3>{{ Math.ceil(movie.vote_average * 10) }}<span>%</span></h3>
          </div>
        </div>
      </div>
      <p class="text-xl py-4">Release Year: &nbsp;{{ movie.release_date.substring(0, 4)}}</p>
      <p class="text-xl py-4">Country:  <span v-for="country in  movie.production_countries" :key="country.iso_3166_1">&nbsp; {{ country.iso_3166_1}}</span></p>

      <p class="text-xl">{{ movie.overview }}</p>

      <iframe class="mt-8" v-for="item in offTrailer" :key="item.id" width="560" height="315" :src="youtubePath + item.key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="flex gap-6">
        <div class="my-6">
          <p class="underline text-amber-400">Director:</p>
          <p> {{crew.name}}</p>
          <img :src="fullPath + crew.profile_path" alt="Movie Poster" class="w-28 rounded-md"/>
        </div>
        <div class="my-6">
          <p class="underline text-amber-400"> Stars:</p>
          <div class="grid-cols-5 grid gap-3 ">
            <div v-for="actor in cast" :key="actor.cast_id" >
              <p> {{actor.name}}</p>
              <img :src="fullPath + actor.profile_path" alt="Movie Poster" class="w-28 rounded-md"/>
            </div>
          </div>


        </div>
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
import {computed, ref} from "vue";
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
    const cast = ref( {} )
    const offTrailer = ref( {} )
    const percent = computed(() => {
      return Math.ceil(movie.value.vote_average * 10)
    })
    const percentForStyle = computed(() => {
      return 184 - (184 * (percent.value))/ 100
    })



    const fullPath = "https://image.tmdb.org/t/p/w500"
    const youtubePath = "https://www.youtube.com/embed/"


    // fetching specific movie from Themoviedb
    const fetchMovies = async () => {
      try {
        await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              movie.value = data;
              console.log(movie.value)
            });

      }
      catch(err) {
        error.value = err.message
      }
    }
    fetchMovies()

    // fetching movie crew from Themoviedb
    try {
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=${props.env.tmdb_api_key}&language=en-US`)
          .then(response => response.json())
          .then(data => {

            crew.value =  data.crew.filter(item => item.known_for_department.includes('Directing'))[0];

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
              offTrailer.value = data.results.filter(item => item.name.includes('Official Trailer'))
            });
      }
      catch(err) {
        error.value = err.message
      }
    return { error, movie, fullPath, crew, cast, offTrailer, youtubePath, percent, percentForStyle }
  },
}
</script>

<style>
iframe {
  border: #c7a367 2px solid;
  border-radius: 8px;
}

</style>