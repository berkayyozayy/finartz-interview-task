import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`

const HeaderTitle = styled.h2`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.6rem;
    margin-left: 1rem;
    white-space: nowrap;
`

const SelectorWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    border: 1px solid rgb(3,37,65);
    border-radius: 30px;
`

const Selector = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
`

const SelectorLink = styled.a`
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: rgb(4,37,65);
    cursor: pointer;
`

const HeaderColumnTwo = ({ handleClick }) => {

    return (
        <HeaderContainer>
            <HeaderTitle>İzlemek Ücretsiz</HeaderTitle>
            <SelectorWrap>
                <Selector>
                    <SelectorLink onClick={() => handleClick('films')} >Filmler</SelectorLink>
                </Selector>
                <Selector>
                    <SelectorLink onClick={() => handleClick('onTv')}>TV</SelectorLink>
                </Selector>
            </SelectorWrap>
        </HeaderContainer>
    )
}

export default HeaderColumnTwo

