<template>

  <div v-if="article" class="p-16 flex gap-10 bg-dark-amber text-amber-50">
    <div class="w-1/3 relative">
      <div v-if="error" class="text-red-500 text-xl mt-6">{{ error }}</div>
    </div>

    <div class="w-2/3 text-gray-300 ml-8">
    <h2 class="text-2xl">{{ article.name }}</h2>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>

</template>

<script>
import { useRoute } from 'vue-router'
import getArticle from '../composables/getArticle'
// component imports

import Spinner from '../components/Spinner.vue'
import {computed, ref} from "vue";
export default {
  props: {
    env: Object,
  },
  components: { Spinner },

  setup() {

    const route = useRoute()
    const { article, error, load } = getArticle(route.params.id)
    load()


    console.log(article.value)

    const fullPath = "https://image.tmdb.org/t/p/w500"
    const youtubePath = "https://www.youtube.com/embed/"


    return { error, article, fullPath,  youtubePath, route, getArticle }
  },
}
</script>

<style>
iframe {
  border: #c7a367 2px solid;
  border-radius: 8px;
}

</style>