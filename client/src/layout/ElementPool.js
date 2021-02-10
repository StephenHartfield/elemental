import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ElementCard from '../cards/ElementCard';
import GameContext from '../context/gameContext';

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
    const gameContext = useContext(GameContext);
    const ePool = useRef();

    useEffect(() => {
        ePool.current.scrollIntoView({behavior: "smooth"});
    }, [gameContext.focusBool]);

    return (
        <StyledLayout ref={ePool}>
            {cards && cards.map((row, idx) => (
                <StyledRow key={`row${idx}`}>
                    {row.map((column, cidx) => (
                        <StyledColumn key={`column${cidx}`}>
                            <ElementCard card={column} />
                        </StyledColumn>
                    ))}
                </StyledRow>
            ))}
        </StyledLayout>
    )
}