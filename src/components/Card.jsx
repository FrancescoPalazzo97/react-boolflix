import React from 'react'

import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const postPath = 'https://image.tmdb.org/t/p/w342'

const Card = ({ item }) => {

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

        const { poster_path, title, original_title, vote_average, original_language, name, original_name } = item;
        const vote = roundedVote(vote_average);

        return (
            <>
                <img src={`${postPath}${poster_path}`} alt={title ? title : name} className='card-image' />
                <div class="card-overlay">
                    <div class="card-title">
                        {title ? title : name}
                    </div>
                    <div class="card-original-title">
                        Titolo originale: {original_title ? original_title : original_name}
                    </div>
                    <div class="card-info">
                        <div className="vote">
                            {getStars(vote)}
                        </div>
                        <div className="language">
                            {getFlag(original_language)}
                        </div>
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
