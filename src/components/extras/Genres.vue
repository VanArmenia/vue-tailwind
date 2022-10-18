<template>
  <div class="">
    <div v-for="genre in genres" :key="genre.id" class="px-3 m-1 bg-transparent border border-amber-400 rounded-md hover:bg-amber-600 focus:outline-none inline-flex">
      <a href="#" class="text-amber-100 text-sm hover:bg-amber-600">{{ genre.name}}</a>
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

  },
});
</script>

<style>

</style>