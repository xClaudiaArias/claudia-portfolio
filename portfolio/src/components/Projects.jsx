import React from 'react'
import styled, { keyframes } from 'styled-components';
import instant from '../assets/images/instant.png'
import instant2 from '../assets/images/instant-2.png'
import instant3 from '../assets/images/instant-3.png'

const Container = styled.div`
    margin-top: 80px;
    color: white;
`

const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
`
const ProjectCards = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    justify-content: space-between;
`

const ProjectCard = styled.div`
    height: 600px;
    width: 450px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 8px;
    &.instant {
        background: url(${instant});
        background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
    &.instant2 {
        background: url(${instant2});
        background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
    &.instant3 {
        background: url(${instant3});
        background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    }
`

const ProjectInfo = styled.div`
    background: black;
    background: linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%);
    padding: 10px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    backdrop-filter: blur(1px);
    filter: drop-shadow(-2px -1px 5px rgba(0,0,0,.5));
`;

const H2 = styled.h2`
    margin: 0;
    margin-bottom: 5px;
    width: 100%;
    display: flex;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ProjectHeader = styled.div`
    height: 100px;
`

const Span = styled.span`
    font-weight: 700;
    color: #ffffff;
    margin-left: auto;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ProjectBody = styled.div`
    width: 100%;
    height: 120px;
`
const ProjectBtns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
`

const Button1 = styled.button`
    width: 200px;
    color: black;
    border-radius: 50px;
    background-color: white;
    height: 38px;
    border: none;
    font-weight: 16px;
    cursor: pointer;
`

const Button2 = styled.button`
    width: 200px;
    background-color: black;
    border: 1px solid white;
    border-radius: 50px;
    color: white;
    height: 38px;
    font-weight: 16px;
    cursor: pointer;
`
const Marquee = styled.div`
    width: 100%;
    height: 40px;
    overflow: hidden;
`

const MarqueeBox = styled.div`
    width: calc((120px * 8) + 64px);
    height: 38px;
    position: relative;
    margin-inline: auto;
`
const scrollLeft = keyframes`
    to {
        left: -120px;
    }
` 
const MarqueeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    /* border: 1px solid white; */
    font-size: 14px;
    border-radius: 50px;
    margin-right: 10px;
    width: 120px;
    height: 28px;
    position: absolute;
    left: 100%;
    animation: ${scrollLeft} 30s linear infinite;

    &.html {
        border-color: #ffab6f;
        color: #ffab6f;
    }

    &.css {
        border-color: #6767ff;
        color:#6767ff;
    }

    &.js {
        border-color: #ffff92;
        color: #ffff92;
    }

    &.react {
        border-color: #78edff;
        color: #78edff;
    }

    &.jsx {
        border-color: #d1ffa4;
        color: #d1ffa4;
    }

    &.openweathermap {
        border-color: #ff9060;
        color: #ff9060;
    }

    &.express {
        border-color: #aca39f;
        color: #aca39f;
    }

    &.api {
        border-color: #dea5ff;
        color: #dea5ff;
    }

    &.mongodb {
        border-color: #78c278;
        color:  #78c278;
    }

    &.nosql {
        border-color: #84c6d4;
        color: #84c6d4;
    }

    &.redux {
        border-color: #d29eff;
        color:#d29eff;
    }

    &.crud {
        border-color: #feaeff;
        color: #feaeff;
    }

    &.ejs {
        border-color: #a3aacb;
        color: #a3aacb;
    }

    &.marquee1 {
        animation-delay: calc(30s / 8 * (8 - 1) * -1)
    }
    &.marquee2 {
        animation-delay: calc(30s / 8 * (8 - 2) * -1)
    }
    &.marquee3 {
        animation-delay: calc(30s / 8 * (8 - 3) * -1)
    }
    &.marquee4 {
        animation-delay: calc(30s / 8 * (8 - 4) * -1)
    }
    &.marquee5 {
        animation-delay: calc(30s / 8 * (8 - 5) * -1)
    }
    &.marquee6 {
        animation-delay: calc(30s / 8 * (8 - 6) * -1)
    }
    &.marquee7 {
        animation-delay: calc(30s / 8 * (8 - 7) * -1)
    }
    &.marquee8 {
        animation-delay: calc(30s / 8 * (8 - 8) * -1)
    }
`


const Projects = () => {
    return (
        <Container>
            <Heading>Projects</Heading>
            <ProjectCards>
                <ProjectCard className='instant'>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>Cast - Weather Application<Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>This intuitive weather app allows users to effortlessly search for real-time weather data in any city of their choice using the OpenWeather API. Get accurate forecasts, current conditions, and more with a simple city name input.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <Marquee>
                            <MarqueeBox>
                                <MarqueeItem className='marquee1 html'>HTML</MarqueeItem>
                                <MarqueeItem className='marquee2 css'>CSS</MarqueeItem>
                                <MarqueeItem className='marquee3 react'>React</MarqueeItem>
                                <MarqueeItem className='marquee4 js'>Javascript</MarqueeItem>
                                <MarqueeItem className='marquee5 jsx'>JSX</MarqueeItem>
                                <MarqueeItem className='marquee6 openweathermap'>Openweathermap</MarqueeItem>
                                <MarqueeItem className='marquee7 express'>Express</MarqueeItem>
                                <MarqueeItem className='marquee8 api'>API</MarqueeItem>
                            </MarqueeBox>
                        </Marquee>
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>

                {/* 2 */}

                <ProjectCard className='instant2'>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>CHIQUITA - E-commerce website <Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>CHIQUITA is a digital platform to showcase Iselsa's creations to a wider audience and facilitate online sales. This website aims to expand the reach of her business allowing customers to purchase her handmade creations.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <Marquee>
                            <MarqueeBox>
                                <MarqueeItem className='marquee1 html'>HTML</MarqueeItem>
                                <MarqueeItem className='marquee2 css'>CSS</MarqueeItem>
                                <MarqueeItem className='marquee3 react'>React</MarqueeItem>
                                <MarqueeItem className='marquee4 js'>Javascript</MarqueeItem>
                                <MarqueeItem className='marquee5 jsx'>JSX</MarqueeItem>
                                <MarqueeItem className='marquee6 mongodb'>MongoDB</MarqueeItem>
                                <MarqueeItem className='marquee7 express'>Express</MarqueeItem>
                                <MarqueeItem className='marquee8 redux'>Redux</MarqueeItem>
                            </MarqueeBox>
                        </Marquee>
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>

                {/* 3 */}

                <ProjectCard className='instant3'>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>To Do - Task management website <Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>Our task management app offers a seamless CRUD interface for users to manage their to-do lists effectively. Easily add, delete, and mark tasks as completed, helping you stay organized and productive.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <Marquee>
                            <MarqueeBox>
                                <MarqueeItem className='marquee1 html'>HTML</MarqueeItem>
                                <MarqueeItem className='marquee2 css'>CSS</MarqueeItem>
                                <MarqueeItem className='marquee3 express'>Express</MarqueeItem>
                                <MarqueeItem className='marquee4 js'>Javascript</MarqueeItem>
                                <MarqueeItem className='marquee5 ejs'>EJS</MarqueeItem>
                                <MarqueeItem className='marquee6 crud'>CRUD</MarqueeItem>
                                <MarqueeItem className='marquee7 mongodb'>MongoDB</MarqueeItem>
                                <MarqueeItem className='marquee8 nosql'>NoSQL</MarqueeItem>
                            </MarqueeBox>
                        </Marquee>
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>
            </ProjectCards>
        </Container>
    )
}

export default Projects