import React, { useState, useRef } from 'react'; 
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: absolute;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #4fc0ff;
    //NOTE: uses css to interpolate a destructured prop object
    ${({ width, height, top, left }) => css`
        width: 350px; //passed down props
        height: 80px;
        top: 0;
        left: 0;
    `}
    cursor: move;
    margin-top: 300px;
    margin-left: 100px;
`

const ResizeHandle = styled.div` // nested component
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border: 2px solid #4fc0ff;
    z-index: 10;

    &.top-left { // class selector 
        top: -5px;
        left: -5px;
        cursor: nwse-resize;
    }
    &.top-right {
        top: -5px;
        right: -5px;
        cursor: nesw-resize;
    }
    &.bottom-left {
        bottom: -5px;
        left: -5px;
        cursor: nesw-resize;
    }
    &.bottom-right {
        bottom: -5px;
        right: -5px;
        cursor: nwse-resize;
    }
`
const UIH1 = styled.p`
    color: ${({ color }) => color};
    font-size: 48px;
    font-weight: 300;
    text-transform: uppercase;
    position: absolute;
    top: 10px;
    margin: 0;
    left: 20px;
`
const Buttons = styled.div`
    position: absolute;
    bottom: -40px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
`;

const Button = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.08);
    border: none;
    cursor: pointer;

    &.pink { background-color: #FF0099; }
    &.blue { background-color: #4FC0FF; }
    &.orange { background-color: #ff994f; }
    &.purple { background-color: #B297FF; }
`;

const UIDes = () => {
    const [color, setColor] = useState("#B297FF")

    return (
        <Container>
            <div>
                <UIH1 color={color}>UI DESIGNER</UIH1>
            </div>
            <ResizeHandle className="resize-handle top-left" />
            <ResizeHandle className="resize-handle top-right" />
            <ResizeHandle className="resize-handle bottom-left" />
            <ResizeHandle className="resize-handle bottom-right" />

            <Buttons>
                <Button className='pink' onClick={() => setColor('#FF0099')}></Button>
                <Button className='blue' onClick={() => setColor('#4FC0FF')}></Button>
                <Button className='orange' onClick={() => setColor('#ff994f')}></Button>
                <Button className='purple' onClick={() => setColor('#B297FF')}></Button>
            </Buttons>
        </Container>
    )
}

export default UIDes 