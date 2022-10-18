<template>
  <Carousel :settings="settings" v-if="genres.length" class="max-h-6 mt-1 max-w-full">
    <Slide v-for="genre in genres" :key="genre.id" class="block">
      <div class="carousel__item bg-amber-900 border border-amber-600 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600  "><a href="#" class="text-amber-100 text-xl">{{ genre.name}}</a></div>
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
    genres: Array,
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const _settings = {
      itemsToShow: 8,
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

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>