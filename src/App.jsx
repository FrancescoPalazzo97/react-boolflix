import axios from "axios"
import { useState, useEffect } from "react"

const API = 'https://api.themoviedb.org/3/search/movie?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const getMovies = () => {
    axios.get(`${API}${search}`)
      .then(res => {
        setMovies(res.data.results)
      })
  }

  const searchMovies = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <input type="text" onChange={(e) => searchMovies(e)} value={search}></input>
        <button onClick={() => getMovies()}>cerca</button>
      </header>
      <main>
        <ul>
          {movies.map((movie, index) => (
            <li key={movie.id}>
              elemento {index + 1}
              <ul>
                <li>{movie.title}</li>
                <li>{movie.original_title}</li>
                <li>{movie.vote_average}</li>
                <li>{movie.original_language}</li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
