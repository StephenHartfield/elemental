import getOneColumn from "../getOneColumn";
import removeUsedAction from "../removeUsedAction";

export default function vision(card, setup, turn, data) {
    const newSetup = getOneColumn(turn.name, setup, "isFaceUp", true, data);
    return newSetup;
}