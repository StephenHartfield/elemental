import React, { useContext } from 'react';
import styled from 'styled-components';
import ItemCard from '../cards/ItemCard';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';

const StyledField = styled.div`
    height: 300px;
    width: 80%;
    background-color: #c2c1a7;
    transform: ${props => props.pos === 'top' ?
        'rotate(180deg)' :
        ''
    };
    display: flex;
    justify-content: center;
`;

const Items = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
`;

export default function Field({ field, orientation, showOverlay }) {
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);

    const selectCard = (card) => {
        logContext.addLog({
            key: gameContext.currentTurn.key,
            value: `${gameContext.currentTurn.name} adds ${gameContext.cardsToDraw.displayName} to ${card.displayName}`
        })
        gameContext.pickItem(card);
    }
    return (
        <StyledField pos={orientation}>
            <Items>
                {field && field.map((itemSection, idx) => (
                    <ItemCard 
                        card={itemSection.item} 
                        elements={itemSection.elements}
                        showOverlay={showOverlay} 
                        faceUp={true} 
                        selectCard={selectCard} 
                        key={`${orientation}${idx}`} 
                    />
                ))}
            </Items>
        </StyledField>
    )
}