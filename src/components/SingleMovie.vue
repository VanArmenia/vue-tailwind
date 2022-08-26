<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: movie.id }}">
      <h3  class="text-amber-800 text-2xl">{{ movie.Name }}</h3>
    </router-link>

  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['movie'],
  // setup(props) {
  //   const snippet = computed(() => {
  //     return props.post.body.substring(0, 100) + '...'
  //   })
  //   return { snippet }
  // }
}
</script>