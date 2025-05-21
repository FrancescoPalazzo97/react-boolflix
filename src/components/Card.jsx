import React from 'react'

import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const postPath = 'https://image.tmdb.org/t/p/w342'

const Card = ({ item, index }) => {

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

    return (
        <li>
            elemento {index + 1}
            <ul>
                {renderItem(item)}
            </ul>
        </li>
    )
}

export default Card
