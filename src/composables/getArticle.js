import { ref } from 'vue'
import { db, doc, getDoc } from '../firebase/config'

const getArticle = (id) => {

    const article = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const docRef = doc(db, "News", id);
            const res = await getDoc(docRef);

            console.log(res)

            if (!res.exists()) {
                throw Error('That movie does not exist')
            }
            article.value = { ...res.data(), id: res.id }
            // console.log(movie.value)
        }
        catch(err) {
            error.value = err.message
        }
    }

    return { article, error, load }
}

export default getArticle