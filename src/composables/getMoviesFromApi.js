import { ref } from 'vue'

const getMovies = () => {

    const movies = ref([])
    const error = ref(null)

    const load = async (url, page, specGenre, search = "") => {
        try {
            let urlFinal = ''
            if (search !== "") {
                urlFinal = `${url}&language=en-US&page=${page.value}&include_adult=false&query=${search}`
            }
            else if (specGenre.id === 0) {
                urlFinal = `${url}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page.value}&region=CZ`
            }
            else {
                urlFinal = `${url}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page.value}&with_genres=${specGenre.id}`
            }
            fetch(urlFinal)
                .then(response => response.json())
                .then(data => {
                    movies.value = data.results.filter(item => (item.poster_path !== null))
                });
        }
        catch(err) {
            error.value = err.message
        }
    }

    return { movies, error, load }
}

export default getMovies