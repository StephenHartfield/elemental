
export default function earthStaff(setup, turn) {
    const playerIdx = setup.players.findIndex(player => player.name === turn.name);
    const actionCardOffDeck = setup.actionDeck.pop();
    const newSetup = setup;
    newSetup.players[playerIdx].hand.push(actionCardOffDeck);
    return {setup: newSetup, log: ""};
}