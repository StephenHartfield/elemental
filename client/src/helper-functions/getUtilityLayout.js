import Switcheroo from "./utitlityLayout/Switcheroo";
import Vision from "./utitlityLayout/Vision";

export default function getUtilityLayout(card, pool, players) {

    switch(card.value) {
        case 'vision':
            return <Vision card={card} pool={pool} />
        case 'switcheroo' :
            return <Switcheroo card={card} players={players} />
    }
}