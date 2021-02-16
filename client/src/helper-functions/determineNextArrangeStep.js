import allPool from "./allPool";
import getFirstRow from "./getFirstRow";
import getSecondRow from "./getSecondRow";

export default function determineNextArrageStep(turn, setup, nextStep) {

    let newSetup = setup;
    if(nextStep === 'firstRow') {
        newSetup = getFirstRow(turn.name, newSetup, 'highlight', true);
    } else if (nextStep === 'secondRow') {
        newSetup = getSecondRow(turn.name, newSetup, 'highlight', true);
    } else if (nextStep.includes('name')) {
        newSetup = getFirstRow(nextStep.split('-')[1], newSetup, 'highlight', true);
    } else if (nextStep === 'all') {
        newSetup = allPool(setup, 'highlight', true);
    }
    return newSetup;
}