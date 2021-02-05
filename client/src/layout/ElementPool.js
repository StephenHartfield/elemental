import React from 'react';
import styled from 'styled-components';
import ElementCard from '../cards/ElementCard';
import setupByPlayers from '../Constants/setupLayoutByPlayers';
import StandardHeader from '../Constants/StandardHeader';

const StyledLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 3;
    justify-content: center;
`;
const StyledRow = styled.div`
    padding: 2px;
    width: 90%;
    display: flex;
    margin: 2px;
    justify-content: center;
`;
const StyledColumn = styled.div`
    padding: 0px 2px;
    margin: 0px 2px
    width: 50px;
`;

export default function ElementPool({cards, numOfPlayers}) {

    return (
        <StyledLayout>
            <StandardHeader>Element Pool</StandardHeader>
            {[...Array(setupByPlayers[numOfPlayers].poolLayout.rows)].map((row, idx) => (
                <StyledRow key={`row${idx}`}>
                    {[...Array(setupByPlayers[numOfPlayers].poolLayout.columns)].map((column, cidx) => (
                        <StyledColumn key={`column${cidx}`}>
                            {cards && cards.map((card, cardIdx) => {
                                if(cardIdx === idx+cidx) {
                                    return <ElementCard key={`pool${cardIdx}`} card={card} />;
                                }
                            })}
                        </StyledColumn>
                    ))}
                </StyledRow>
            ))}
        </StyledLayout>
    )
}