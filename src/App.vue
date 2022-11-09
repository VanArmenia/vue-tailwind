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

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card .percent {
  position: relative;
}

.card svg {
  position: relative;
  width: 72px;
  height: 72px;
  transform: rotate(-90deg);
}

.card svg circle {
  width: 100%;
  height: 100%;
  stroke: #f0f0f0;
  stroke-width: 6;
  stroke-linecap: round;
  fill: #222222;
}

.card svg circle:last-of-type {
  stroke-dasharray: 186px;
  stroke: #0891B2;
}

.card .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card .number h3 {
  font-weight: 200;
  font-size: 1.3rem;
}
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
