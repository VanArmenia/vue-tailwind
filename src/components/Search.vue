<template>
   <!-- Search form-->
    <form @submit.prevent="$emit('searchEvent', search, clickFromSearch)" class="mb-4 ml-1 w-full flex">
      <div class="flex mx-auto">
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 inline-flex items-center py-1 px-2 pr-1 text-sm font-medium text-center text-gray-900 bg-amber-600 border border-amber-600 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100" type="button">All genres <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

        <div class="relative w-full">
          <input v-model="search" onfocus="this.value=''" type="search" id="search-dropdown" class="w-32 p-2 text-sm text-gray-200 rounded-r-lg border-l-black border-l-2 border border-gray-900 bg-lighter-amber outline-none" placeholder="Search movies" required>
        </div>
      </div>
    </form>
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
