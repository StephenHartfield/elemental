import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import StandardHeader from '../Constants/StandardHeader';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';

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
const DrawButton = styled.div`
    background-color: green;
    padding: 2px 5px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`;

export default function MainHand({ cards, name, showOverlay }) {
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);
    const [isYourTurn, setIsYourTurn] = useState(false);
    const [timer, setTimer] = useState(null);
    const [isInSightMode, setIsInSightMode] = useState(false);
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if(gameContext.currentTurn.name === gameContext.yourName) {
            setIsYourTurn(true);
            if(gameContext.typeInPlay === 'sight') {
                setIsInSightMode(true);
                setTimer(setTimeout(() => {
                    if(isInSightMode) {
                        setIsInSightMode(false);
                        gameContext.endAction();
                    }
                }, 10000));
            }
        }
    }, [gameContext.currentTurn, gameContext.yourName, gameContext.typeInPlay]);

    useEffect(() => {
        if(isInSightMode) {
            if(seconds > 0) {
                setInterval(() => {
                    setSeconds(seconds - 1);
                }, 1000);
            }
        }
    }, [isInSightMode, seconds]);

    const handleDraw = () => {
        logContext.addLog({
            key: gameContext.currentTurn.key,
            value: `${name} plays DRAW`
        })
        gameContext.draw(name);
    }
    const endTimer = () => {
        clearTimeout();
        setIsInSightMode(false);
        gameContext.endAction();
    }
        
    return (
        <FixedHand>
            {isInSightMode ?
                <div style={{width: '90%'}}>
                    <p>View Elements</p>
                    <p>{seconds}</p>
                    <button onClick={endTimer}>End</button>
                </div>
            :
            <Hand>
                {cards && cards.map((card, idx) => <ActionCard card={card} key={`hand${idx}`} faceUp={true} showOverlay={showOverlay} />)}
            </Hand>
            }
            <DataContainer>
                <StandardHeader nomargin>{name}</StandardHeader>
                <StandardHeader nomargin>0 VP</StandardHeader>
                {isYourTurn && <StandardHeader>Plays: {gameContext.currentTurn && gameContext.currentTurn.plays}</StandardHeader>}
                {isYourTurn && <DrawButton onClick={handleDraw}>Draw</DrawButton>}
            </DataContainer>
        </FixedHand>
    )
}