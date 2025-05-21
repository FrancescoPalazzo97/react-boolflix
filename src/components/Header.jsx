import React from 'react'
import Searchbar from './Searchbar'

const Header = () => {

    return (
        <header>
            <span className="logo">BOOLFLIX</span>
            <div className="search-container">
                <Searchbar />
            </div>
        </header>
    )
}

export default Header
