<template>
  <Carousel :settings="settings" v-if="genres.length" class="max-w-lg max-h-6 mt-1">
    <Slide v-for="genre in genres" :key="genre.id">
      <div class="carousel__item"><a href="#" class="text-amber-100">{{ genre.name}}</a></div>
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
.carousel__icon {
  width: 14px;
}
</style>