import React, { useState } from 'react';
import actionTypes from '../helper-functions/actionTypes';
import addElementToField from '../helper-functions/addElementToField';
import determineNextTurn from '../helper-functions/determineNextTurn';
import getFirstRow from '../helper-functions/getFirstRow';
import getMatchedItem from '../helper-functions/getMatchedItem';
import poolFaceDown from '../helper-functions/poolFaceDown';
import removeElementPoolHighlights from '../helper-functions/removeElementPoolHighlights';
import removeItemHighlights from '../helper-functions/removeItemHighlights';

const GameContext = React.createContext();

function GameProvider(props) {
    const [currentSetup, setCurrentSetup] = useState(null);
    const [started, setStarted] = useState(false);
    const [currentTurn, setCurrentTurn] = useState(null);
    const [yourName, setYourName] = useState(null);
    const [focusBool, setFocusBool] = useState(false);
    const [setupUpdate, setUpdateSetup] = useState(false);
    const [numToPick, setNumToPick] = useState(0);
    const [typeInPlay, setTypeInPlay] = useState("");
    const [cardToDraw, setCardToDraw] = useState(null);

    const setup = (initSetup) => {
        setCurrentSetup(initSetup);
        setYourName(initSetup.players[0].name);
        play(initSetup);
    }

    const determineFirstTurn = (initSetup) => {
        const numOfPlayers = initSetup.players.length; 
        // return Math.floor(Math.random() * numOfPlayers);
        return 0;
    }

    const play = (initSetup) => {
        if(!started) {
            const playerToStart = determineFirstTurn(initSetup);
            const turn = {
                name: initSetup.players[playerToStart].name,
                drawPlay: false,
                plays: 2, 
                round: 1, 
                player: 1,
                play: 1,
                key: "1-1-1"};
            setCurrentTurn(turn);
        }
    }

    const draw = (name) => {
        // give overlay of "pick from first row"
        setFocusBool(!focusBool); // focus on elementPool
        setNumToPick(1);
        const firstRowToHighlight = getFirstRow(name, currentSetup, 'highlight', true);
        setCurrentSetup(firstRowToHighlight);
        setTypeInPlay("draw");
    }

    const playAction = (actionType) => {
        const newSetup = actionTypes(actionType, currentSetup, currentTurn);
        setTypeInPlay(actionType);
        setCurrentSetup(newSetup);
        setFocusBool(!focusBool);
    }

    const endAction = () => {
        let newSetup = currentSetup;
        if(typeInPlay === 'sight') {
            newSetup = poolFaceDown(newSetup);
        }
        if(typeInPlay === 'draw') {
            newSetup = removeItemHighlights(newSetup, currentTurn.name);
        }
        setCurrentSetup(newSetup);
        setUpdateSetup(!setupUpdate);
        const nextTurn = determineNextTurn(currentTurn, newSetup);
        setTypeInPlay("");
        setCurrentTurn(nextTurn);
    }

    const pickElement = (card) => {
        if(typeInPlay === 'draw') {
            let newSetup = null;
            newSetup = getMatchedItem(card, currentSetup, currentTurn.name);
            setNumToPick(numToPick-1);
            if(numToPick == 1) {
                newSetup = removeElementPoolHighlights(newSetup);
            }
            setCurrentSetup(newSetup);
            setCardToDraw(card);
            setUpdateSetup(!setupUpdate);
        }
    }

    const pickItem = (field, item) => {
        if(typeInPlay === 'draw') {
            const newSetup = addElementToField(cardToDraw, item, currentTurn.name, currentSetup);
            // scenario of finishing item

            endAction();
        }
    }

    return (
        <GameContext.Provider
            value={{
                setup,
                currentTurn,
                yourName,
                focusBool,
                draw,
                playAction,
                endAction,
                currentSetup,
                numToPick,
                pickElement,
                pickItem,
                setupUpdate,
                cardToDraw,
                typeInPlay
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext
export { GameProvider }