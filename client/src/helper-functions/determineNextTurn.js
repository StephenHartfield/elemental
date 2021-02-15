

export default function determineNextTurn(currentTurn, setup) {
    currentTurn.plays--;
    if(currentTurn.plays > 0) {
        currentTurn.currentPlay++;
        const keySplit = currentTurn.key.split('-');
        keySplit[2] = currentTurn.currentPlay;
        currentTurn.key = keySplit.join("-");
        return currentTurn;
    } else {
        const currPlayerIdx = setup.players.findIndex(player => player.name === currentTurn.name);
        const nextPlayerIdx = setup.players[currPlayerIdx + 1] ? currPlayerIdx + 1 : 0; 
        currentTurn.name = setup.players[nextPlayerIdx].name;
        if(nextPlayerIdx === 0) {
            currentTurn.key = `${parseInt(currentTurn.key.split('-')[0]) + 1}-1-1`;
        } else {
            currentTurn.key = `${currentTurn.key.split('-')[0]}-${parseInt(currentTurn.key.split('-')[1]) + 1}-1`;
        }
        currentTurn.plays = 2;
        currentTurn.drawPlay = false;
        console.log(currentTurn);
        return currentTurn;
    }
}