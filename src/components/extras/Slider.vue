<template>
  <Carousel :settings="settings" v-if="items.length" class="mt-1">
    <Slide v-for="item in items" :key="item.id" class="block">
      <div class="carousel__item focus:outline-none dark:bg-gray-700 dark:border-gray-600">
        <div class="h-16">
          <a href="#" class="text-lg">{{ item.name}}</a>
        </div>
        <img :src="fullPath + item.profile_path" alt="Movie Poster" class="rounded-md"/>
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
      itemsToShow: 5,
      snapAlign: 'center',
      itemsToScroll: 1
    };

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