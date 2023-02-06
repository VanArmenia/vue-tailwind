import { ref } from 'vue'
import { db, collection, getDocs } from '../firebase/config'

const getNews = () => {

    const news = ref([])
    const errorN = ref(null)

    const loadN = async () => {
        try {
            const res = await getDocs(collection(db, "News"));

            news.value = res.docs.map(doc => {
                console.log(doc.data())
                return { ...doc.data(), id: doc.id }
            })
        }
        catch(err) {
            errorN.value = err.message
        }
    }

    return { news, errorN, loadN }
}

export default getNews