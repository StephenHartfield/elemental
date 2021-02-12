
export default function removeUsedAction(card, setup, name) {
    const playerIdx = setup.players.findIndex(player => player.name === name);
    const newHand = setup.players[playerIdx].hand.filter(action => action.number != card.number);
    const newSetup = setup;
    newSetup.players[playerIdx].hand = newHand;
    newSetup.actionDeck.unshift(card);
    return newSetup;
}