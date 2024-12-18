import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Clau from '../assets/images/Clau.jpg';
import ibm_logo from '../assets/images/ibm-logo.png';
import ga_logo from '../assets/images/ga.png';

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
`;

const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
`;

const Divs = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 2;
`;

const IdCardContainer = styled.div`
    border-radius: 16px;
    background: none;
    background-color: rgba(277, 277, 277, 0.1);
    height: 530px;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
`;


const H2 = styled.h2`
    color: #ececec;
`;

const Pfp = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 30px;
    object-fit: cover;
`;

const InfoContainer = styled.div``;

const Inputs = styled.div`
    width: 380px;
`;

const Input = styled.div`
    width: 100%;
    margin-bottom: -15px;
    color: #ececec;
`;

const Label = styled.p`
    width: 100%;
    color: #e5e5e5;

    &.id-label {
        border-top: 1px solid #B0B0B0;
        color: gray;
    }
    &.righty {
        text-align: right;
    }
    &.skill-label {
        width: 100px;
    }
`;

// id card 
const InfoBox = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-between;
`;

const Skillset = styled.div`
    height: 146px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Skill = styled.div`
    display: flex;
    align-items: center;
    height: 16px;
`;

const Span = styled.span`
    font-weight: 700;
    color: #ffabdd;

    &.year {
        margin-left: auto;
        color: black;
    }
`;

const StatusBarBox = styled.div`
    width: 300px;
    height: 10px;
    border-radius: 10px;
    background-color: grey;
`;

const StatusBar = styled.div`
    height: inherit;
    border-radius: 50px;
    transition: width 2s ease-out;

    &.html {
        background-color: #ffab6f;
    }
    &.css {
        background-color: #6767ff;
    }
    &.js {
        background-color: #ffff92;
    }
    &.react {
        background-color: #78edff;
    }
    &.english {
        background-color: #ff87e9;
    }
    &.ruby {
        background-color: #ff7c6b;
    }
    &.express {
        background-color: #c5d6c1;
    }
    &.spanish {
        background-color: #c9aaff;
    }
    &.mongodb {
        background-color: #78c278;
    }
    &.sql {
        background-color: #bcf3ff;
    }
    &.python {
        background-color: #aeffac;
    }
`;

const Certificates = styled.div`

`;

const Certs = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const Para = styled.p`
    color: black;
    display: flex;
    width: 90%;
    padding-right: 10px;
`;

const Certificate = styled.div`
    background-color: #B0B0B0;
    color: black;
    width: 400px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
`;

const CertificateImg = styled.img`
    width: 40px;
    height: 40px;
`;

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    return (
        <Container>
            <Heading>Get to know me</Heading>
            <Divs>
                <Left>
                    <IdCardContainer>
                        <H2>Identification Card</H2>
                        <Pfp src={Clau} alt="Claudia picture black and #cecece"></Pfp>

                        <InfoContainer>
                            <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece'}}>008088108888</Input>
                            <Label className="id-label">Identification number</Label>

                            <InfoBox>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece'}}>Claudia</Input>
                                    <Label className="id-label">First name</Label>
                                </Inputs>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece', textAlign: 'right'}}>Arias</Input>
                                    <Label className="righty id-label">Last name</Label>
                                </Inputs>
                            </InfoBox>

                            <InfoBox>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece'}}>Female</Input>
                                    <Label className="id-label">Gender</Label>
                                </Inputs>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece', textAlign: 'right'}}>She/Her</Input>
                                    <Label className="righty id-label">Pronouns</Label>
                                </Inputs>
                            </InfoBox>

                            <InfoBox>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece'}}>New York</Input>
                                    <Label className="id-label">City</Label>
                                </Inputs>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece'}}>NY</Input>
                                    <Label className="id-label">State</Label>
                                </Inputs>
                                <Inputs>
                                    <Input style={{letterSpacing: 3, fontSize: 16, fontFamily: 'M PLUS Code Latin, monospace', color: '#cecece', textAlign: 'right'}}>U.S.A</Input>
                                    <Label className="righty id-label">Country</Label>
                                </Inputs>
                            </InfoBox>

                            <InfoBox>
                                <Inputs>
                                    <Input style={{ letterSpacing: 2, fontSize: 18, fontFamily: 'Pacifico, cursive', color: '#cecece'}}>Claudia Arias</Input>
                                    <Label className="id-label">Signature</Label>
                                </Inputs>
                            </InfoBox>
                        </InfoContainer>
                    </IdCardContainer>
                </Left>

                <Right ref={ref}>
                    <H2>My Journey</H2>
                    <Label style={{color: '#B4B4B4'}}>
                        My journey into web development started with a <Span>web design class at Lehman College</Span> while I was pursuing an undergraduate degree in Studio Arts. My curiosity about how websites are created grew, leading me to explore web design on my own for a few years. After much consideration, I decided to shift careers and <Span>enrolled in web development programs at Per Scholas and General Assembly, completing an intensive 18-week course.</Span> Following my passion, I furthered my education by enrolling in <Span> a master's program in computer science at Mercy University.</Span> Here, I honed my skills, delving into the software development life cycle, database management, and quality assurance. I am now eager to showcase my skills and knowledge in a dynamic and supportive environment.
                    </Label>

                    <H2>Skills, tools and Technologies</H2>

                    <Skillset>
                        <Skill>
                            <Label className="skill-label html">HTML</Label>
                            <StatusBarBox>
                                <StatusBar className="html" style={{ width: inView ? '95%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label css">CSS</Label>
                            <StatusBarBox>
                                <StatusBar className="css" style={{ width: inView ? '89%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label js">Javascript</Label>
                            <StatusBarBox>
                                <StatusBar className="js" style={{ width: inView ? '88%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label react">React</Label>
                            <StatusBarBox>
                                <StatusBar className="react" style={{ width: inView ? '76%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label python">Python</Label>
                            <StatusBarBox>
                                <StatusBar className="python" style={{ width: inView ? '85%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label sql">SQL</Label>
                            <StatusBarBox>
                                <StatusBar className="sql" style={{ width: inView ? '87%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label mongodb">MongoDB</Label>
                            <StatusBarBox>
                                <StatusBar className="mongodb" style={{ width: inView ? '77%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                        <Skill>
                            <Label className="skill-label ruby">Ruby</Label>
                            <StatusBarBox>
                                <StatusBar className="ruby" style={{ width: inView ? '70%' : '0%' }}></StatusBar>
                            </StatusBarBox>
                        </Skill>
                    </Skillset>

                    <Certificates>
                        <H2>Certificates</H2>
                        <Certs>
                            <Certificate>
                                <CertificateImg src={ga_logo}></CertificateImg>
                                <Para className="certPara">
                                    Web Developement Immersive <Span className="year">2019</Span>
                                </Para>
                            </Certificate>
                            <Certificate>
                                <CertificateImg src={ibm_logo}></CertificateImg>
                                <Para className="certPara">
                                    IBM Data Science Practitioner <Span className="year">2024</Span>
                                </Para>
                            </Certificate>
                        </Certs>
                    </Certificates>
                </Right>
            </Divs>
        </Container>
    );
};

export default About;
