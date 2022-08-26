<template>
  <NavbarComponent />

  <div v-if="movie" class="p-6 pt-28">

    <h2 class="text-amber-800 text-3xl">Details for Movie</h2>
    <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
    <h3 class="text-amber-500 text-xl">{{ movie.Name }}</h3>
    <p class="text-amber-800 text-xl">{{ movie.Rating }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getMovie from '../composables/getMovie'
import { useRoute } from 'vue-router'
// component imports
import NavbarComponent from "../components/Navbar.vue";
import Spinner from '../components/Spinner.vue'
export default {
  props: ['id'],
  components: { Spinner, NavbarComponent },
  setup() {
    const route = useRoute()
    // console.log(route)
    console.log(route.params)
    const { error, movie, load } = getMovie(route.params.id)
    load()
    return { error, movie }
  },
}
</script>

<style scoped>

</style>