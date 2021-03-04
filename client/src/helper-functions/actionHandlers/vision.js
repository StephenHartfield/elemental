import updateAIPool from "../aiHelpers/updateAIPool";
import getOneColumn from "../getOneColumn";

export default function vision(card, setup, turn, data, aiPool) {
    const newSetup = getOneColumn(turn.name, setup, "isFaceUp", true, data);
    aiPool = updateAIPool(newSetup.elementPool, aiPool);
    return {aiPool, newSetup};
}