<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" >
      <h1 class="logo w-64 h-16 text-2xl font-fascinate">
        <RouterLink to="/"><span class="text-cyan-600">Art</span><span class="text-cyan-600">House</span> <span class="text-amber-600">Movies</span></RouterLink>
      </h1>

      <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        v-on:click="toggleNavbar()"
      >
        <i class="text-white fas fa-bars"></i>
      </button>
    </div>
<!--    <div class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"-->
<!--      v-bind:class="{'hidden': !showMenu, 'block': showMenu}">-->

    <div class="font-anton h-16 text-amber-600 tracking-wider">
      <RouterLink to="/" >HOME</RouterLink>
      <RouterLink to="/">NEWS</RouterLink>
      <RouterLink to="/">IN THEATERS</RouterLink>
      <RouterLink to="/landing">LANDING</RouterLink>
    </div>
<!--    </div>-->
  </nav>
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
