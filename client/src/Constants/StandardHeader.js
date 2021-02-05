import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h3`
    font-size: 16px;
    margin: ${props => props.nomargin ? '0px' : ''};
`;

export default function StandardHeader(props) {

    return <StyledHeader {...props}>{props.children}</StyledHeader>
}