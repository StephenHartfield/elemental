

export default function poolFaceDown(setup) {
    
    const newData = setup;
    newData.elementPool.forEach(row => {
        row.forEach(card => {
            card.isFaceUp = false;
        })
    });
    return newData;
}