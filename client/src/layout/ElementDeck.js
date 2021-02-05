import React from 'react';
import styled from 'styled-components';
import ElementCard from '../cards/ElementCard';

const StyledLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 5;
    justify-content: center;
`;

export default function ElementDeck({cards}) {

    return (
        <StyledLayout>
            <ElementCard faceUp={false} number={cards.length} />
        </StyledLayout>
    )
}