import { useState, useEffect, useRef } from "react"

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === '' //esto permite que al cambiar el valor de firstInput, no se vuelva a renderizar el componente
            return
        }

        if (search === '') {
            setError('No se puede buscar pelicula vacia')
            return
        }

        if (search.match(/^\d+$/)) {
            setError('No se puede buscar una pelicula con un numero')
            return
        }

        if (search.length < 3) {
            setError('La búsqueda debe tener al menos 3 caracteres')
            return
        }
        setError(null)
    }, [search])

    return { search, updateSearch, error }
}