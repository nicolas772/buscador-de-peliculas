export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0
    if (!hasMovies) return <p>No se encontraron películas</p>
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}