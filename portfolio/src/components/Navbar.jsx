import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
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
`;

const Logo = styled.div`
    /* border: 1px solid white; */
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    width: 450px;
    height:40px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const ListItem = styled.li`
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    height:30px;
    font-weight: 300;
    align-items: center;
    font-size: 14px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};

    &:hover {
        font-weight: 700;
    }
`;

const Socials = styled.div`
    /* border: 1px solid white; */
    height: 36px;
    width: 150px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const SocialLink = styled(Link)`
    /* border: 1px solid white; */
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Navbar = () => {
    const location = useLocation();
    const pathname= location.pathname

    return (
        <Nav>
            <Logo>
                <CloudQueueIcon style={{width: 24, height: 24, fill: 'white'}} />
            </Logo>
            <Ul>
                <ListItem>
                <StyledLink to="/" isActive={pathname === '/'}>
                    <HomeIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                    Home
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/about" isActive={pathname === '/about'}>
                    <Person2 style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                    About
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/projects" isActive={pathname === '/projects'}>
                    <BorderAllIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                    Projects
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/contact" isActive={pathname === '/contact'}>
                    <CallIcon style={{width: 24, height: 24, fill: 'white', paddingRight: 10}} />
                    Contact
                </StyledLink>
                </ListItem>
            </Ul>

            <Socials>
                <SocialLink>
                    <LinkedInIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
                <SocialLink>
                    <FacebookIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
                <SocialLink>
                    <XIcon style={{width: 24, height: 24, fill: 'white'}} />
                </SocialLink>
            </Socials>
        </Nav>
    );
};

export default Navbar;
