
export default function removeUsedAction(card, setup, name) {
    const playerIdx = setup.players.findIndex(player => player.name === name);
    let newHand = setup.players[playerIdx].hand.filter(action => action.number != card.number);
    newHand = newHand.map(card => {
        card.disabled = true;
        return card;
    });
    const newSetup = setup;
    newSetup.players[playerIdx].hand = newHand;
    newSetup.actionDeck.unshift(card);
    newSetup.drawActionDisabled = true;
    return newSetup;
}