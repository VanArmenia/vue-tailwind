<template>
  <section class="artists pt-2 pb-8 bg-dark-amber text-amber-50 px-8">
    <div class="flex justify-between">
      <h1 class="text-white text-3xl uppercase font-light text-left m-6 ml-4">Coming <span class="font-bold">Soon</span></h1>
      <div class="m-4">
        <div class="flex pt-2 mx-2 h-12">
          <div @click="ComingSoon(pageCS --)" :class="pageCS === 1 ? 'noMouse' : ''" class="w-10 -scale-x-100 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer transition-all duration-300">
            <svg class="fill-amber-600 w-6 transition-all duration-500 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
          </div>
          <div @click="ComingSoon(pageCS ++)" class="w-10 border border-amber-500 rounded-md hover:border-amber-100 p-2 mx-1 cursor-pointer duration-500">
            <svg class="fill-amber-600 w-6 duration-300 hover:fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:grid-cols-4 md:grid-cols-6 grid-cols-1 grid gap-3 mb-10 px-4 overflow-hidden relative" v-if="moviesComSoon.length">
      <div  v-for="movie in moviesComSoon" :key="movie.id" class="">
        <router-link :to="'/movie/' + movie.id" class="relative group block mr-4 flex-shrink-0">
          <img :src="fullPath + movie.poster_path" alt="Movie Poster" class="poster"/>
          <div class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div class="w-full">
              <h3 class="text-sm mb-2">{{ movie.title }}</h3>
              <p class="year">{{ movie.release_date }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </section>
</template>

<script>


import {ref} from "vue";

export default ({
  name: 'Upcoming',
  props: {
    env: Object,
    fullPath: String
  },
  components: {

  },
  setup(props) {
    const moviesComSoon = ref([]);
    const pageCS = ref( 1 )

    const ComingSoon = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${props.env.tmdb_api_key}&language=en-US&page=${pageCS.value}`)
            .then(response => response.json())
            .then(data => {
              moviesComSoon.value = data.results;
            });
        console.log(moviesComSoon.value)
      }
    ComingSoon()
    return {ComingSoon, moviesComSoon, pageCS}
  },
});
</script>

<style>

</style>