import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: ${props => props.inOverlay ? 
        '100%' : 
        props.item ? 
            '150px' : 
            props.isAction ? 
                '100px' :
                '65px'};
    height: ${props => props.inOverlay ? 
        '90%' : 
        props.item ? 
            '200px' : 
            props.isAction ? 
                '150px' :
                '100px'};
    background-color: ${props => props.faceUp ? 'white' : 'gray'};
    border-radius: 5px;
    border: ${props => props.highlight ? props.inOverlay ? "" : '5px solid yellow' : ""};
    transition: all .4s ease-in-out;
    transform: ${props => props.highlight ? 'scale(1.2)' : 'scale(1)'};
    transition: opacity 1s ease-out left 1s ease-out;
    opacity: ${props => props.isFading ? 0 : 1};
`;

export default function CardContainer(props) {

    return <StyledContainer {...props}>{props.children}</StyledContainer> 
}