

export default function allPool(setup, property, value) {
    
    const newData = setup;
    newData.elementPool.forEach(row => {
        row.forEach(card => {
            card[property] = value;
        })
    });
    return newData;
}