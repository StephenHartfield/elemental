export function copyElements(elements) {
    const newElements = [];
    for(let i=0; i < elements.length; i++) {
        if (
            elements[i].displayName === "Fire" ||
            elements[i].displayName === "Water" ||
            elements[i].displayName === "Earth" ||
            elements[i].displayName === "Air"
        ) {
            let copies = 10;
            while(copies > 0) {
                const newElement = elements[i].constructor();
                for(var attr in elements[i]) {
                    if(elements[i].hasOwnProperty(attr)) {
                        newElement[attr] = elements[i][attr];
                    }
                }
                newElement['id'] = `${newElement.value}-${copies}`;
                newElements.push(newElement);
                copies--;
            }
        } else {
            newElements.push(elements[i]);
        }
    };
    return newElements;
}