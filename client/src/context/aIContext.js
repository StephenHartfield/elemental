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

    const updateAIPool = (pool) => {
        console.log(pool);
        setAIElementPool(pool);
    }

    const determinePlay = (turn) => {
        let firstRowKnown = [];
        const firstRow = AIElementPool[0];
        const field = AIPlayerData.field;
        const hand = AIPlayerData.hand;
        console.log(hand);
        firstRow.map((col, cIdx) => {
            if(col.displayName) {
                firstRowKnown[cIdx] = true;
                field.forEach(itemSection => {
                    itemSection.item.slots.forEach(slot => {
                        if(!slot.isActive && slot.name === col.value) {
                            if(!turn.drawPlay) {
                                return `drawPlay_draw_pos-0-${cIdx}_to_${itemSection.item}`;
                            }
                        }
                    })
                })
            } else {
                firstRowKnown[cIdx] = false;
            }
        });
        const firstRowAboveAverage = (firstRowKnown.length/2) < firstRowKnown.filter(col => col != false).length;
        if(firstRowAboveAverage) {
            // play a reveal action for first row
        }
    }

    return (
        <AIContext.Provider
            value={{
                initPoolAndPlayerData,
                AIElementPool,
                addToMemory,
                removeFromMemory,
                updateAIPool,
                determinePlay
            }}
        >
            {props.children}
        </AIContext.Provider>
    )
}

export default AIContext
export { AIProvider }