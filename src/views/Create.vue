<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input v-model="name" type="text" required>
      <label>Rating:</label>
      <input v-model="rating" type="range" min="1" max="10">
      <label>Release date:</label>
      <input v-model="date" type="date" id="release">

      <button>Add Movie</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { db, collection, addDoc  } from '../firebase/config'
export default {
  setup() {
    const name = ref('')
    const rating = ref('')
    const date = ref('')
    const router = useRouter()

    const handleSubmit = async () => {
      const movie = {
        Name: name.value,
        Rating: rating.value,
        Release_Date: date.value
      }
      // Add a new document with a generated id.
       await addDoc(collection(db, "Movies"), {
        movie
      });
      router.push({ name: 'home' })
    }
    return { name, rating, date, handleSubmit }
  },
}
</script>