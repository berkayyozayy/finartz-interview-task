import React, { useState, useEffect } from 'react'
import SingleCard from '../components/SingleCard'
import axios from 'axios'
import styled from 'styled-components'

const API_KEY = '267478f9e81983e4ecdb72c1b7954e41'

const CardsViewStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 350px;
    overflow: scroll;
    justify-content: space-between;
`

const CardsView = () => {

    const [filmList, setFilmList] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1').then((res) => {
            // console.log(res.data['results'])
            let result = res.data['results']
            let final = result.map((film) => {
                let obj = {}
                obj['title'] = film.title
                obj['imagePath'] = film['poster_path']
                obj['date'] = film['release_date']

                console.log(obj)
                return obj;
            })
            setFilmList(final)
        })
    }, [])

    return (
        <CardsViewStyle>
            { filmList.map((obj) => (
                <SingleCard
                    imagePath={obj.imagePath}
                    title={obj.title}
                    date={obj.date} />

            ))}
        </CardsViewStyle>
    )
}

export default CardsView
