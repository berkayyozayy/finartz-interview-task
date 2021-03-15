import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import SingleCard from '../components/SingleCard'

const CardsViewStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25rem;
    overflow: scroll;
    overflow-y: hidden;
    justify-content: space-between;
`

const CardsView = ({ url }) => {
    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
            let result = res.data['results']
            if (result) {
                let final = result.map((film) => {
                    let obj = {}
                    obj['title'] = film.title
                    obj['imagePath'] = film['poster_path']
                    obj['date'] = film['release_date']
                    obj['score'] = film['vote_average']
                    return obj;
                })
                setFilmList(final)
            }
        })
    }, [url])

    return (
        <>
            <CardsViewStyle>
                {filmList.map((obj) => (
                    <SingleCard
                        imagePath={obj.imagePath}
                        title={obj.title}
                        date={obj.date}
                        score={(obj.score) * 10}
                    />
                ))}
            </CardsViewStyle>
        </>
    )
}

export default CardsView
