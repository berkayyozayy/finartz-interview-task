import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`
const Wrapper = styled.div`
    position: relative;
`
const Image = styled.img`
    width: 7.5rem;
    height: 11.25rem;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
`
const Button = styled.button`
    border-radius: 50%;
    border: none;
    outline: none;
    float: right;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    color: #dcdcdc;
    position: absolute;   
    top: 0;
    right: 0;
    z-index: 20;
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
  &:hover {
      color: #01b4e4;
  }
`

const Date = styled.p`
    color: #ccc;
    white-space: nowrap;
    font-weight: 300;
    margin-top: -0.6rem;   
`

let IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const SingleCard = ({ title, date, imagePath }) => (
    <CardContainer>
        <Wrapper>
            <Image src={`${IMAGE_URL}${imagePath}`} />
            <Button>
                <FontAwesomeIcon icon={faEllipsisH} size='1x
                '></FontAwesomeIcon>
            </Button>
        </Wrapper>
        <Content>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </Content>
    </CardContainer>
)
export default SingleCard;
