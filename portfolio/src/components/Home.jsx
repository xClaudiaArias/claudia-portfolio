import { ArrowDownwardSharp, Handshake } from '@mui/icons-material';
import React from 'react'; 
import styled from 'styled-components';
import BackHandIcon from '@mui/icons-material/BackHand';
import SouthIcon from '@mui/icons-material/South';

const HomeContainer = styled.div`
    position: relative;
    z-index: 1;
    min-height: 80vh; 
    text-align: center;
    background: none;
    margin-top: 150px;
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

const Home = () => {

    return (
        <HomeContainer>
            <BackHandIcon style={{fill: 'white', width: 48, height: 48}} />
            <H3>Hello, I am</H3>
            <H1>Claudia Arias</H1>
            <H2>Web Developer</H2>
            <H3>It's very nice to meet you</H3>
            <SouthIcon style={{fill: 'white', width: 48, height: 48}}/>
        </HomeContainer>
    );
}

export default Home;
