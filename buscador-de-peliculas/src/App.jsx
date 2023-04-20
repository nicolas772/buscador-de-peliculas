import { Movies } from './components/Movies'
import './App.css'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  )
}

export default App
