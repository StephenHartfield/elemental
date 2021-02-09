import React, { useState } from 'react';
import addElementToField from '../helper-functions/addElementToField';
import getFirstRow from '../helper-functions/getFirstRow';
import getMatchedItem from '../helper-functions/getMatchedItem';
import removeElementPoolHighlights from '../helper-functions/removeElementPoolHighlights';

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
        return Math.floor(Math.random() * numOfPlayers);
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
        const firstRowToHighlight = getFirstRow(name, currentSetup);
        setCurrentSetup(firstRowToHighlight);
        setTypeInPlay("draw");
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
            console.log(newSetup);
            setCurrentSetup(newSetup);
            setUpdateSetup(!setupUpdate);
            const yourField = newSetup.players.findIndex(player => player.name === currentTurn.name);
            return newSetup.players[yourField].field;
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
                currentSetup,
                numToPick,
                pickElement,
                pickItem,
                setupUpdate,
                cardToDraw
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext
export { GameProvider }