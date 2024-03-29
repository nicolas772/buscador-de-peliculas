import { useRef, useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])
    const previusSearch = useRef(search)
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if (search === previusSearch.current) return //esto es para evitar que llame a la api de nuevo por una misma busqueda
        if (search) {
            //setResponseMovies(withResults)
            previusSearch.current = search
            fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
            .then(res => res.json())
            .then(json => {
                setResponseMovies(json)
            })
        } else {
            setResponseMovies(withoutResults)
        }
    }

    return { movies: mappedMovies, getMovies }
}