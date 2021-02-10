import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import assets from '../assets/AssetImport';
import CardContainer from '../Constants/CardContainer';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

export default function ElementCard({ card }) {
    const [localFaceUp, setLocalFaceUp] = useState(false);
    const {elements} = assets.cards;
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);

    useEffect(() => {
        setLocalFaceUp(card.isFaceUp);
    }, [card.isFaceUp]);

    const handleClick = () => {
        setLocalFaceUp(!localFaceUp);
        logContext.addLog({
            key: gameContext.currentTurn.key,
            value: `${gameContext.currentTurn.name} draws ${card.displayName}`
        })
        gameContext.pickElement(card);
    }

    return (
        <CardContainer 
            highlight={card.highlight} 
            noborder 
            onClick={card.highlight && gameContext.numToPick > 0 ? handleClick : null} 
            faceUp={localFaceUp}
        >
            <Card>
                {localFaceUp ?
                    <img src={elements[card.value]} style={{height: '100%', width: '100%', backgroundColor: "lightgray"}} />
                :
                    <img src={elements.back} style={{height: '100%', width: '100%'}} />
                }
            </Card>

        </CardContainer>
    )
}