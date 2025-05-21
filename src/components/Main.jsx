import React from 'react'
import Card from './Card'

const Main = ({ all }) => {
    return (
        <main>
            {!all ?
                (
                    <></>
                ) : (
                    <ul>
                        {all.map((item, index) => (
                            <Card key={index} item={item} index={index} />
                        ))}
                    </ul>
                )}
        </main>
    )
}

export default Main
