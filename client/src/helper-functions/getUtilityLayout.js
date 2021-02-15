import Vision from "./utitlityLayout/Vision";

export default function getUtilityLayout(card, pool) {

    switch(card.value) {
        case 'vision':
            return <Vision card={card} pool={pool} />
    }
}