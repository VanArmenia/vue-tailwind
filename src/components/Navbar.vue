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
          <RouterLink to="/theatres">In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/news" >Top News</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/about" >About Us</RouterLink>
        </li>
        <li class="md:pl-1 py-2">
          <RouterLink class="pr-0" to="/login" >Login</RouterLink>
        </li>
        <li class="md:px-0 py-2">
          <RouterLink class="pl-0" to="/register" >/Register</RouterLink>
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
    <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-from-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-500 ease-custom"
        leave-from-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
    <div v-if="mobile" class="bg-neutral-900 absolute top-12 z-50 mobileMenu rounded-lg">
      <ul data-menu class="text-amber-600 tracking-wider items-center text-gray-100 text-sm shrink-0 pt-1.5">
        <li class="md:px-1 py-2">
          <RouterLink to="/" >Home</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink :to="{
                              name: 'Stream',
                              params: {
                              id: '8',
                              provider: 'Netflix'
                               }
                             }" >Stream/Buy</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/theatres" >In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/news" >Top News</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/about" >About Us</RouterLink>
        </li>
        <li class="md:px-0 py-2 inline">
          <RouterLink class="pr-0" to="/login" >Login</RouterLink>
        </li>
          <RouterLink class="pl-0" to="/register" >/Register</RouterLink>
      </ul>
    </div>
    </transition>
  </nav>
</template>
<script>

import { ref, watch} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  setup() {
    const route = useRoute()
    const mobile = ref(false);

    watch(() => route.name, showMobile)
    function showMobile() {
      mobile.value = false;
    }
    return {mobile}
  }
}
</script>
