import { ref } from 'vue'
import { db, doc, getDoc } from '../firebase/config'

const getMovie = (id) => {

    const movie = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const docRef = doc(db, "Movies", id);
            const res = await getDoc(docRef);

            console.log(res)

            if (!res.exists()) {
                throw Error('That movie does not exist')
            }
            movie.value = { ...res.data(), id: res.id }
            // console.log(movie.value)
        }
        catch(err) {
            error.value = err.message
        }
    }

    return { movie, error, load }
}

export default getMovie