import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPercent, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const Wrapper = styled.div`
    position: relative;
`

const Button = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    outline: none;
    float: right;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    align-items: center;
    color: #dcdcdc;
    position: absolute;   
    top: 0;
    right: 0;
    z-index: 2;
    color: rgba(0,0,0,0.2);
    &:hover {
      background-color: #01b4e4;
      color: white;
      cursor: pointer;
  }
`

const Content = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`

const Title = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: bold;
  &:hover {
      color: #01b4e4;
  }
`

const Date = styled.p`
    color: #ccc;
    white-space: nowrap;
    font-weight: 300;
    margin-top: -0.6em;   
`
const Score = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -1rem;
    margin-left: 10px;
    z-index: 2;
    background-color: #000000;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const ScoreValue = styled.div`
   font-size: .8rem;
   font-weight: bold;
   font-family: 'Source Sans Pro', sans-serif;
   color: #fff;

`

const ScorePercent = styled.div`
    color: #fff;
    font-size: 0.3rem;
    margin-bottom: .5rem;
`

const ThumbsButtons = styled.div`
    width: 30px;
    height: 30px;
    float: right;
    margin-right: 1.5rem;
    position: absolute;   
    bottom: -.5rem;
    display: flex;
    align-items: center;
    color: #dcdcdc;
    cursor: pointer;
    right: 0;
`

const ThumbsUp = styled.div`
    margin-right: 5px;
    &:hover {
        color: lime;
    }
`

const ThumbsDown = styled.div`
    &:hover {
        color: #ff8000;
    }
`

let IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const getBorder = (score) => {
    if (score < 50) {
        return '2px solid red'
    } else if (score > 50 && score <= 70) {
        return '2px solid yellow'
    } else if (score > 70) {
        return '2px solid lime'
    }
}

const SingleCard = ({ title, date, imagePath, score }) => {
    const [thumbsUp, setThumbsUp] = useState(true)
    const [thumbsDown, setThumbsDown] = useState(true)

    const handleThumbs = (thumbStatus) => {
        if (thumbStatus === 'up') {
            setThumbsDown(!thumbsDown)
        }
        if (thumbStatus === 'down') {
            setThumbsUp(!thumbsUp)
        }
    }

    let borderStyle = getBorder(score)

    return (
        <CardContainer>
            <Wrapper>
                <LazyLoadImage
                    src={`${IMAGE_URL}${imagePath}`}
                    alt='film-poster...'
                    width='150px'
                    height='225px'
                    effect='blur'
                />
                <Button>
                    <FontAwesomeIcon icon={faEllipsisH} size='xs
                '></FontAwesomeIcon>
                </Button>
                <Score style={{
                    border: borderStyle
                }}>
                    <ScoreValue>
                        {score}
                    </ScoreValue>
                    <ScorePercent>
                        <FontAwesomeIcon icon={faPercent}></FontAwesomeIcon>
                    </ScorePercent>
                </Score>
                <ThumbsButtons>
                    <ThumbsUp>
                        <FontAwesomeIcon style={{ display: thumbsUp ? true : 'none' }} onClick={() => handleThumbs('up')} icon={faThumbsUp} size='lg'></FontAwesomeIcon>
                    </ThumbsUp>
                    <ThumbsDown>
                        <FontAwesomeIcon style={{ display: thumbsDown ? true : 'none' }} onClick={() => handleThumbs('down')} icon={faThumbsDown} size='lg'></FontAwesomeIcon>
                    </ThumbsDown>
                </ThumbsButtons>
            </Wrapper>
            <Content>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Content>
        </CardContainer>
    )
}
export default SingleCard;
