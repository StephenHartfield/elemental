import getFirstRow from "../getFirstRow";

export default function sight(card, setup, turn) {
    const newSetup = getFirstRow(turn.name, setup, 'isFaceUp', true);
    return newSetup;
}