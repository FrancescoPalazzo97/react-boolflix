import React from 'react'

const Header = ({ getAll, searchAll, search }) => {
    return (
        <header>
            <input type="text" onChange={(e) => searchAll(e)} value={search}></input>
            <button onClick={getAll}>cerca</button>
        </header>
    )
}

export default Header
