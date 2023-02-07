<template>
  <div v-if="news" class="p-2 bg-dark-amber text-amber-50">
  <div class="flex p-4 pt-1">
    <h2 class="text-white text-xl md:text-2xl uppercase font-light text-left ml-0 mt-2">
      <span class="font-bold">TOP </span>  NEWS
    </h2>
  </div>


    <div class="w-1/3 relative">
      <div v-if="errorN" class="text-red-500 text-xl mt-6">{{ errorN }}</div>
    </div>

    <div class="w-full mr-auto ml-auto md:grid-cols-3 lg:grid-cols-4 grid-cols-1 grid text-amber-50">
      <div v-for="post in news" :key="post.id" class="my-4">
        <div class="px-4 col-span-2">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
            <router-link :to="{ name: 'Article', params: {id: post.id, name: post.name }}" class="relative group block mr-4 flex-shrink-0">
              <img alt="..."
                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                   class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative py-2 px-2">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                >
                  <polygon
                      points="-30,95 583,95 583,65"
                      class="text-cyan-600 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  {{ post.name }}
                </h4>
              </blockquote>
            </router-link>
          </div>
        </div>
        <div class="px-4 col-span-3">
          <p class="text-lg font-light leading-relaxed">
            {{ post.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>
<script>

// composable imports
import getNews from '../composables/getNews'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  components: { Spinner },

  setup() {

    const { news, errorN, loadN } = getNews()
    loadN()

    const fullPath = "https://image.tmdb.org/t/p/w500"

    return { errorN, news, fullPath }
  },
}
</script>
