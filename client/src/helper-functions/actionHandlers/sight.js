import getFirstRow from "../getFirstRow";
import removeUsedAction from "../removeUsedAction";

export default function sight(card, setup, turn) {
    const newSetup = getFirstRow(turn.name, setup, 'isFaceUp', true);
    return newSetup;
}