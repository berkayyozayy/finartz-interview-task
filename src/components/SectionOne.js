import React, { useState } from 'react'

import Header from '../components/Header';
import CardsView from '../container/CardsView';

const URLs = {
    'onStream': 'https://api.themoviedb.org/3/tv/latest?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&page=1',
    'onTv': 'https://api.themoviedb.org/3/movie/popular?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&page=2',
    'onForRent': 'https://api.themoviedb.org/3/discover/movie?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3',
    'onCinema': 'https://api.themoviedb.org/3/discover/movie?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4',
}

const SectionOne = () => {

    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1')
    const handleClick = (text) => {
        setUrl(URLs[text])
    }
    return (
        <div>
            <Header
                handleClick={handleClick}
            />
            <CardsView
                url={url}
            />
        </div>
    )
}

export default SectionOne
