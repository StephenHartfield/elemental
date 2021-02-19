
export default function returnToHighlightedPos(setup, card) {
    const newSetup = setup;
    newSetup.arrangeFlow.lookAtElements = setup.arrangeFlow.lookAtElements.filter(lCard => lCard.id != card.id);
    card.highlight = false;
    card.isFaceUp = false;
    newSetup.elementPool = newSetup.elementPool.map(row => row.map(col => {
        if(col.highlight) {
            col = card;
        }
        return col;
    }))
    return newSetup;
}