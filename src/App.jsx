import axios from "axios"
import { useState, useEffect } from "react"
import ReactCountryFlag from "react-country-flag"

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

  const getFlag = (lang) => {
    // switch (lang) {
    //   case "en":
    //     return <ReactCountryFlag countryCode="US" svg />;
    //   case "it":
    //     return <ReactCountryFlag countryCode="IT" svg />;
    //   case "fr":
    //     return <ReactCountryFlag countryCode="FR" svg />;
    //   default:
    //     return null;
    // }
    const langsObj = {
      en: <ReactCountryFlag countryCode="US" svg />,
      it: <ReactCountryFlag countryCode="IT" svg />
    }
    return langsObj[lang] || <ReactCountryFlag countryCode={`${lang}`} svg />
  };


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
                <li>{getFlag(movie.original_language)}</li>
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
