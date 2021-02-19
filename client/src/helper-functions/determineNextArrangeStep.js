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
    } else if (nextStep === 'return') {
        newSetup.arrangeFlow.lookAtElements = newSetup.arrangeFlow.lookAtElements.map(elem => ({...elem, highlight: true}));
        const num = newSetup.arrangeFlow.num - (newSetup.arrangeFlow.lookAtElements.length-1);
        newSetup.elementPool.forEach(row => row.map(card => card.number === num ? card.highlight = true : card));
    }
    return newSetup;
}