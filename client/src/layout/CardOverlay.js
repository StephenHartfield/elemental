import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import ItemCard from '../cards/ItemCard';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';

const Fixed = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    margin-top: -120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CardContainer = styled.div`
    height: 500px;
    width: 340px;
    display: flex;
    margin-left: ${props => props.margin ? '130px' : ''};
    justify-content: center;
    align-items: center;
`;
const PlayContainer = styled.div`
    width: 120px;
    height: 100px;
    border-radius: 60px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
`;
const PlayButton = styled.div`
    height: 30px;
    width: 80px;
    border-radius: 10px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
`;

export default function CardOverlay({ card, showOverlay, showUtilityOverlay }) {
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);
    const [isYourTurn, setIsYourTurn] = useState(false);

    useEffect(() => {
        if(gameContext.currentTurn.name === gameContext.yourName) {
            setIsYourTurn(true);
        }
    }, [gameContext.currentTurn]);

    const handleOffCard = () => {
        showOverlay(null);
    }
    const handlePlay = () => {
        if(card.utility) {
            showOverlay(null);
            showUtilityOverlay(card);
        } else {
            logContext.addLog({
                type: card.value,
                key: gameContext.currentTurn.key,
                value: `${gameContext.currentTurn.name} plays ${card.displayName}`
            });
            gameContext.playAction(card);
        }
        showOverlay(null);
    }

    return (
        <Fixed onClick={handleOffCard}>
            <CardContainer margin={isYourTurn && card.type === 'action'}>
                {card.type === 'item' ?
                    <ItemCard card={card} faceUp={true} inOverlay={true} />
                    :
                    <ActionCard card={card} faceUp={true} inOverlay={true} />
                }
            </CardContainer>
            {isYourTurn && card.type === 'action' ? 
                <PlayContainer>
                    <PlayButton onClick={handlePlay}>Play</PlayButton>
                </PlayContainer>
            :
                null}
        </Fixed>
    )
}