<script>
import { RouterView } from 'vue-router'
import env from '@/env.js'
import Navbar  from "@/components/Navbar.vue"
import FooterComponent  from "@/components/Footer.vue"

export default {
  components: {
    Navbar, FooterComponent
  },
  setup() {
    return {RouterView,env,Navbar,FooterComponent }
  }
}

</script>

<template>
  <Navbar />
  <RouterView :env = 'env'/>
  <FooterComponent />
</template>

<style>
@import '@/assets/base.css';


@media (hover: hover) {
}


nav a.router-link-exact-active {
  color: #f89118;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
