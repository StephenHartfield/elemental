import getElementPosition from "./getElementPosition";

export default function switchElements(setup, aiPool) {
    const elemPositions = setup.arrangeFlow.switchCards.map(card => getElementPosition(setup, card.id));
    const newSetup = setup;
    const newCards = newSetup.arrangeFlow.switchCards.map(card => ({...card, disabled: true}));
    newSetup.elementPool[elemPositions[1].row][elemPositions[1].col] = newCards[0];
    newSetup.elementPool[elemPositions[0].row][elemPositions[0].col] = newCards[1];
    newSetup.arrangeFlow.switchCards = [];

    const first = aiPool[elemPositions[1].row][elemPositions[1].col];
    const second =  aiPool[elemPositions[0].row][elemPositions[0].col];
    aiPool[elemPositions[1].row][elemPositions[1].col] = second;
    aiPool[elemPositions[0].row][elemPositions[0].col] = first;

    return {aiPool, newSetup};
}