import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components'

import SingleCard from '../components/SingleCard'


// const API_KEY = '267478f9e81983e4ecdb72c1b7954e41'

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
            // console.log(res.data['results'])

            let result = res.data['results']
            if (result) {
                let final = result.map((film) => {
                    let obj = {}
                    obj['title'] = film.title
                    obj['imagePath'] = film['poster_path']
                    obj['date'] = film['release_date']
                    obj['score'] = film['vote_average']
                    // console.log(obj)
                    return obj;
                })
                setFilmList(final)
            }
        })
        // console.log('URL ->>>> ', url)
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
