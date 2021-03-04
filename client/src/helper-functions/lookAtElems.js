import getElementPosition from "./getElementPosition";

export default function lookAtElems(card, setup, aiPool) {
    card.isFaceUp = true;
    const newSetup = setup;
    newSetup.arrangeFlow.lookAtElements.push(card);
    const pos = getElementPosition(newSetup, card.id);
    newSetup.elementPool[pos.row][pos.col] = {number: newSetup.arrangeFlow.num - newSetup.arrangeFlow.steps.length};
    aiPool[pos.row][pos.col] = {};
    return {aiPool, newSetup};
}