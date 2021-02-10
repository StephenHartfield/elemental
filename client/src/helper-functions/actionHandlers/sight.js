import getFirstRow from "../getFirstRow";


export default function sight(setup, turn) {
    const newSetup = getFirstRow(turn.name, setup, 'isFaceUp', true);
    console.log(newSetup);
    return newSetup;
}