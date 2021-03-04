
export default function updateAIPool(ePool, aiPool) {
    ePool.map((row, rIdx) => {
        row.map((col, cIdx) => {
            if(col.isFaceUp) {
                aiPool[rIdx][cIdx] = col;
            }
        })
    })
    return aiPool;
}