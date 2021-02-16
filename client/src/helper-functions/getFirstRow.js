export default function getFirstRow(name, setupData, property, value) {
    const orientation = setupData.players.find(player => player.name === name).orientation;

    if(orientation === "bottom") {
        const newData = setupData;
        newData.elementPool[newData.elementPool.length-1].forEach(card => {
            card[property] = value;
            return card;
        })
        return newData;
    } else if (orientation === "top") {
        const newData = setupData;
        newData.elementPool[0].forEach(card => {
            card[property] = value;
            return card;
        })
        return newData;
    }

}