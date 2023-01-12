<template>
  <div class="flex flex-col mt-2 py-3 bg-lighter-amber">
    <div class="flex p-1 pt-1">
      <slot name="title"></slot>
    </div>
    <div class="flex flex-wrap p-3" >
      <div v-for="provider in providers" :key="provider.provider_id" class="p-1 py-2">
        <router-link :to="{ name: 'Stream', params: {provider: provider.provider_name, id:provider.provider_id }}" class="relative group block mr-4 flex-shrink-0">
          <img :src="fullPath + provider.logo_path" alt="Movie Poster" class="w-16 border-amber-900 border-2 rounded-md"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>


import {ref} from "vue";

export default ({
  props: {
    env: Object,
  },
  components: {

  },
  setup(props) {
    // const page = ref( 1 )
    const fullPath = "https://image.tmdb.org/t/p/w500"
    const providers = ref( {} )

    // fetching streaming providers from Themoviedb
    fetch(` https://api.themoviedb.org/3/watch/providers/movie?api_key=${props.env.tmdb_api_key}&language=en-US&watch_region=CZ`)
        .then(response => response.json())
        .then(data => {
          providers.value = data.results;
        });


    return {providers, fullPath}
  },
});
</script>

<style>

</style>