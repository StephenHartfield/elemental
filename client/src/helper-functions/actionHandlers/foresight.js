import getSecondRow from "../getSecondRow";
import removeUsedAction from "../removeUsedAction";

export default function foresight(card, setup, turn) {
    const newSetup = getSecondRow(turn.name, setup, 'isFaceUp', true);
    return newSetup;
}