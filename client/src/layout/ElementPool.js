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

    console.log(cards);

    return (
        <StyledLayout>
            <StandardHeader>Element Pool</StandardHeader>
            {cards && cards.map((row, idx) => (
                <StyledRow key={`row${idx}`}>
                    {row.map((column, cidx) => (
                        <StyledColumn key={`column${cidx}`}>
                            <ElementCard card={column} faceUp={false} />
                        </StyledColumn>
                    ))}
                </StyledRow>
            ))}
        </StyledLayout>
    )
}