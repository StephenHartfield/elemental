import setupByPlayers from "../Constants/setupLayoutByPlayers";

const players = ["Jack", "Jill"];

export default function setup(cards) {
    const setupRules = setupByPlayers[players.length];

    // TODO: make model for player object
    const setupData = {players: players.map(player => ({
            name: player,
            hand: [],
            field: [
                {item: null, elements: []},
                {item: null, elements: []},
                {item: null, elements: []}
            ],
            actionDeck: []
        })), 
        elementPool: [], 
        elementDeck: [], 
        itemDeck: []
    };
    cards.forEach(card => {
        let added = false;
        if (card.type === 'element') {
            if(setupData.elementPool.length < setupRules.poolLayout.total) {
                setupData.elementPool.push(card);
            } else {
                setupData.elementDeck.push(card);
            }
            return;
        }
        if (card.type === 'action') {
            setupData.players.forEach(player => {
                if(!added) {
                    if (player.hand.length < setupRules.initialHandSize) {
                        player.hand.push(card);
                        added=true;
                    } else if (player.actionDeck.length < setupRules.initialActionDeckSize) {
                        player.actionDeck.push(card);
                        added=true;
                    }
                } 
            })
            return;
        }
        if (card.type === 'item') {
            setupData.players.forEach(player => {
                if(!added) {
                    player.field.forEach(itemSection => {
                        if (!itemSection.item && !added) {
                            itemSection.item = card;
                            added=true;
                        }
                    })
                }
            });
            if (!added) {
                setupData.itemDeck.push(card);
            }
        }
    });
    console.log(setupData);
    return setupData;
}