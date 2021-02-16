import sight from "./actionHandlers/sight";
import foresight from "./actionHandlers/foresight";
import rearrange from "./actionHandlers/rearrange";
import vision from "./actionHandlers/vision";
import switcheroo from "./actionHandlers/switcheroo";

export default function actionTypes(card, setup, turn, data) {

    switch (card.value) {
        case 'sight':
            return sight(card, setup, turn);
        case 'foreKnowledge':
            return foresight(card, setup, turn);
        case 'rearrange' :
            return rearrange(card, setup, turn);
        case 'switcheroo' :
            return switcheroo(card, setup, turn, data);
        case 'vision':
            return vision(card, setup, turn, data);
    }
}