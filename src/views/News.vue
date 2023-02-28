<template>
  <section class="pb-2 bg-dark-amber pt-0.5 text-amber-200 relative">
    <img :src="path">

  <button @click="showModal = true" class="absolute top-5 right-4 items-center py-1 px-2 font-medium text-center text-gray-900 bg-cyan-700 border border-cyan-400 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-gray-100 z-10 text-lg text-amber-100" type="button">Add article </button>

  <News/>

  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </modal>
  </transition>
  </section>
</template>

<script>

// component imports
import News from '../components/News.vue'
import Modal from '../components/extras/Modal.vue'
import {onMounted, ref} from "vue";
import {storage, refStorage, getDownloadURL } from '../firebase/config'

export default {
  props: {
    env: Object,
  },
  components: { News, Modal },

  setup() {
    const path = ref("");

    const close = () => {
      showModal.value = false
    }

    onMounted(() => {
      getDownloadURL(refStorage(storage, 'images/star.jpg'))
          .then((url) => {

            path.value = url

          })
          .catch((error) => {
            // Handle any errors
          });
    })



    const showModal = ref(false);


    return { showModal, path, close}
  },
}
</script>