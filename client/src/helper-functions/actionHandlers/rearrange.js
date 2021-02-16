import getSecondRow from '../getSecondRow';
import removeUsedAction from '../removeUsedAction';

export default function rearrange(card, setup, turn) {
    const newSetup = getSecondRow(turn.name, setup, 'highlight', true);
    const withActionCardRemoved = removeUsedAction(card, newSetup, turn.name);
    withActionCardRemoved['arrangeFlow'] = {switchCards: [], steps: ['firstRow', 'secondRow', 'firstRow']};
    return withActionCardRemoved;
}