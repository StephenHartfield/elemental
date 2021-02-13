const mapHelpByLog = {
    draw: "Pick one highlighted element",
    pickElement: "Pick an item to add element to",
    pickItem: "",
    discarded: "",
    sight: "Look at elements in first row.",
    foresight: "Look at elements in second row."
}

export default function determineHelpText(type) {
    console.log(type);
    if(mapHelpByLog[type]) {
        return mapHelpByLog[type];
    } else {
        return "It's your Next Play";
    }
}