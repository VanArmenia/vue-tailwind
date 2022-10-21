<template>
  <nav class="md:p-3 py-2 px-3 z-10 flex justify-between">
      <div class="md:flex block items-center justify-start w-1/2">
        <h1 class="logo w-64 h-16 text-2xl font-fascinate">
          <RouterLink to="/"><span class="text-cyan-600">Art</span><span class="text-cyan-600">House</span> <span class="text-amber-600">Movies</span></RouterLink>
        </h1>
      </div>

      <ul data-menu class="font-anton h-8 text-amber-600 tracking-wider md:flex hidden items-center text-white text-xs shrink-0 pt-1.5">
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Home</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Stream/Buy</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Coming Soon</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/" >In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/" >About Us</RouterLink>
        </li>
      </ul>

     <!-- Search form-->
      <form @submit.prevent="$emit('searchEvent', search, clickFromSearch)" class="ml-4">
        <div class="flex mx-auto">
          <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
          <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-1 px-2 pr-1 text-sm font-medium text-center text-gray-900 bg-amber-600 border border-amber-600 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100" type="button">All genres <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

          <div class="relative w-full">
            <input v-model="search" onfocus="this.value=''" type="search" id="search-dropdown" class="w-32 p-2 text-sm text-gray-200 rounded-r-lg border-l-black border-l-2 border border-gray-900 bg-lighter-amber outline-none" placeholder="Search movies" required>
          </div>
        </div>
      </form>
  </nav>
</template>
<script>
import {ref} from "vue";

export default {
  setup() {
    const search = ref("");
    const clickFromSearch = ref(1);

    return { search, clickFromSearch }
  }
}
</script>
