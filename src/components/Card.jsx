import React from 'react'
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CastList from './CastList';

const postPath = 'https://image.tmdb.org/t/p/w342'

const Card = ({ item }) => {

    const { id, poster_path, title, original_title, vote_average, original_language, name, original_name } = item;



    const roundedVote = (n) => {
        return Math.round(n / 2);
    }

    const getStars = (vote) => (
        [...Array(vote)].map((element, i) => (
            <FontAwesomeIcon key={i} color="gold" icon={faStar} />
        ))
    )

    const getFlag = (lang) => {
        const langsObj = {
            en: <ReactCountryFlag countryCode="US" svg />,
            it: <ReactCountryFlag countryCode="IT" svg />,
            ja: <ReactCountryFlag countryCode="JP" svg />,
            ko: <ReactCountryFlag countryCode="KR" svg />
        }
        return langsObj[lang] || <ReactCountryFlag countryCode={`${lang}`} svg />
    };

    const renderItem = (item) => {

        const vote = roundedVote(vote_average);

        return (
            <>
                <img src={`${postPath}${poster_path}`} alt={title ? title : name} className='card-image' />
                <div className="card-overlay">
                    <div className="card-title">
                        {title ? title : name}
                    </div>
                    <div className="card-original-title">
                        Titolo originale: {original_title ? original_title : original_name}
                    </div>
                    <div className="card-info">
                        <div className="vote">
                            {getStars(vote)}
                        </div>
                        <div className="language">
                            {getFlag(original_language)}
                        </div>
                        <div className="cast-container">
                            <CastList id={id} isMovie={!!title} /> {/* Trasformo title in booleano esplicito: !!title = title ? true : false */}
                        </div>
                        <div className="genre-container"></div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <li className='card'>
            {renderItem(item)}
        </li>
    )
}

export default Card
