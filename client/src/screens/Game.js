import React, { useEffect, useState } from 'react';
import { LogProvider } from '../context/logContext';
import { copyElements } from '../helper-functions/createElementCopies';
import GameTable from './GameTable';
import StartGame from './StartGame';

export default function Game() {
    const [atGameTable, setAtGameTable] = useState(false);
    const [cards, setCards] = useState(null);

    useEffect(() => {
        (async () => {
            const elementsData = require("../cards/data/elements.json");
            const actionsData = require("../cards/data/actions.json");
            const itemsData = require("../cards/data/items.json");
            const newElements = copyElements(elementsData);
            // could do a check here, if the card is supposed to be included in game (based on # of players)
            const cardData = [...newElements, ...actionsData, ...itemsData];
            setCards(cardData);
        })();
    }, []);

    const handleStartGame = () => {
        setAtGameTable(true);
    }

    if (!atGameTable) {
        return <StartGame handleStartGame={handleStartGame} />
    } else {
        return (
            <LogProvider>
                <GameTable cards={cards} />
            </LogProvider>
        )
    }
}