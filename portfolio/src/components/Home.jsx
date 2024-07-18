import React from 'react'; 
import styled from 'styled-components';
import Logo from './Logo/Logo';
import WBDev from './WBDev/WBDev';
import UIDes from './UIDes/UIDes';
import YearBtns from './YearBtns/YearBtns';

const HomeContainer = styled.div`
    position: relative;
    z-index: 1;
    min-height: 80vh; 
    text-align: center;
    background: none;
`;

const Home = () => {

    return (
        <HomeContainer>
            <Logo />
            <WBDev />
            <UIDes />
            <YearBtns />
            {/* TODO: add arrows with this clip path -> clip-path: polygon(54% 0, 97% 100%, 51% 81%, 0 100%); */}
        </HomeContainer>
    );
}

export default Home;
