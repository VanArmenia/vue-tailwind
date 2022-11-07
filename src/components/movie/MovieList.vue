<template>
  <section class="artists pb-8 text-amber-50 px-8">

    <div class="flex justify-between my-4">
      <slot name="results"></slot>

      <div v-if="error"> {{ error }}</div>
      <slot></slot>
      <slot name="pager"></slot>
    </div>

    <div class="sm:grid-cols-4 md:grid-cols-6 grid-cols-1 grid gap-3 mb-10 px-4 overflow-hidden relative" v-if="movies.length">
      <div  v-for="movie in movies" :key="movie.id" class="">
        <router-link :to="'/movie/' + movie.id" class="relative group block mr-4 flex-shrink-0">
          <img :src="fullPath + movie.poster_path" alt="Movie Poster" class="poster"/>
          <div class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
            <div class="w-full">
              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="34" cy="34" r="30"></circle>
                    <circle cx="34" cy="34" r="30" :style="{'stroke-dashoffset': 184 - (184 * (Math.ceil(movie.vote_average * 10)))/ 100 + 'px'}"></circle>
                  </svg>
                  <div class="number">
                    <h3>{{ Math.ceil(movie.vote_average * 10) }}<span>%</span></h3>
                  </div>
                </div>
              </div>
              <h3 class="text-sm mb-2">{{ movie.title }}</h3>
              <p class="year">{{ movie.release_date }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    movies: [],
    page: Number,
    error: String
  },
  setup() {
    const fullPath = "https://image.tmdb.org/t/p/w500"

    return {fullPath}
  }
}
</script>
