import sight from "./actionHandlers/sight";


export default function actionTypes(type, setup, turn) {

    switch (type) {
        case 'sight':
            return sight(setup, turn);
    }
}