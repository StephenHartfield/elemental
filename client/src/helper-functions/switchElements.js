import getElementPosition from "./getElementPosition";

export default function switchElements(setup) {
    const elemPositions = setup.arrangeFlow.switchCards.map(card => getElementPosition(setup, card.id));
    const newSetup = setup;
    newSetup.elementPool[elemPositions[0].row][elemPositions[0].col] = newSetup.arrangeFlow.switchCards[1];
    newSetup.elementPool[elemPositions[1].row][elemPositions[1].col] = newSetup.arrangeFlow.switchCards[0];
    return newSetup;
}