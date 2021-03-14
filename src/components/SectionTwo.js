import React, { useState } from 'react'

import HeaderColumnTwo from './HeaderColumnTwo';
import CardsView from '../container/CardsView';

const URLs = {
    'films': 'https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=3',
    'onTv': 'https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=4',
}

const SectionTwo = () => {

    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=3')
    const handleClick = (text) => {
        setUrl(URLs[text])
    }
    return (
        <div>
            <HeaderColumnTwo
                handleClick={handleClick}
            />
            <CardsView
                url={url}
            />
        </div>
    )
}

export default SectionTwo