import React from 'react';
import styled from 'styled-components';

const Fixed = styled.div`
    position: fixed;
    top 40%;
    left: 40%;
    background-color: orange;
    width: 200px;
    height: 200px;
`;

export default function CardOverlay(props) {

    return (
        <Fixed>
            {props.children}
        </Fixed>
    )
}