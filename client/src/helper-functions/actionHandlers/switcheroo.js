import getFirstRow from '../getFirstRow';
import removeUsedAction from '../removeUsedAction';

export default function switcheroo(card, setup, turn, data) {
    // data = chosen opponent
    const newSetup = getFirstRow(data, setup, 'highlight', true);
    const withActionCardRemoved = removeUsedAction(card, newSetup, turn.name);
    withActionCardRemoved['arrangeFlow'] = {switchCards: [], steps: ['firstRow', `name-${data}`, 'firstRow']};
    return withActionCardRemoved;
}