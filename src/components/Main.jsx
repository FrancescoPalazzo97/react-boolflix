import React from 'react'
import Card from './Card'

import { useLibraryContext } from '../contexts/LibraryContext'

const Main = () => {

    const { all } = useLibraryContext();

    return (
        <main>
            {!all ?
                (
                    <></>
                ) : (
                    <ul className='row'>
                        {all.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </ul>
                )}
        </main>
    )
}

export default Main
