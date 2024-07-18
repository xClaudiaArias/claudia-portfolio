import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Facebook, Twitter } from '@mui/icons-material';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`

const FooterLogo = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    color: #c2c0e1;
    font-weight: 300;
`

const FooterNav = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    padding-left: 0;
    gap: 10px;
`

const FooterNavItem = styled.li`

`
const FooterLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border: 2px solid #FF00E6;
    border-radius: 50%;
    cursor: pointer;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>CLAUDIA ARIAS</FooterLogo>
            <FooterNav>
                <FooterNavItem>
                    <FooterLink to="/">
                        <LinkedInIcon style={{fill: '#FF00E6'}} />
                    </FooterLink>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterLink to="/">
                        <Facebook  style={{fill: '#FF00E6'}}/>
                    </FooterLink>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterLink to="/">
                        <Twitter style={{fill: '#FF00E6'}} />
                    </FooterLink>
                </FooterNavItem>
            </FooterNav>
        </FooterContainer>
    )
}

export default Footer