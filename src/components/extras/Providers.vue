<template>
  <div class="flex flex-col mt-2 px-3 bg-lighter-amber">
    <div class="flex p-1 pt-1">
      <slot name="title"></slot>
    </div>

    <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-500 ease-custom"
        leave-from-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
    <div :class="{ 'left-2': opt_class, 'right-2': opt_class, absolute: opt_class }" class="p-3 mb-4 bg-amber-200 rounded-lg shadow-lg overflow-hidden z-30 flex flex-wrap" v-show="show">
      <div v-for="provider in providers" :key="provider.provider_id" class="p-1 py-2 providers">
        <router-link :to="{ name: 'Stream', params: {provider: provider.provider_name, id:provider.provider_id }}" class="relative group block mr-4 flex-shrink-0">
          <img :src="fullPath + provider.logo_path" alt="Movie Poster" class="w-10 md:w-12 border-amber-900 border-2 rounded-md"/>
        </router-link>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>


import {ref} from "vue";

export default ({
  props: {
    env: Object,
    show: Boolean,
    opt_class: Boolean,
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
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}

</style>