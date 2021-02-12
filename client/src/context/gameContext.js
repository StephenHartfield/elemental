import React, { useContext, useState } from 'react';
import actionTypes from '../helper-functions/actionTypes';
import addElementToField from '../helper-functions/addElementToField';
import determineNextTurn from '../helper-functions/determineNextTurn';
import getElementPosition from '../helper-functions/getElementPosition';
import getFirstRow from '../helper-functions/getFirstRow';
import getMatchedItem from '../helper-functions/getMatchedItem';
import itemAbilities from '../helper-functions/itemAbilities';
import poolFaceDown from '../helper-functions/poolFaceDown';
import removeElementPoolHighlights from '../helper-functions/removeElementPoolHighlights';
import removeItemHighlights from '../helper-functions/removeItemHighlights';
import LogContext from './logContext';

const GameContext = React.createContext();

function GameProvider(props) {
    const [currentSetup, setCurrentSetup] = useState(null);
    const [currentTurn, setCurrentTurn] = useState(null);
    const [started, setStarted] = useState(false);
    const [yourName, setYourName] = useState(null);
    const [focusBool, setFocusBool] = useState(false);
    const [setupUpdate, setUpdateSetup] = useState(false);
    const [numToPick, setNumToPick] = useState(0);
    const [typeInPlay, setTypeInPlay] = useState("");
    const [cardsToDraw, setCardsToDraw] = useState(null);
    const [fadeCard, setFadeCard] = useState(null);
    const logContext = useContext(LogContext);

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
        setCurrentTurn(prev => ({...prev, drawPlay: true}));
        setTypeInPlay("draw");
    }

    const playAction = (action) => {
        const newSetup = actionTypes(action, currentSetup, currentTurn);
        setTypeInPlay(action.subType);
        setCurrentSetup(newSetup);
        setFocusBool(!focusBool);
    }

    const endAction = (card) => {
        let newSetup = currentSetup;
        if(typeInPlay === 'reveal') {
            newSetup = poolFaceDown(newSetup);
        }
        if(typeInPlay === 'draw') {
            newSetup = removeItemHighlights(newSetup, currentTurn.name);
            handleDrawElement(cardsToDraw ? cardsToDraw : card);
        }
        setCurrentSetup(newSetup);
        setUpdateSetup(!setupUpdate);
        const nextTurn = determineNextTurn(currentTurn, newSetup);
        setTypeInPlay("");
        setCurrentTurn(nextTurn);
    }

    const handleDrawElement = (card) => {
        setFadeCard(card);
        setTimeout(() => {
            const elementFromDeck = currentSetup.elementDeck.pop();
            const pos = getElementPosition(currentSetup, card.id);
            const newSetup = currentSetup;
            newSetup.elementPool[pos.row][pos.col] = elementFromDeck;
            setCurrentSetup(newSetup);
            setFocusBool(!focusBool);
        }, 1000);
    }

    const pickElement = (card) => {
        if(typeInPlay === 'draw') {
            let newSetup = currentSetup;
            const newSetupItemHighlight = getMatchedItem(card, currentSetup, currentTurn.name);
            setCardsToDraw(card);
            if(newSetupItemHighlight) {
                newSetup = newSetupItemHighlight;
            }
            setNumToPick(numToPick-1);
            if(numToPick == 1) { // will be 0 after function finishes and state updates
                newSetup = removeElementPoolHighlights(newSetup);
                if(!newSetupItemHighlight) {
                    logContext.addLog({
                        type: 'discardedElement',
                        key: currentTurn.key,
                        value: `${card.displayName} is discarded`
                    });
                    newSetup.elementDeck.unshift(card);
                    console.log(newSetup.elementDeck);
                    endAction(card);
                }
            }
            setCurrentSetup(newSetup);
            setUpdateSetup(!setupUpdate);
        }
    }

    const pickItem = (item) => {
        if(typeInPlay === 'draw') {
            const newSetup = addElementToField(cardsToDraw, item, currentTurn.name, currentSetup);
            const itemAbility = itemAbilities(item, cardsToDraw, newSetup, currentTurn);
            if(itemAbility && itemAbility.setup) {
                setCurrentSetup(itemAbility.setup);
            } else {
                setCurrentSetup(newSetup);
            }
            if(itemAbility && itemAbility.turn) {
                setCurrentTurn(itemAbility.turn);
            }
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
                typeInPlay,
                cardsToDraw,
                fadeCard
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext
export { GameProvider }