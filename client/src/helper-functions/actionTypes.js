import sight from "./actionHandlers/sight";
import foresight from "./actionHandlers/foresight";

export default function actionTypes(card, setup, turn) {

    switch (card.value) {
        case 'sight':
            return sight(card, setup, turn);
        case 'foresight':
            return foresight(card, setup, turn);
    }
}