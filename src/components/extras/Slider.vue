<template>
  <Carousel :settings="settings" v-if="items" class="mt-1">
    <Slide v-for="item in items" :key="item.id" class="block">
      <div class="carousel__item focus:outline-none dark:bg-gray-700 dark:border-gray-600">

        <router-link v-if="item.poster_path" :to="{ name: 'Details', params: {id: item.id, title: item.title }}" class="relative group block mr-4 flex-shrink-0">
          <img :src="fullPath + item.poster_path" alt="Movie Poster" class="rounded-md"/>
        </router-link>

        <router-link v-if="item.profile_path" :to="{ name: 'Artist', params: {id: item.id, name: item.name }}" class="relative group block mr-4 flex-shrink-0">
          <div class="absolute inset-0 hidden group-hover:block flex-col justify-end text-white px-4 py-4 cursor-pointer posterHover z-50 bg-amber-700 rounded-md">
            <p class="font-bold text-amber-100 text-xl">{{ item.name}}</p>
          </div>
          <img v-if="item.profile_path" :src="fullPath + item.profile_path" alt="Artist Profile" class="rounded-md"/>
        </router-link>

      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import {ref} from "vue";

export default ({
  name: 'Slider-component',
  props: {
    items: Array,
    fullPath: String,
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const _settings = {
      snapAlign: 'start',
      itemsToScroll: 1,
      breakpoints: {
            200: {
              itemsToShow: 2,
              snapAlign: 'center',
            },
            700: {
              itemsToShow: 4,
              snapAlign: 'center',
            },
            1024: {
              itemsToShow: 6,
              snapAlign: 'start',
            },
    }};

    const settings = ref(_settings);
    // const handelDeleteImage = (index: number) => images.value.splice(index, 1);
    return { settings };
  },
});
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.carousel__slide {
  padding: 5px;
}
.carousel__prev, .carousel__next {
  margin: 22px !important;
  background-color: #222222 !important;
}
</style>