import React, { useState, useRef } from 'react'; 
import styled, { css } from 'styled-components';
import BlinkingCursor from '../BlinkingCursor';

const Container = styled.div`
    position: absolute;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #4fc0ff;
    //NOTE: uses css to interpolate a destructured prop object
    ${({ width, height, top, left }) => css`
        width: 550px; //passed down props
        height: 100px;
        top: 0;
        left: 0;
    `}
    cursor: move;
    margin-top: 50px;
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
const CAH1 = styled.p`
    color: #FF00E6;
    font-size: 64px;
    font-weight: 700;
    text-transform: uppercase;
    position: absolute;
    top: 10px;
    margin: 0;
    left: 20px;
`

const Logo = () => {

    return (
        <Container>
            <div>
                <CAH1>CLAUDIA ARIAS<BlinkingCursor/> </CAH1>
            </div>
            <ResizeHandle className="resize-handle top-left" />
            <ResizeHandle className="resize-handle top-right" />
            <ResizeHandle className="resize-handle bottom-left" />
            <ResizeHandle className="resize-handle bottom-right" />
        </Container>
    )
}

export default Logo