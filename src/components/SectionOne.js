import React, { useState } from 'react'

import HeaderColumnOne from './HeaderColumnOne';
import CardsView from '../container/CardsView';

const URLs = {
    'onStream': 'https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1',
    'onTv': 'https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=4',
    'onForRent': 'https://api.themoviedb.org/3/discover/movie?api_key=267478f9e81983e4ecdb72c1b7954e41&language&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3',
    'onCinema': 'https://api.themoviedb.org/3/movie/popular?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=2',
}

const defaultUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=267478f9e81983e4ecdb72c1b7954e41&language=en-US&page=1'

const SectionOne = () => {
    const [url, setUrl] = useState(defaultUrl)
    const [activeTab, setActiveTab] = useState('onStream')

    const handleClick = (text) => {
        setUrl(URLs[text])
        setActiveTab(text)
    }
    return (
        <div>
            <HeaderColumnOne
                handleClick={handleClick}
                activeTab={activeTab}
            />
            <CardsView
                url={url}
            />
        </div>
    )
}

export default SectionOne
