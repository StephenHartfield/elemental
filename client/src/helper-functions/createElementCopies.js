export function copyElements(elements) {
    const newElements = [];
    elements.forEach(element => {
        if (
            element.displayName === "Fire" ||
            element.displayName === "Water" ||
            element.displayName === "Earth" ||
            element.displayName === "Air"
        ) {
            let copies = 10;
            while(copies > 0) {
                newElements.push(element);
                copies--;
            }
        } else {
            newElements.push(element);
        }
    });
    return newElements;
}