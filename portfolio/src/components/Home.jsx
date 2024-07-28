import React from 'react'; 
import styled, {keyframes} from 'styled-components';
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

const H2Container = styled.div`
    width: 700px;
    height: 100px;
    overflow: hidden;
`

const scrollTop = keyframes`
    0% {
        top: 100%;
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    49% {
        opacity: 0;
    }
    50% {
        top: -90px;
        opacity: 1;
    }
    55% {
        opacity: .5;
    }
    65% {
        opacity: 0;
    }
    100% {
        top: -200px;
        opacity: 0;
    }
`

const H2Box = styled.div`
    width: 700px;
    height: calc((100px * 5) + 45px );
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    opacity: 0;
    color: orange;
    font-size: 4rem;
    padding: 45px 0;
    width: 100%;
    height: 100px;
    position: absolute;
    top: 100%;
    animation: ${scrollTop} 10s linear infinite;
    &.h21 {
        animation-delay: calc(10s / 5 * (5 - 1) * -1);
    }
    &.h22 {
        animation-delay: calc(10s / 5 * (5 - 2) * -1);
    }
    &.h23 {
        animation-delay: calc(10s / 5 * (5 - 3) * -1);
    }
    &.h24 {
        animation-delay: calc(10s / 5 * (5 - 4) * -1);
    }
    &.h25 {
        animation-delay: calc(10s / 5 * (5 - 5) * -1);
    }
`

const H3 = styled.h3`
    color: white;
    font-size: 2rem;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
    margin: 5px;
`

const HandContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
`


const animateHand = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(10deg);
    }
    100% {
        transform: rotate(0);
    }
`

const Hand = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    position: absolute;
    top: 35px;
    right: 35px;
    transform-origin: bottom;
    animation: ${animateHand} 2s ease-in-out infinite;
`

const sparkleTop = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

const sparkleBottom = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

const HandSparkles = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;

    &.top {
        top: 20px;
        right: 20px;
        animation: ${sparkleTop} 2s ease-in infinite;
    }

    &.bottom {
        bottom: 20px;
        left: 10px;
        animation: ${sparkleBottom} 2s ease-in infinite;
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
            <H1 style={{fontFamily: 'Modak, system-ui', fontWeight: 300}}>Claudia Arias</H1>
            <H2Container>
                <H2Box>
                    <H2 style={{fontFamily: 'M PLUS Code Latin, monospace', color: 'orange'}} className='h21'>Web Developer</H2>
                    <H2 style={{fontFamily: 'DM Mono, monospace', color: '#ff57ae'}} className='h22'>Software Engineer</H2>
                    <H2 style={{fontFamily: 'Assistant, sans-serif', color: '#cc7aff'}} className='h23'>UI Designer</H2>
                    <H2 style={{fontFamily: 'Emilys Candy, serif', color: 'tomato'}} className='h24'>Artist</H2>
                    <H2 style={{fontFamily: 'Covered By Your Grace, cursive', color: 'green'}} className='h25'>Human</H2>
                </H2Box>
            </H2Container>
            <H3>It's very nice to meet you</H3>
        </HomeContainer>
    );
}

export default Home;
