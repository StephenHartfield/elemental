
export default function fireSword(turn) {
    turn.plays++;
    return {turn: turn};    
}