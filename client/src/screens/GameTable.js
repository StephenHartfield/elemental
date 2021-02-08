import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GameContext from '../context/gameContext';
import setup from '../helper-functions/setup';
import { basicShuffle } from '../helper-functions/shuffle';
import CardOverlay from '../layout/CardOverlay';
import ElementDeck from '../layout/ElementDeck';
import ElementPool from '../layout/ElementPool';
import Field from '../layout/Field';
import LogDisplay from '../layout/LogDisplay';
import MainHand from '../layout/MainHand';
import PlayerData from '../layout/PlayerData';

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
    const [elementDeck, setElementDeck] = useState(null);
    const [players, setPlayers] = useState(null);
    const [overlayCard, setOverlayCard] = useState(null);
    const gameContext = useContext(GameContext);

    useEffect(() => {
        if(cards) {
            const shuffledCards = basicShuffle(cards);
            const initialSetUp = setup(shuffledCards);
            
            setElementPool(initialSetUp.elementPool);
            setElementDeck(initialSetUp.elementDeck);
            setPlayers(initialSetUp.players);
            gameContext.setup(initialSetUp);
        }
    }, [cards]);

    const showOverlay = (card) => {
        setOverlayCard(card);
    }

    return (
        <StyledContainer>
            {players && <Field orientation='top' showOverlay={showOverlay} field={players[1].field} />}
            <StyledRow>
                <Hand />
                {elementPool && <ElementPool cards={elementPool} numOfPlayers={players.length} />}
                {elementDeck && <ElementDeck cards={elementDeck} />}
                <Hand />
            </StyledRow>
            <LogDisplay />
            {players && <Field orientation='bottom' showOverlay={showOverlay} field={players[0].field} />}
            {players && <MainHand cards={players[0].hand} showOverlay={showOverlay} name={players[0].name} />}
            {players && <PlayerData playerData={players} />}
            {overlayCard && <CardOverlay card={overlayCard} showOverlay={showOverlay} />}
        </StyledContainer>
    )
}