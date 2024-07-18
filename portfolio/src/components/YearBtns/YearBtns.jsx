import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 280px;
    justify-content: space-between;
    position: absolute;
    background: none;
    margin-top: 490px;
    padding: 0 15px;
    margin-left: 40px;
`

const Button = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4fc0ff;
    font-size: 2.5rem;
    font-weight: 700;
    width: 40px;
    height: 60px;
    background-color: white;
    border-radius: 8px;

    &:before {
        content: ' ';
        display: block;
        background: white;
        border: 1px solid #4fc0ff;
        width: 40px;
        height: 60px;
        position: absolute;
        top: -0.5px;
        left: -10px;
        transform: skew(-9deg);
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        z-index: -1;
        box-shadow: 4px 4px 0 rgba(0,128,200,1);
    }
    &:after {
        content: ' ';
        display: block;
        background: white;
        border: 1px solid #4fc0ff;
        width: 40px;
        height: 60px;
        position: absolute;
        top: -0.5px;
        right: -10px;
        transform: skew(9deg);
        border-radius: 8px;
        z-index: -1;
        box-shadow: 4px 4px 0 rgba(0,128,200,1);
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
    }
`

const YearBtns = () => {
    return (
        <Container>
            <Button>2</Button>
            <Button>0</Button>
            <Button>2</Button>
            <Button>4</Button>
        </Container>
    );
}

export default YearBtns;
