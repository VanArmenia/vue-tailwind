<template>
  <nav class="md:p-3 py-1 px-3 z-10 flex justify-between bg-lighter-amber z-30 md:z-10">
      <div class="md:flex block items-center justify-start w-1/2">
        <h1 class="logo w-64 h-12 text-2xl font-fascinate">
          <RouterLink to="/"><span class="text-cyan-600">Art</span><span class="text-cyan-600">House</span> <span class="text-amber-600">Movies</span></RouterLink>
        </h1>
      </div>

      <ul data-menu class="h-8 text-amber-600 tracking-wider md:flex hidden items-center text-gray-100 text-sm shrink-0 pt-1.5">
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Home</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink  :to="{
                              name: 'Stream',
                              params: {
                              id: '8',
                              provider: 'Netflix'
                               }
                             }">Stream/Buy</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/theatres" >In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/about" >About Us</RouterLink>
        </li>
      </ul>

    <!-- Mobile menu button -->
    <div class="md:hidden flex items-center" >
      <button class="outline-none mobile-menu-button" @click="mobile = !mobile">
        <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobile" class="bg-neutral-900 absolute top-12 z-50">
      <ul data-menu class="text-amber-600 tracking-wider items-center text-gray-100 text-sm shrink-0 pt-1.5">
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Home</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/stream" >Stream/Buy</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/theatres" >In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/about" >About Us</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>

import {ref} from "vue";

export default {
  setup() {
    const mobile = ref(false);

    return {mobile}
  }
}
</script>
