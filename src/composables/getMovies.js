import { ref } from 'vue'
import { db, collection, getDocs } from '../firebase/config'

const getMovies = () => {

    const movies = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await getDocs(collection(db, "Movies"));
            // console.log(res.docs)

            movies.value = res.docs.map(doc => {
                // console.log(doc.data())
                return { ...doc.data(), id: doc.id }
            })
        }
        catch(err) {
            error.value = err.message
        }
    }

    return { movies, error, load }
}

export default getMovies