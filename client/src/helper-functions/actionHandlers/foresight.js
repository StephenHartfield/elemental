import getSecondRow from "../getSecondRow";


export default function foresight(setup, turn) {
    const newSetup = getSecondRow(turn.name, setup, 'isFaceUp', true);
    console.log(newSetup);
    return newSetup;
}