import React, { useState } from 'react';

const GameContext = React.createContext();

function GameProvider(props) {
    const [currentSetup, setCurrentSetup] = useState(null);
    const [started, setStarted] = useState(false);
    const [currentTurn, setCurrentTurn] = useState(null);
    const [yourName, setYourName] = useState(null);

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
                plays: 2, 
                round: 1, 
                player: 1,
                play: 1,
                key: "1-1-1"};
            setCurrentTurn(turn);
        }
    }

    return (
        <GameContext.Provider
            value={{
                setup,
                currentTurn,
                yourName
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext
export { GameProvider }