import React, { useContext, useEffect, useState } from 'react';
import actionTypes from '../helper-functions/actionTypes';
import addElementToField from '../helper-functions/addElementToField';
import determineNextTurn from '../helper-functions/determineNextTurn';
import getElementPosition from '../helper-functions/getElementPosition';
import getFirstRow from '../helper-functions/getFirstRow';
import getMatchedItem from '../helper-functions/getMatchedItem';
import getSecondRow from '../helper-functions/getSecondRow';
import itemAbilities from '../helper-functions/itemAbilities';
import removeItemHighlights from '../helper-functions/removeItemHighlights';
import switchElements from '../helper-functions/switchElements';
import AIContext from './aIContext';
import LogContext from './logContext';
import allPool from '../helper-functions/allPool';
import allHand from '../helper-functions/allHand';
import determineNextArrageStep from '../helper-functions/determineNextArrangeStep';
import removeUsedAction from '../helper-functions/removeUsedAction';
import returnToHighlightedPos from '../helper-functions/returnToHighlightedPos';

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
    const [fadeCard, setFadeCard] = useState([]);
    const [lookElements, setLookElements] = useState([]);
    const logContext = useContext(LogContext);
    const aiContext = useContext(AIContext);

    useEffect(() => {
        if(currentTurn && currentTurn.name) {
            setFadeCard([]);
            const name = currentTurn.name === yourName ? "your" : `${currentTurn.name}'s`;
            const split = currentTurn.key.split('-');
            split[2] = '0';
            const key = split.join('-');
            logContext.addLog({
                type: `It's ${name} turn`,
                key: key,
                value: `${currentTurn.name}'s Turn`
            });
        }
    }, [currentTurn && currentTurn.name]);

    const setup = (initSetup) => {
        setCurrentSetup(initSetup);
        setYourName(initSetup.players[0].name);
        aiContext.initPoolAndPlayerData(initSetup.elementPool, initSetup.players[1]);
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
                currentPlay: 1,
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

    const playAction = (action, data) => {
        const newSetup = actionTypes(action, currentSetup, currentTurn, data);
        const withActionCardRemoved = removeUsedAction(action, newSetup, currentTurn.name);
        setTypeInPlay(action.subType);
        setCurrentSetup(withActionCardRemoved);
        setFocusBool(!focusBool);
    }

    const endAction = (card) => {
        let newSetup = currentSetup;
        if(typeInPlay === 'reveal') {
            newSetup = allPool(newSetup, 'isFaceUp', false);
        }
        if(typeInPlay === 'draw') {
            newSetup = removeItemHighlights(newSetup, currentTurn.name);
            handleDrawElement(cardsToDraw ? cardsToDraw : card);
        }
        newSetup = allPool(newSetup, 'disabled', false);
        newSetup = allHand(newSetup, currentTurn, 'disabled', false);
        setFocusBool(!focusBool);
        setCurrentSetup(newSetup);
        setUpdateSetup(!setupUpdate);
        const nextTurn = determineNextTurn(currentTurn, newSetup);
        setTypeInPlay("");
        setCurrentTurn(nextTurn);
    }

    const handleDrawElement = (card) => {
        setFadeCard([card]);
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
                newSetup = allPool(newSetup, 'highlight', false);
                if(!newSetupItemHighlight) {
                    logContext.addLog({
                        type: 'discardedElement',
                        key: currentTurn.key,
                        value: `${card.displayName} is discarded`
                    });
                    newSetup.elementDeck.unshift(card);
                    endAction(card);
                }
            }
            setCurrentSetup(newSetup);
            setUpdateSetup(!setupUpdate);
        } else if(typeInPlay === 'arrange') {
            if(currentSetup.arrangeFlow.switchCards) {
                let newSetup = allPool(currentSetup, 'highlight', false);
                if(newSetup.arrangeFlow.lookAtElements) {
                    card.isFaceUp = true;
                    newSetup.arrangeFlow.lookAtElements.push(card);
                    newSetup.elementPool[getElementPosition(newSetup, card.id).row][getElementPosition(newSetup, card.id).col] = {number: newSetup.arrangeFlow.num - newSetup.arrangeFlow.steps.length};
                } else {
                    newSetup.arrangeFlow.switchCards.push(card);
                }
                if(newSetup.arrangeFlow.switchCards.length === 2) {
                    setFadeCard(newSetup.arrangeFlow.switchCards);
                    newSetup = switchElements(newSetup);
                    logContext.addLog({
                        type: 'Cards Switched!',
                        key: currentTurn.key,
                        value: `${currentTurn.name} switched the places of cards`
                    });
                }
                if(newSetup.arrangeFlow.lookAtElements && newSetup.arrangeFlow.lookAtElements.length === newSetup.arrangeFlow.num) {
                    setTypeInPlay('returnElements');
                    newSetup.arrangeFlow.steps = newSetup.arrangeFlow.lookAtElements.map(step => 'return');
                    // completed looking at all cards, now put them back. 
                    // make help text clear "Return to spot #"
                }
                if(newSetup.arrangeFlow.steps.length > 0) {
                    const nextStep = newSetup.arrangeFlow.steps.shift();
                    newSetup = determineNextArrageStep(currentTurn, newSetup, nextStep);
                    setLookElements(newSetup.arrangeFlow.lookAtElements);
                } else {
                    endAction();
                    newSetup = allPool(newSetup, 'highlight', false);
                }
                setCurrentSetup(newSetup);
                setFocusBool(!focusBool);
            }
        } else if (typeInPlay === 'returnElements') {
            let newSetup = returnToHighlightedPos(currentSetup, card);
            if(newSetup.arrangeFlow.steps.length > 0) {
                const nextStep = newSetup.arrangeFlow.steps.shift();
                newSetup = determineNextArrageStep(currentTurn, newSetup, nextStep);
                setLookElements(newSetup.arrangeFlow.lookAtElements);
            } else {
                endAction();
                newSetup = allPool(newSetup, 'highlight', false);
            }
            setLookElements(newSetup.arrangeFlow.lookAtElements);
            setCurrentSetup(newSetup);
            setUpdateSetup(!setupUpdate);
            setFocusBool(!focusBool);
            // search element pool for spots with just number property
            // also note - perhaps we could use typeInPlay to disable things from being played within a play
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
            if(itemAbility && itemAbility.log) {
                // need to increment key before this
                logContext.addLog({
                    key: currentTurn.key,
                    value: itemAbility.log
                })
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
                fadeCard,
                lookElements
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext
export { GameProvider }