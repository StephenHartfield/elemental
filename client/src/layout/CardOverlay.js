import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import ItemCard from '../cards/ItemCard';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';
import playAction from '../helper-functions/playAction';

const Fixed = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const CardContainer = styled.div`
    height: 500px;
    width: 300px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function CardOverlay({ card, showOverlay }) {
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);
    const [isYourTurn, setIsYourTurn] = useState(false);

    useEffect(() => {
        if(gameContext.currentTurn.name === gameContext.yourName) {
            setIsYourTurn(true);
        }
    }, [gameContext.currentTurn]);

    const handleOffCard = () => {
        setTimeout(() => {
            showOverlay(null);
        }, 1500)
    }
    const handlePlay = () => {
        logContext.addLog({
            key: gameContext.currentTurn.key,
            value: `${gameContext.yourName} plays ${card.displayName}`
        })
        const actionResult = playAction(card.value);
    }

    return (
        <Fixed onClick={handleOffCard}>
            <CardContainer>
                {card.type === 'item' ?
                    <ItemCard card={card} faceUp={true} inOverlay={true} />
                    :
                    <ActionCard card={card} faceUp={true} inOverlay={true} />
                }
            </CardContainer>
            {isYourTurn && <button onClick={handlePlay}>Play</button>}
        </Fixed>
    )
}