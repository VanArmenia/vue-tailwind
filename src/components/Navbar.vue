<template>
  <nav class="md:p-3 py-1 px-3 z-10 flex justify-between bg-lighter-amber">
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
          <RouterLink to="/stream" >Stream/Buy</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/theatres" >In Theatres</RouterLink>
        </li>
        <li class="md:px-1 py-2">
          <RouterLink to="/about" >About Us</RouterLink>
        </li>
      </ul>
  </nav>
</template>
<script>

export default {
  setup() {
return
  }
}
</script>
