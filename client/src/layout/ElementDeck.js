import React from 'react';
import styled from 'styled-components';
import ElementCard from '../cards/ElementCard';
import StandardHeader from '../Constants/StandardHeader';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function ElementDeck({ cards }) {
    const isShown = false;

    if (isShown) {
        return (
            <StyledLayout>
                <StandardHeader>Element Deck</StandardHeader>
                {cards && cards.map((card, idx) => idx === 0 ?
                    <ElementCard card={card} faceUp={false} number={cards.length} key={`edeck${idx}`} />
                    :
                    null
                )}
            </StyledLayout>
        )
    } else { 
        return null;
    }
}