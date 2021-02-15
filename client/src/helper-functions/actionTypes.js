import sight from "./actionHandlers/sight";
import foresight from "./actionHandlers/foresight";
import rearrange from "./actionHandlers/rearrange";
import vision from "./actionHandlers/vision";

export default function actionTypes(card, setup, turn, data) {

    switch (card.value) {
        case 'sight':
            return sight(card, setup, turn);
        case 'foreKnowledge':
            return foresight(card, setup, turn);
        case 'rearrange' :
            return rearrange(card, setup, turn);
        case 'vision':
            return vision(card, setup, turn, data)
    }
}