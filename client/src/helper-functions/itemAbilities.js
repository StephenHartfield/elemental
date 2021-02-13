import earthStaff from "./itemHandlers/earthStaff";
import fireSword from "./itemHandlers/fireSword";

export default function itemAbilities(item, elementDrawn, setup, turn) {

    switch(item.value) {
        case 'earthStaff':
            return earthStaff(setup, turn);
        case 'fireSword':
            return fireSword(turn);
    }
}