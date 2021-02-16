import getElementPosition from "./getElementPosition";

export default function switchElements(setup) {
    const elemPositions = setup.arrangeFlow.switchCards.map(card => getElementPosition(setup, card.id));
    const newSetup = setup;
    const newCards = newSetup.arrangeFlow.switchCards.map(card => ({...card, disabled: true}));
    newSetup.elementPool[elemPositions[1].row][elemPositions[1].col] = newCards[0];
    newSetup.elementPool[elemPositions[0].row][elemPositions[0].col] = newCards[1];
    newSetup.arrangeFlow.switchCards = [];
    return newSetup;
}