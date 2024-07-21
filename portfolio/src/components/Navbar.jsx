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

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    height: 40px;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
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

const Navbar = () => {
    return (
        <Nav>
            <Logo>
                <CloudQueueIcon style={{width: 24, height: 24, fill: 'white'}} />
            </Logo>
            <Ul>
                <ListItem>
                    <StyledLink to="home" smooth duration={500}>
                        <HomeIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                        Home
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="about" smooth duration={500}>
                        <Person2 style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                        About
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="projects" smooth duration={500}>
                        <BorderAllIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                        Projects
                    </StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to="contact" smooth duration={500}>
                        <CallIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
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
