import { ref } from 'vue'

const getMovies = () => {

    const movies = ref([])
    const error = ref(null)

    const load = async (url, env, page, specGenre, search = "") => {
        console.log(specGenre)
        try {
            let urlFinal = ''
            if (search !== "") {
                urlFinal = `${url}?api_key=${env.tmdb_api_key}&language=en-US&page=${page.value}&include_adult=false&query=${search}`
            }
            else if (specGenre.id === 0) {
                urlFinal = `${url}?api_key=${env.tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page.value}`
            }
            else {
                urlFinal = `${url}?api_key=${env.tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page.value}&with_genres=${specGenre.id}`
            }
            fetch(urlFinal)
                .then(response => response.json())
                .then(data => {
                    movies.value = data.results;
                });
            console.log(movies.value)
        }
        catch(err) {
            error.value = err.message
        }
    }

    return { movies, error, load }
}

export default getMovies