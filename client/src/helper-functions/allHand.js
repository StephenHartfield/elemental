

export default function allHand(setup, turn, property, value) {
    
    const newData = setup;
    const playerIdx = newData.players.findIndex(p => p.name === turn.name);
    newData.players[playerIdx].hand.forEach(card => {
        card[property] = value;
    });
    if(!turn.drawPlay) {
        newData.drawActionDisabled = false;
    }
    return newData;
}