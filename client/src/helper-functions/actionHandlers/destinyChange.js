import allPool from "../allPool";

export default function destinyChange(card, setup, turn) {

    const newSetup = allPool(setup, 'highlight', true);
    newSetup['arrangeFlow'] = {switchCards: [], steps: ['all', 'all', 'all'], lookAtElements: [], num: 4};
    return newSetup;
}