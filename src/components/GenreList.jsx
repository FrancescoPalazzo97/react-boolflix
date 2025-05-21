import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const API_MoviesGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=it-IT`
const API_SeriesGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=it-IT`

const GenreList = ({ item, isMovie }) => {

    const { genre_ids } = item;

    const [genres, setGenres] = useState(null);
    const [filteredGenres, setFilteredGenres] = useState([]);

    const getMovieGenres = () => {
        axios.get(API_MoviesGenres)
            .then(res => {
                setGenres(res.data.genres)
            })
    }

    const getSeriresGenres = () => {
        axios.get(API_SeriesGenres)
            .then(res => {
                setGenres(res.data.genres)
            })
    }

    useEffect(() => {
        if (isMovie) {
            getMovieGenres()
        } else {
            getSeriresGenres()
        }
    }, [])

    useEffect(() => {
        if (genres) {
            const results = genres.filter(genre => genre_ids.includes(genre.id))
            setFilteredGenres(results);
        }
    }, [genres])

    return (
        <>
            {filteredGenres.map(genre => (
                <span key={genre.id} className='genre-name'>
                    {genre.name},
                </span>
            ))}
        </>
    )
}

export default GenreList
