import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import setup from '../helper-functions/setup';
import { basicShuffle } from '../helper-functions/shuffle';
import ElementDeck from '../layout/ElementDeck';
import ElementPool from '../layout/ElementPool';
import Field from '../layout/Field';
import MainHand from '../layout/MainHand';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 40px 12%;
    margin-bottom: 300px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0px;
`;

const Hand = styled.div`
    flex: 2;
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
            {players && <Field orientation='top' field={players[1].field} />}
            <StyledRow>
                <Hand />
                {elementPool && <ElementPool cards={elementPool} numOfPlayers={players.length} />}
                {elementDeck && <ElementDeck cards={elementDeck} />}
                <Hand />
            </StyledRow>
            {players && <Field orientation='bottom' field={players[0].field} />}
            {players && <MainHand cards={players[0].hand} name={players[0].name} fieldData={players[0].field} />}
        </StyledContainer>
    )
}