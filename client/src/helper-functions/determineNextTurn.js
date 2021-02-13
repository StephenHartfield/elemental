

export default function determineNextTurn(currentTurn, setup) {
    currentTurn.plays--;
    if(currentTurn.plays > 0) {
        currentTurn.play++;
        const keySplit = currentTurn.key.split('-');
        keySplit[2] = currentTurn.play;
        currentTurn.key = keySplit.join("-");
        return currentTurn;
    }
}