<template>
  <div class="post-list">
    <div v-for="movie in movies" :key="movie.id">
      <SingleMovie :movie="movie" />
    </div>
  </div>
</template>

<script>
// component imports
import SingleMovie from './SingleMovie.vue'
export default {
  props: ['movies'],
  components: { SingleMovie },
  setup() {
  }
}
</script>