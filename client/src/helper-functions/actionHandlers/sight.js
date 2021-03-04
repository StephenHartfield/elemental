import updateAIPool from "../aiHelpers/updateAIPool";
import getFirstRow from "../getFirstRow";

export default function sight(card, setup, turn, aiPool) {
    const newSetup = getFirstRow(turn.name, setup, 'isFaceUp', true);
    aiPool = updateAIPool(newSetup.elementPool, aiPool);
    return {aiPool, newSetup};
}