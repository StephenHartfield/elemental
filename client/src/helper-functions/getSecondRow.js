export default function getSecondRow(name, setupData, property, value) {
    const orientation = setupData.players.find(player => player.name === name).orientation;

    if(orientation === "bottom") {
        const newData = setupData;
        newData.elementPool[newData.elementPool.length-2].forEach(card => {
            card[property] = value;
            return card;
        })
        return newData;
    } else if (orientation === "top") {
        return {type: 'row', firstRow: setupData.elementPool[0]};
    }

}