import React, { useState } from 'react';

const AIContext = React.createContext();

function AIProvider(props) {
    const [AIElementPool, setAIElementPool] = useState([]);
    const [AIPlayerData, setAIPlayerData] = useState([]);

    const initPoolAndPlayerData = (elementPool, player) => {
        const emptyAIPool = elementPool.map((row, rIdx) => row.map((col, cIdx) => ({})));
        setAIElementPool(emptyAIPool);
        setAIPlayerData(player);
    }

    const addToMemory = (card, row, col) => {
        const newPool = AIElementPool;
        newPool[row][col] = card;
        setAIElementPool(newPool);
    }

    const removeFromMemory = (row, col) => {
        const newPool = AIElementPool;
        newPool[row][col] = {};
        setAIElementPool(newPool);
    }

    return (
        <AIContext.Provider
            value={{
                initPoolAndPlayerData,
                AIElementPool,
                addToMemory,
                removeFromMemory
            }}
        >
            {props.children}
        </AIContext.Provider>
    )
}

export default AIContext
export { AIProvider }