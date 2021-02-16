import getFirstRow from '../getFirstRow';
import removeUsedAction from '../removeUsedAction';

export default function switcheroo(card, setup, turn, data) {
    // data = chosen opponent
    const newSetup = getFirstRow(turn.name, setup, 'highlight', true);
    const withActionCardRemoved = removeUsedAction(card, newSetup, turn.name);
    return withActionCardRemoved;
}