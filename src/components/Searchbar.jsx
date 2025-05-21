import React from 'react'
import { useState, useEffect } from 'react'
import { useLibraryContext } from '../contexts/LibraryContext'
import axios from 'axios'

const API_Movies = 'https://api.themoviedb.org/3/search/movie?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='
const API_Series = 'https://api.themoviedb.org/3/search/tv?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT&query='

const Searchbar = () => {

    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])

    const { all, setAll, search, setSearch } = useLibraryContext();

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

    useEffect(() => {
        movies && series ? setAll([...movies, ...series]) : null
    }, [movies, series])


    const searchAll = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <input className='search-input' placeholder='Cerca film o serie TV...' type="text" onChange={(e) => searchAll(e)} value={search}></input>
            <button className='search-button' onClick={getAll}>cerca</button>
        </>
    )
}

export default Searchbar
