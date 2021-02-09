
export default function getMatchedItem(card, setup, name) {
    const currentPlayer = setup.players.find(player => player.name === name);
    const currentPlayerIdx = setup.players.findIndex(player => player.name === name);
    const items = currentPlayer.field.map(section => section.item);
    const matching = items.filter(item => {
        const slotMatches = item.slots.map(slot => slot.name === card.value);
        const anyTrue = slotMatches.find(bool => bool === true);
        return anyTrue;
    });
    console.log(matching);
    if(matching) {
        const newData = setup;
        newData.players[currentPlayerIdx].field.forEach(itemSection => {
            matching.forEach(matchedItem => {
                if(itemSection.item.value === matchedItem.value) {
                    itemSection.item.highlight = true;
                    return itemSection;
                } else {
                    return itemSection;
                }
            })            
        });
        return newData;
    } else {
        return null;
    }
}