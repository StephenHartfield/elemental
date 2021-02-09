export default function getFirstRow(name, setupData) {
    const orientation = setupData.players.find(player => player.name === name).orientation;

    if(orientation === "bottom") {
        const newData = setupData;
        newData.elementPool[newData.elementPool.length-1].forEach(card => {
            card.highlight = true;
            return card;
        })
        return newData;
    } else if (orientation === "top") {
        return {type: 'row', firstRow: setupData.elementPool[0]};
    }

}