import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;

const BlinkingCursor = styled.span`
    display: inline-block;
    width: 4px;
    height: 1em;
    background-color: #FF00E6;
    margin-left: 2px;
    animation: ${blink} 1s infinite;
`;

export default BlinkingCursor;
