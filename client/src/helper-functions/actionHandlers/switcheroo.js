import getFirstRow from '../getFirstRow';

export default function switcheroo(card, setup, turn, data) {
    // data = chosen opponent
    const newSetup = getFirstRow(data, setup, 'highlight', true);
    newSetup['arrangeFlow'] = {switchCards: [], steps: ['firstRow', `name-${data}`, 'firstRow']};
    return newSetup;
}