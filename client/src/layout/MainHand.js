import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import StandardHeader from '../Constants/StandardHeader';
import GameContext from '../context/gameContext';

const FixedHand = styled.div`
    position: fixed;
    bottom: 0%;
    width: 100%
    height: 150px;
    background-color: lightblue;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border: 1px solid black;
    opacity: 1;
    display: flex;
    left: 18%;
    right: 18%;
    justify-content: center;
    align-items: center;
`;

const DataContainer = styled.div`
    background-color: #ffffff;
    height: 90%;
    width: 60px;
    padding: 2px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Hand = styled.div`
    width: 90%;
    height: 95%;
    display: flex;
    justify-content: space-around;
`;

export default function MainHand({ cards, name, showOverlay }) {
    const gameContext = useContext(GameContext);
    const [isYourTurn, setIsYourTurn] = useState(false);

    useEffect(() => {
        console.log(gameContext.currentTurn);
        if(gameContext.currentTurn.name === gameContext.yourName) {
            setIsYourTurn(true);
        }
    }, [gameContext.currentTurn]);
        
        return (
        <FixedHand>
            <Hand>
                {cards && cards.map((card, idx) => <ActionCard card={card} key={`hand${idx}`} faceUp={true} showOverlay={showOverlay} />)}
            </Hand>
            <DataContainer>
                <StandardHeader nomargin>{name}</StandardHeader>
                <StandardHeader nomargin>0 VP</StandardHeader>
                {isYourTurn && <StandardHeader>Plays: 2</StandardHeader>}
            </DataContainer>
        </FixedHand>
    )
}