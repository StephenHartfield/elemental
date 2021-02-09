
export default function removeElementPoolHighlights(setup) {

    const newData = setup;
    newData.elementPool.forEach(row => {
        row.forEach(card => {
            card.highlight = false;
        })
    });
    return newData;
}