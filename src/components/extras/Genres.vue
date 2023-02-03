<template>
  <div class="rounded-lg bg-neutral-900 bg-opacity-90 absolute top-12 z-0 left-1/2 transform -translate-x-1/2 p-4 flex flex-wrap justify-between w-11/12">
    <div v-for="specGenre in genres" :key="specGenre.id" class="px-3 m-1 border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none">
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