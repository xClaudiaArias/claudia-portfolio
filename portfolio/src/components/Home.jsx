import React from 'react'; 
import styled from 'styled-components';
import hand_icon from '../assets/images/Hand.png'
import hand_top from '../assets/images/Hand-sparkle-top.png'
import hand_bottom from '../assets/images/Hand-sparkle-bottom.png'

const HomeContainer = styled.div`
    position: relative;
    z-index: 1;
    min-height: 80vh; 
    text-align: center;
    background: none;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.h1`
    letter-spacing: 4px;
    color: white;
    text-transform: uppercase;
    font-family: "IBM Plex Serif", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 6rem;
    line-height: -10;
    margin: 0;
`

const H2 = styled.h2`
    color: orange;
    font-size: 4rem;
    margin: 5px;
`

const H3 = styled.h3`
    color: white;
    font-size: 2rem;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
    margin: 5px;
`

const HandContainer = styled.div`
    /* border: 1px solid red; */
    position: relative;
    width: 150px;
    height: 150px;
`

const Hand = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    /* border: 1px solid red; */
    position: absolute;
    top: 35px;
    right: 35px;
`

const HandSparkles = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;

    &.top {
        /* border: 1px solid blue; */
        top: 20px;
        right: 20px;
    }

    &.bottom {
        /* border: 1px solid yellow; */
        bottom: 20px;
        left: 10px;
    }
`

const Home = () => {

    return (
        <HomeContainer>
            <HandContainer>
                <HandSparkles className='top' src={hand_top} />
                <Hand src={hand_icon}/>
                <HandSparkles className='bottom' src={hand_bottom} />
            </HandContainer>
            <H3>Hello, I am</H3>
            <H1>Claudia Arias</H1>
            <H2>Web Developer</H2>
            <H3>It's very nice to meet you</H3>
        </HomeContainer>
    );
}

export default Home;
