import updateAIPool from "../aiHelpers/updateAIPool";
import getSecondRow from "../getSecondRow";
import removeUsedAction from "../removeUsedAction";

export default function foresight(card, setup, turn, aiPool) {
    const newSetup = getSecondRow(turn.name, setup, 'isFaceUp', true);
    aiPool = updateAIPool(newSetup.elementPool, aiPool);
    return {aiPool, newSetup};
}