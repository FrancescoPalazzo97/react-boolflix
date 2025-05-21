import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const CastList = ({ id, isMovie }) => {

    const API_MovieCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT`
    const API_SeriesCast = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=d732698a8c274162c8f3494383cd5a67&language=it-IT`

    const [cast, setCast] = useState(null);
    const [filteredCast, setFilteredCast] = useState(null)

    const getMovieCast = () => {

        axios.get(API_MovieCast)
            .then(res => {
                setCast(res.data.cast);
            })
            .catch(err => {
                console.error(err)
            })
    }

    const getSeriesCast = () => {

        axios.get(API_SeriesCast)
            .then(res => {
                setCast(res.data.cast);
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        if (isMovie) {
            getMovieCast()
        } else {
            getSeriesCast()
        }
    }, [])

    useEffect(() => {
        if (cast) {
            setFilteredCast(cast.slice(0, 4));
        }
    }, [cast])

    return (
        <>
            {filteredCast ? (
                filteredCast.map((person, i) => (
                    <span key={i} className='cast-name'>{person.name},</span>
                ))
            ) : (
                <></>
            )}
        </>
    )
}

export default CastList
