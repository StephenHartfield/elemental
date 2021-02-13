
export default function addElementToField(element, item, name, setup) {
    const currentPlayerIdx = setup.players.findIndex(player => player.name === name);
    const matchedField = setup.players[currentPlayerIdx].field.findIndex(itemSection => itemSection.item.number === item.number);
    const newData = setup;
    newData.players[currentPlayerIdx].field[matchedField].elements.push(element);
    newData.players[currentPlayerIdx].field[matchedField].item.slots.find(slot => slot.name === element.value && !slot.isActive).isActive = true;
    return newData;
}