import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GameContext from '../context/gameContext';
import setup from '../helper-functions/setup';
import { basicShuffle } from '../helper-functions/shuffle';
import CardOverlay from '../layout/CardOverlay';
import ElementDeck from '../layout/ElementDeck';
import ElementPool from '../layout/ElementPool';
import Field from '../layout/Field';
import Help from '../layout/Help';
import LogDisplay from '../layout/LogDisplay';
import MainHand from '../layout/MainHand';
import PlayerData from '../layout/PlayerData';
import UtilityOverlay from '../layout/UtilityOverlay';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 40px 12%;
    margin-bottom: 150px;
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
    const [playerOne, setPlayerOne] = useState(null);
    const [playerTwo, setPlayerTwo] = useState(null);
    const [overlayCard, setOverlayCard] = useState(null);
    const [utilityOverlay, setUtilityOverlay] = useState(null);
    const gameContext = useContext(GameContext);

    useEffect(() => {
        if(cards) {
            const shuffledCards = basicShuffle(cards);
            const initialSetUp = setup(shuffledCards);
            
            setElementPool(initialSetUp.elementPool);
            setElementDeck(initialSetUp.elementDeck);
            setPlayers(initialSetUp.players);
            setPlayerOne(initialSetUp.players.find(player => player.orientation === 'bottom'));
            setPlayerTwo(initialSetUp.players.find(player => player.orientation === 'top'));
            gameContext.setup(initialSetUp);
        }
    }, []);

    useEffect(() => {
        if(gameContext.currentSetup) {
            setElementPool(gameContext.currentSetup.elementPool);
            setElementDeck(gameContext.currentSetup.elementDeck);
            setPlayers(gameContext.currentSetup.players);
            setPlayerOne(gameContext.currentSetup.players.find(player => player.orientation === 'bottom'));
            setPlayerTwo(gameContext.currentSetup.players.find(player => player.orientation === 'top'));
        }
    }, [gameContext.setupUpdate]);

    const showOverlay = (card) => {
        setOverlayCard(card);
    }
    const showUtilityOverlay = (card) => {
        setUtilityOverlay(card);
    }

    return (
        <StyledContainer>
            {playerTwo && <Field orientation='top' showOverlay={showOverlay} field={playerTwo.field} hand={playerTwo.hand} />}
            <StyledRow>
                <Hand />
                {elementPool && <ElementPool cards={elementPool} numOfPlayers={players.length} />}
                {elementDeck && <ElementDeck cards={elementDeck} />}
                <Hand />
            </StyledRow>
            <LogDisplay />
            <Help />
            {players && playerOne ? <Field orientation='bottom' showOverlay={showOverlay} field={playerOne.field} /> : null}
            {playerOne && <MainHand cards={playerOne.hand} showOverlay={showOverlay} name={playerOne.name} />}
            {players && <PlayerData playerData={players} />}
            {overlayCard && <CardOverlay card={overlayCard} showOverlay={showOverlay} showUtilityOverlay={showUtilityOverlay} />}
            {utilityOverlay && <UtilityOverlay card={utilityOverlay} showOverlay={showUtilityOverlay} elementPool={elementPool} />}
        </StyledContainer>
    )
}