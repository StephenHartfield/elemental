
export default function removeItemHighlights(setup, name) {

    const newData = setup;
    const currentPlayerIdx = newData.players.findIndex(player => player.name === name);
    const withoutHighlights = newData.players[currentPlayerIdx].field.map(itemSection => ({...itemSection, item: {...itemSection.item, highlight: false}}));
    newData.players[currentPlayerIdx].field = withoutHighlights;
    return newData;
}