<template>
  <div class="rounded-md bg-neutral-900 bg-opacity-60 absolute top-12 z-0">
    <div v-for="specGenre in genres" :key="specGenre.id" class="px-3 m-1 bg-transparent border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none inline-flex transition-all duration-300">
      <a @click.prevent="$emit('filterByGenre', specGenre, clickFromGenre)" href="#" class="transition-all duration-300 text-amber-100 text-sm hover:bg-amber-600">{{ specGenre.name}}</a>
    </div>
  </div>
</template>

<script>


export default ({
  name: 'Genres-component',
  props: {
    genres: Array,
  },
  components: {

  },
  setup() {
    let clickFromGenre = 1

    return { clickFromGenre }
  },
});
</script>

<style>

</style>