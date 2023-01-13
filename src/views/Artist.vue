<template>

  <div v-if="person" class="p-16 flex gap-10 bg-dark-amber text-amber-50">
    <div class="w-1/3 relative">
      <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
      <img :src="fullPath + person.profile_path" alt="Movie Poster" class="poster"/>
    </div>

    <div class="w-2/3 text-gray-300 ml-8">
      <h2 class="text-3xl mb-4 text-gray-200 font-anton">{{ person.name }}</h2>
      <p v-if="currentDate" class="text-lg py-1"><span class="italic">Age:</span> &nbsp;{{ageCalc}}</p>
      <p v-if="person.place_of_birth" class="text-lg py-1"><span class="italic">Place of birth:</span> &nbsp;{{ person.place_of_birth}}</p>
      <p class="text-xl py-4">{{ person.biography }}</p>

      <h3 class="text-xl mb-4 text-gray-200">Movies starred by <span class="font-anton">{{ person.name }}</span></h3>
      <Slider :items = 'credits.cast' :fullPath = 'fullPath'/>
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
import Slider from '../components/extras/Slider.vue'
import {computed, ref} from "vue";
export default {
  props: {
    env: Object,
  },
  components: { Spinner,Slider },

  setup(props) {

    const route = useRoute()
    const person = ref( {} )
    const credits = ref( {} )
    const error = ref( '' )
    const ageCalc = ref()
    const crew = ref( {} )
    const cast = ref( {} )
    const offTrailer = ref( {} )


    const currentDate =  computed( () => {
      const current = new Date();
      const year = current.getFullYear()
      if (person.value.birthday) {
        var birthyear = parseInt(person.value.birthday.substring(0, 4))
        var birthmonth = parseInt(person.value.birthday.substring(5, 7))
        var birthday = parseInt(person.value.birthday.substring(8, 10))
      }


      let age = year - birthyear
      if (birthmonth > (current.getMonth()+1)) {
        age++
      } else if (birthmonth === (current.getMonth()+1)) {
        if (birthday <= current.getDate()) {
          age++
        }
      }
      return age;
    })

    console.log(route)

    const fullPath = "https://image.tmdb.org/t/p/w500"
    const youtubePath = "https://www.youtube.com/embed/"

    // fetching specific artist or person from Themoviedb
    const fetchMovie = async () => {
      try {
        await fetch(`https://api.themoviedb.org/3/person/${route.params.id}?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              person.value = data;
              console.log( person.value)
              ageCalc.value = currentDate;
            });

      }
      catch(err) {
        error.value = err.message
      }
    }
    fetchMovie()

    // fetching specific artist or person from Themoviedb
    const movieCredits = () => {
      try {
         fetch(`https://api.themoviedb.org/3/person/${route.params.id}/movie_credits?api_key=${props.env.tmdb_api_key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
              credits.value = data;
              console.log(credits.value)
            });

      }
      catch(err) {
        error.value = err.message
      }
    }
    movieCredits()

    return { error, person, fullPath, crew, cast, offTrailer, youtubePath, credits, ageCalc, currentDate }
  },
}
</script>

<style>
iframe {
  border: #c7a367 2px solid;
  border-radius: 8px;
}

</style>