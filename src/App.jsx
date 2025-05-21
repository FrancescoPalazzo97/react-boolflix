import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";


const API_Movies = 'https://api.themoviedb.org/3/search/movie?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='
const API_Series = 'https://api.themoviedb.org/3/search/tv?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='

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


  return (
    <>
      <Header
        getAll={() => getAll()}
        searchAll={searchAll}
        search={search}
      />
      <Main all={all} />
    </>
  )
}

export default App
