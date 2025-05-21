import axios from "axios";
import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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

  const roundedVote = (n) => {
    return Math.round(n / 2);
  }

  const getStars = (vote) => (
    [...Array(vote)].map((element, i) => (
      <FontAwesomeIcon key={i} color="gold" icon={faStar} />
    ))
  )

  const renderItem = (item) => {

    const { poster_path, title, original_title, vote_average, original_language, name, original_name } = item;
    const vote = roundedVote(vote_average);

    return (
      <>
        <li>
          <img src={`${postPath}${poster_path}`} alt="" />
        </li>
        <li>{title ? title : name}</li>
        <li>{original_title ? original_title : original_name}</li>
        <li>{getStars(vote)}</li>
        <li>{getFlag(original_language)}</li>
      </>
    )
  }

  useEffect(() => {
    movies && series ? setAll([...movies, ...series]) : null
  }, [movies, series])

  const getFlag = (lang) => {
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
                    {renderItem(item)}
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
