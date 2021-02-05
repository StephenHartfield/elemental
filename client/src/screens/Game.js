import React, { useEffect, useState } from 'react';
import { copyElements } from '../helper-functions/createElementCopies';
import GameTable from './GameTable';
import StartGame from './StartGame';

export default function Game() {
    const [atGameTable, setAtGameTable] = useState(false);
    const [cards, setCards] = useState(null);

    useEffect(() => {
        (async () => {
            const elementsData = require("../elements.json");
            const actionsData = require("../actions.json");
            const newElements = copyElements(elementsData);
            const cardData = [...newElements, ...actionsData];
            setCards(cardData);
        })();
    }, []);

    const handleStartGame = () => {
        setAtGameTable(true);
    }

    if(!atGameTable) {
        return <StartGame handleStartGame={handleStartGame} />
    } else {
        return <GameTable cards={cards} />
    }
}