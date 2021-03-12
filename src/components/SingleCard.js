import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`
const Wrapper = styled.div`
    position: relative;
`

const Image = styled.img`
    width: 10rem;
    height: 15rem;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
`

const Button = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 100%;
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
    border: 2px solid lime;
    position: absolute;
    bottom: -1rem;
    margin-left: 10px;
    z-index: 1;
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

let IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const SingleCard = ({ title, date, imagePath, score }) => (
    <CardContainer>
        <Wrapper>
            <Image src={`${IMAGE_URL}${imagePath}`} />
            <Button>
                <FontAwesomeIcon icon={faEllipsisH} size='xs
                '></FontAwesomeIcon>
            </Button>
            <Score>
                <ScoreValue>
                    {score}
                </ScoreValue>
                <ScorePercent>
                    <FontAwesomeIcon icon={faPercent}></FontAwesomeIcon>
                </ScorePercent>
            </Score>
        </Wrapper>
        <Content>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </Content>
    </CardContainer>
)
export default SingleCard;
