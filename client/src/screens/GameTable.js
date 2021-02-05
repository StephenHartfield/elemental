import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import setup from '../helper-functions/setup';
import { basicShuffle } from '../helper-functions/shuffle';
import ElementDeck from '../layout/ElementDeck';
import ElementPool from '../layout/ElementPool';
import MainHand from '../layout/MainHand';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 30px;
`;

const StyledRow = styled.div`
    display: flex;
`;

const Hand = styled.div`
    flex: 3;
`;

export default function GameTable({cards}) {
    const [elementPool, setElementPool] = useState(null);
    const [elementDeck, setelementDeck] = useState(null);
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        if(cards) {
            const shuffledCards = basicShuffle(cards);
            const initialSetUp = setup(shuffledCards);
            
            setElementPool(initialSetUp.elementPool);
            setelementDeck(initialSetUp.elementDeck);
            setPlayers(initialSetUp.players);
        }
    }, [cards]);

    return (
        <StyledContainer>
            <StyledRow>
                <Hand />
                {elementPool && <ElementPool cards={elementPool} numOfPlayers={players.length} />}
                <div>
                    {elementDeck && <ElementDeck cards={elementDeck} />}
                </div>
            </StyledRow>
            {players && <MainHand cards={players[0].hand} />}
        </StyledContainer>
    )
}