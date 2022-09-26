<template>
  <nav class="md:p-3 py-2 px-3 z-10">
    <div class="container mx-auto md:flex block flex-wrap items-center justify-start">
        <h1 class="logo w-64 h-16 text-2xl font-fascinate">
          <RouterLink to="/"><span class="text-cyan-600">Art</span><span class="text-cyan-600">House</span> <span class="text-amber-600">Movies</span></RouterLink>
        </h1>
      </div>
      <div class="md:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
           v-bind:class="{'hidden': !showMenu, 'md:flex': showMenu}">
      </div>
      <ul data-menu class="font-anton h-16 text-amber-600 tracking-wider md:flex hidden flex-wrap items-center justify-start text-white">
        <li class="md:px-6 py-2">
          <RouterLink to="/" >HOME</RouterLink>
        </li>
        <li class="md:px-6 py-2">
          <a href="#">Stream/Buy</a>
        </li>
        <li class="md:px-6 py-2">
          <a href="#">Coming Soon</a>
        </li>
        <li class="md:px-6 py-2">
          <RouterLink to="/">IN THEATERS</RouterLink>
        </li>
        <li class="md:px-6 py-2">
          <a href="#">About Us</a>
        </li>
        <li class="md:px-6 py-2">
          <a href="#">Contact</a>
        </li>
      </ul>
  </nav>
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
