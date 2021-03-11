import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import FilmImage from '../film.png'

const Content = styled.div`
    border-radius: 5px;
    background-image: url(${FilmImage});
    width: 200px;
    height: 200px;
`

const Title = styled.h2`
  color: black;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  &:hover {
      color: #01b4e4;
  }
`
const Date = styled.div`
    color: #ccc;
    font-weight: 300;
    margin: 6px 0;
`

const Button = styled.button`
    border-radius: 50%;
    border: none;
    outline: none;
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
    color: #dcdcdc;
    &:hover {
      background-color: #01b4e4;
  }
`

const SingleCard = ({ title, date }) => (
    <div>
        <Content>
            <Button>
                <FontAwesomeIcon icon={faEllipsisH} size='2x'></FontAwesomeIcon>
            </Button>
        </Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
    </div>
)
export default SingleCard;