import axios from "axios"
import { useState, useEffect } from "react"
import ReactCountryFlag from "react-country-flag"

const API_Movies = 'https://api.themoviedb.org/3/search/movie?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='
const API_Series = 'https://api.themoviedb.org/3/search/tv?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='
const postPath = 'https://image.tmdb.org/t/p/w342'

function App() {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [all, setAll] = useState(null)
  const [search, setSearch] = useState('')

  const getMovies = () => {
    axios.get(`${API_Movies}${search}`)
      .then(res => {
        setMovies(res.data.results)
      })
  }

  const getSeries = () => {
    axios.get(`${API_Series}${search}`)
      .then(res => {
        setSeries(res.data.results)
      })
  }

  const getAll = () => {
    getMovies()
    getSeries()
  }

  const searchAll = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    movies && series ? setAll([...movies, ...series]) : null
  }, [movies, series])

  useEffect(() => {
    console.log(all)
  }, [all])

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
      it: <ReactCountryFlag countryCode="IT" svg />,
      ja: <ReactCountryFlag countryCode="JP" svg />,
      ko: <ReactCountryFlag countryCode="KR" svg />
    }
    return langsObj[lang] || <ReactCountryFlag countryCode={`${lang}`} svg />
  };


  return (
    <>
      <header>
        <input type="text" onChange={(e) => searchAll(e)} value={search}></input>
        <button onClick={() => getAll()}>cerca</button>
      </header>
      <main>
        {!all ?
          (
            <></>
          ) : (
            <ul>
              {all.map((item, index) => (
                <li key={item.id}>
                  elemento {index + 1}
                  <ul>
                    {item.title && (
                      <>
                        <li>
                          <img src={`${postPath}${item.poster_path}`} alt="" />
                        </li>
                        <li>{item.title}</li>
                        <li>{item.original_title}</li>
                        <li>{item.vote_average}</li>
                        <li>{getFlag(item.original_language)}</li>
                      </>
                    )}
                    {item.name && (
                      <>
                        <li>
                          <img src={`${postPath}${item.poster_path}`} alt="" />
                        </li>
                        <li>{item.name}</li>
                        <li>{item.name}</li>
                        <li>{item.vote_average}</li>
                        <li>{getFlag(item.original_language)}</li>
                      </>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}


      </main>
    </>
  )
}

export default App
