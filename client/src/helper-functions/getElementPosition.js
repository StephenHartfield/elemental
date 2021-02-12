
export default function getElementPosition(setup, id) {
    let colIdx = 0;
    let rowIdx = 0;
    setup.elementPool.forEach((row, rIdx) => {
        row.forEach((col, cIdx) => {
            if (col.id === id) {
                colIdx = cIdx;
                rowIdx = rIdx;
            }
        })
    })
    return {row: rowIdx, col: colIdx};
}