import sight from "./actionHandlers/sight";
import foresight from "./actionHandlers/foresight";

export default function actionTypes(type, setup, turn) {

    switch (type) {
        case 'sight':
            return sight(setup, turn);
        case 'foresight':
            return foresight(setup, turn);
    }
}