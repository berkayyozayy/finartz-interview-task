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
    white-space: nowrap;
`

const SelectorLink = styled.a`
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: rgb(4,37,65);
    cursor: pointer;
    
`

const ActiveStyle = {
    'backgroundColor': 'rgb(3, 37, 65) ',
    'color': '#c0fecf ',
    'borderRadius': '10px',
    'transition': '.5s ease-out'
}

const HeaderColumnOne = ({ handleClick, activeTab }) => {

    return (
        <HeaderContainer>
            <HeaderTitle>Popüler Olanlar</HeaderTitle>
            <SelectorWrap>
                <Selector>
                    <SelectorLink
                        onClick={() => handleClick('onStream')}
                        style={activeTab === 'onStream' ? ActiveStyle : {}}
                    >Yayın Akışı</SelectorLink>
                </Selector>
                <Selector>
                    <SelectorLink
                        onClick={() => handleClick('onTv')}
                        style={activeTab === 'onTv' ? ActiveStyle : {}}
                    >Televizyonda</SelectorLink>
                </Selector>
                <Selector>
                    <SelectorLink
                        onClick={() => handleClick('onForRent')}
                        style={activeTab === 'onForRent' ? ActiveStyle : {}}
                    >Kiralık</SelectorLink>
                </Selector>
                <Selector>
                    <SelectorLink
                        onClick={() => handleClick('onCinema')}
                        style={activeTab === 'onCinema' ? ActiveStyle : {}}
                    >Sinemalarda</SelectorLink>
                </Selector>
            </SelectorWrap>
        </HeaderContainer>
    )
}

export default HeaderColumnOne