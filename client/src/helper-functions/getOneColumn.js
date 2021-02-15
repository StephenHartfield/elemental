
export default function getOneColumn(name, setup, property, value, col) {
    const orientation = setup.players.find(player => player.name === name).orientation;

    if(orientation === "bottom") {
        const newPool = setup.elementPool.map(row => {
            return row.map((cl, idx) => {
                if(idx === col-1) {
                    cl[property] = value;
                }
                return cl;
            })
        })
        const newSetup = setup;
        newSetup.elementPool = newPool;
        return newSetup;
    } else if (orientation === "top") {
        return {type: 'row', firstRow: setup.elementPool[0]};
    }
}