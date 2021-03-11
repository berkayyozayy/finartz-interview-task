import React from 'react'
import SingleCard from './SingleCard'

const FilmCard = () => {
    const date = new Date().toLocaleDateString()

    return (
        <div>
            <SingleCard
                title='Gora'
                date={date}
            />
        </div>
    )
}

export default FilmCard;