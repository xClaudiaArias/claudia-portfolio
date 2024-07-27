import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import { Person2 } from '@mui/icons-material';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CallIcon from '@mui/icons-material/Call';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import CA_logo from '../assets/images/Ca-logo.png'
import about_icon from '../assets/images/About.png'
import contact_icon from '../assets/images/Contact-logo.png'
import home_icon from '../assets/images/Home.png'
import hand_icon from '../assets/images/Hand.png'
import bottom_hand_sparkle from '../assets/images/Hand-sparkle-bottom.png'
import top_hand_sparkle from '../assets/images/Hand-sparkle-top.png'
import down_arrow from '../assets/images/Down-arrow.png'
import project_icon from '../assets/images/Project-logo.png'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    height: 40px;
    padding: 10px 0;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 90%;
    margin-inline: auto;
    z-index: 1000;
`;

const Logo = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    width: 450px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const ListItem = styled.li``;

const StyledLink = styled(ScrollLink)`
    text-decoration: none;
    color: white;
    display: flex;
    height: 30px;
    font-weight: 300;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }
`;

const Socials = styled.div`
    height: 36px;
    width: 150px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const SocialLink = styled.a`
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavIcons = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 10px;
`

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <NavIcons src={CA_logo} alt="Claudia's logo"/>
            </Logo>
            <Ul>
                <ListItem>
                    <StyledLink to="home" smooth duration={500}>
                        <NavIcons src={home_icon} alt="home icon" />
                        Home
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="about" smooth duration={500}>
                        <NavIcons src={about_icon} alt="about icon" />
                        About
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="projects" smooth duration={500}>
                        <NavIcons src={project_icon} alt="project icon" />
                        Projects
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="contact" smooth duration={500}>
                        <NavIcons src={contact_icon} alt="contact icon" />
                        Contact
                    </StyledLink>
                </ListItem>
            </Ul>

            <Socials>
                <SocialLink href="#">
                    <LinkedInIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
                <SocialLink href="#">
                    <FacebookIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
                <SocialLink href="#">
                    <XIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
            </Socials>
        </Nav>
    );
};

export default Navbar;
