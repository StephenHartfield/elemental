import getSecondRow from '../getSecondRow';
import removeUsedAction from '../removeUsedAction';

export default function rearrange(card, setup, turn) {
    const newSetup = getSecondRow(turn.name, setup, 'highlight', true);
    newSetup['arrangeFlow'] = {switchCards: [], steps: ['firstRow', 'secondRow', 'firstRow']};
    return newSetup;
}