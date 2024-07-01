import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tm_icon from '../assets/images/tm-icon.png'

const Nav = styled.div`
`

const Logo = styled.img`
    
`

const Ul = styled.ul`
    
`

const ListItem = styled.li`
    
`


const Navbar = () => {
    return (
        <Nav>
            <Logo src={tm_icon}></Logo>
            <Ul>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/projects">Projects</Link>
                </ListItem>
                <ListItem>
                    <Link to="/skills">Skills</Link>
                </ListItem>
                <ListItem>
                    <Link to="/contact">Contact</Link>
                </ListItem>
            </Ul>
        </Nav>
    )
}

export default Navbar