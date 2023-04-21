import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'
//import { useRef } from 'react' //el use ref nos permite, ademas de crear referencias al dom, poder guardar variables que no pierden su valor cada vez que el componente se renderice
import './App.css'

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })
  //const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    //rescatar valor de un formulario con hook (necesita solo el ref en la etiqueta input, y el hook useRef)
    //const value = inputRef.current.value

    //rescatar muchos valores de un formulario (necesita estar dentro de un form, y el name en cada etiqueta de cada input del formulario)
    //const fields = Object.fromEntries(
    //  new window.FormData(event.target))
    //console.log(fields.query)

    //rescatar valor de formulario con el event (necesita name en la etiqueta input)
    //const fields = new window.FormData(event.target)
    //const query = fields.get('query')

    //formulario controlado, cada vez que cambiemos un valor se actualizara el estado de query (necesita el value, que es el estado, y el onChange)
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} 
          onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  )
}

export default App
