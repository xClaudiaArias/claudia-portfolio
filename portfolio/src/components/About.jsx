import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components'
import python_logo from '../assets/images/Python.png'
import js_logo from '../assets/images/JavaScript-Logo-2.png'
import html_logo from '../assets/images/html.png'
import css_logo from '../assets/images/CSS-Logo.png'
import ruby_logo from '../assets/images/Ruby_logo.png'
import figma_logo from '../assets/images/figma.webp'
import ga_logo from '../assets/images/ga.png'
import ibm_logo from '../assets/images/ibm-logo.png'
import mongo_logo from '../assets/images/mongo.png'
import nodejs_logo from '../assets/images/nodejs.png'
import illustrator_logo from '../assets/images/Illustrator_Logo.png'
import ps_logo from '../assets/images/ps.png'
import sql_logo from '../assets/images/sql-database-sql-azure-icon-1955x2048-4pmty46t.png'
import postgres_logo from '../assets/images/PostgreSQL.png'
import react_logo from '../assets/images/React.png'
import xd_logo from '../assets/images/xd.png'

const Container = styled.div`

`

const Left = styled.div`

`

const Right = styled.div`

`

const Title = styled.div`

`

const Message = styled.div`

`

const Summary = styled.div`
    display: flex;
`

const Education = styled.div`
    display: flex;
`

const H1 = styled.div`
    font-weight: 700;
    color: #2f2e3b;
    font-size: 32px;
    padding: 10px 0;
`

const Certificates = styled.div`
    background-color: red;
`

const Certificate = styled.div`
    background-color: gray;
    display: flex;
`

const Links = styled.div`

`

const Skills = styled.div`

`

const Skill = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    z-index: 0;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(255, 0, 179, 0.5), rgba(0, 162, 255, 0.5));
        z-index: -1;
        filter: blur(10px); 
        border-radius: 16px;
        margin: -10px; 
    }
`

const SkillImg = styled.img`
    width: inherit;
    height: inherit;
    object-fit: contain;
    background-color: white;
    border-radius: 16px;
    padding: 15px;
`

const Decor = styled.div`

`

const Timeline = styled.div`

`

const Line = styled.div`
    width: 2px;
    height: 100px;
    background-color: #4fc0ff;
`
const H2 = styled.div`
    
`

const TLTitle = styled.div`
    
`

const Year = styled.div`
    
`

const Degree = styled.div`
    
`

const Desc = styled.div`
    
`

const CertImg = styled.img`
    width: 70px;
    height: 70px;
`

const CertTitle = styled.div`
    
`

const Cert = styled.div`
    
`

const CertDesc = styled.div`
    
`

const Span = styled.span`
    font-weight: 700;
    color: #FF0099;
`


const About = () => {
    return (
        <Container>

        </Container>
    )
}

export default About