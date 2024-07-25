import React from 'react'
import styled from 'styled-components'
import Clau from '../assets/images/Clau.jpg'
import ibm_logo from '../assets/images/ibm-logo.png'
import ga_logo from '../assets/images/ga.png'

const Container = styled.div`
    margin-top: 80px;
    color: white;
    height: 65vh;
`

const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
`
const Divs = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 2;
`

const IdCardContainer = styled.div`
    border: 1px solid white;
    border-radius: 16px;
    background: none;
    height: 600px;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
`

const Logo = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid white;
    border-radius: 50%;
`

const H2 = styled.h2`
    
`

const Pfp = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid white;
    margin-bottom: 30px;
    object-fit: cover;
`

const InfoContainer = styled.div`
    
`

const Inputs = styled.div`
    width: 380px;
`

const Input= styled.div`
    width: 100%;
    margin-bottom: -10px;
    margin-top: 30px;

`

const Label = styled.p`
    width: 100%;

    &.id-label {
        border-top: 1px solid white;
    }
    &.righty {
        text-align: right;
    }

    &.skill-label {
        width: 100px;
    }
`

const InfoBox = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-between;
`

const Skillset = styled.div`
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Skill = styled.div`
    display: flex;
    align-items: center;
`

const Span = styled.span`
    font-weight: 700;
    color: #ffabdd;

    &.year {
        margin-left: auto;
        color: black;
    }
`

const StatusBarBox = styled.div`
    width: 300px;
    height: 10px;
    border-radius: 10px;
    background-color: grey;
`

const StatusBar = styled.div`
    
`

const Certificates = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Para = styled.p`
    color: black;
    display: flex;
    width: 90%;
    padding-right: 10px;
`

const Certificate = styled.div`
    background-color: white;
    color: black;
    width: 400px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
`

const CertificateImg = styled.img`
    width: 40px;
    height: 40px;
`



// TODO: include certificates 



const About = () => {
    return (
        <Container>
            <Heading>Get to know me</Heading>
            <Divs>
                <Left>
                    <IdCardContainer>
                        <Logo></Logo>
                        <H2>Identification Card</H2>
                        <Pfp src={Clau} alt="Claudia picture black and white"></Pfp>

                        <InfoContainer>

                            {/* id num  */}
                            <Input></Input>
                            <Label className="id-label">Identification number</Label>

                            {/* name and last name  */}
                            <InfoBox>
                                <Inputs>
                                    <Input></Input>
                                    <Label className="id-label">First name</Label>
                                </Inputs>
                                <Inputs>
                                    <Input></Input>
                                    <Label className='righty id-label'>Last name</Label>
                                </Inputs>
                            </InfoBox>

                            {/* gender pronouns */}
                            <InfoBox>
                                <Inputs>
                                    <Input></Input>
                                    <Label className="id-label">Gender</Label>
                                </Inputs>
                                <Inputs>
                                    <Input></Input>
                                    <Label className='righty id-label'>Pronouns</Label>
                                </Inputs>
                            </InfoBox>

                            {/* city, state, country */}
                            <InfoBox>
                                <Inputs>
                                    <Input></Input>
                                    <Label className="id-label">City</Label>
                                </Inputs>
                                <Inputs>
                                    <Input></Input>
                                    <Label className="id-label">State</Label>
                                </Inputs>
                                <Inputs>
                                    <Input></Input>
                                    <Label className='righty id-label'>Country</Label>
                                </Inputs>
                            </InfoBox>

                            {/* signature  */}
                            <InfoBox>
                                <Inputs>
                                    <Input></Input>
                                    <Label className="id-label">Signature</Label>
                                </Inputs>
                            </InfoBox>
                        </InfoContainer>
                    </IdCardContainer>
                </Left>

                {/* right  */}
                <Right>
                    <H2>My Journey</H2>

                    <Label>My journey into web development started with a <Span>web design class at Lehman College</Span> while I was pursuing an undergraduate degree in Studio Arts. My curiosity about how websites are created grew, leading me to explore web design on my own for a few years. After much consideration, I decided to shift careers and <Span>enrolled in web development programs at Per Scholas and General Assembly, completing an intensive 18-week course. </Span>

                    Following my passion, I furthered my education by enrolling in <Span> a master's program in computer science at Mercy University. </Span>Here, I honed my skills, delving into the software development life cycle, database management, and quality assurance. I am now eager to showcase my skills and knowledge in a dynamic and supportive environment.
                    </Label>

                    <H2>Skills, tools and Technologies</H2>

                    <Skillset>
                        <Skill>
                            <Label className="skill-label">HTML</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">CSS</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">Javascript</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">React</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">Python</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">SQL</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">MongoDB</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">Ruby</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">English</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label">Spanish</Label>
                            <StatusBarBox>
                                <StatusBar></StatusBar>
                            </StatusBarBox>
                        </Skill>
                    </Skillset>

                    <Certificates>
                        <Certificate>
                            <CertificateImg src={ga_logo}></CertificateImg>
                            <Para className="certPara">Web Developement Immersive <Span className='year'>2019</Span></Para>
                        </Certificate>
                        <Certificate>
                            <CertificateImg src={ibm_logo}></CertificateImg>
                            <Para className="certPara">IBM Data Science Practitioner <Span className='year'>2024</Span></Para>
                        </Certificate>
                    </Certificates>
                </Right>
            </Divs>
        </Container>
    )
}

export default About