import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import ElementCard from '../cards/ElementCard';
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
    justify-content: center;
`;
const DrawButton = styled.div`
    background-color: green;
    padding: 2px 5px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`;

const LookCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export default function MainHand({ cards, name, showOverlay }) {
    const gameContext = useContext(GameContext);
    const logContext = useContext(LogContext);
    const [isYourTurn, setIsYourTurn] = useState(false);
    const [isInSightMode, setIsInSightMode] = useState(false);
    const [inLookMode, setInLookMode] = useState(false);
    const [elements, setElements] = useState(null);
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        if(gameContext.currentTurn.name === gameContext.yourName) {
            setIsYourTurn(true);
            if(gameContext.typeInPlay === 'reveal') {
                setIsInSightMode(true);
                setSeconds(10);
            }
            if(gameContext.lookElements.length > 0) {
                setInLookMode(true);
                setElements(gameContext.lookElements);
            }
        } else {
            setIsYourTurn(false);
        }
    }, [gameContext.currentTurn && gameContext.currentTurn.name, gameContext.yourName, gameContext.typeInPlay, gameContext.lookElements]);

    useEffect(() => {
        if(isInSightMode) {
            if(seconds > 0) {
                setTimeout(() => {
                    setSeconds(seconds - 1);
                }, 1000);
            } else {
                setIsInSightMode(false);
                gameContext.endAction();
            }
        }
    }, [isInSightMode, seconds]);

    const handleDraw = () => {
        logContext.addLog({
            type: 'draw',
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
            : inLookMode ?
                <LookCont>
                    {elements.map(card => <ElementCard card={card}/>)}
                </LookCont>
            :
            <Hand>
                {cards && cards.map((card, idx) => <ActionCard card={card} key={`hand${idx}`} faceUp={true} showOverlay={showOverlay} />)}
            </Hand>
            }
            <DataContainer>
                <StandardHeader nomargin>{name}</StandardHeader>
                <StandardHeader nomargin>0 VP</StandardHeader>
                {isYourTurn && <StandardHeader>Plays: {gameContext.currentTurn && gameContext.currentTurn.plays}</StandardHeader>}
                {isYourTurn && !gameContext.currentTurn.drawPlay ? <DrawButton onClick={handleDraw}>Draw</DrawButton> : null}
            </DataContainer>
        </FixedHand>
    )
}