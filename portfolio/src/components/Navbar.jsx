import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const LogoName = styled.span`
    margin-left: 10px;
    font-size: 16px;
    color: #FF00E6;
    text-transform: uppercase;
`;

const Ul = styled.ul`
    display: flex;
    width: 450px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const ListItem = styled.li`
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;
    color: ${({ isActive }) => (isActive ? '#FF00E6' : '#2F2E3B' )};
    text-transform: uppercase;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

    &:hover {
        color: #FF00E6;
    }
`;

const Navbar = () => {
    const location = useLocation();
    const pathname= location.pathname

    return (
        <Nav>
            <Logo>
                <StarBorderIcon style={{ fill: "#FF00E6" }} />
                <LogoName>Claudia Arias</LogoName>
            </Logo>
            <Ul>
                <ListItem>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/about" isActive={pathname === '/about'}>
                    About
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/projects" isActive={pathname === '/projects'}>
                    Projects
                </StyledLink>
                </ListItem>
                <ListItem>
                <StyledLink to="/contact" isActive={pathname === '/contact'}>
                    Contact
                </StyledLink>
                </ListItem>
            </Ul>
        </Nav>
    );
};

export default Navbar;
