import setupByPlayers from "../Constants/setupLayoutByPlayers";

const players = ["Jack", "Jill"];
const orientations = ["bottom", "top", "left", "right"];

export default function setup(cards) {
    const setupRules = setupByPlayers[players.length];
    
    // TODO: make model for player object
    const setupData = {
        players: players.map((player, idx) => ({
            name: player,
            orientation: orientations[idx],
            hand: [],
            field: [
                {item: null, elements: []},
                {item: null, elements: []},
                {item: null, elements: []}
            ],
            actionDeck: []
        })), 
        elementPool: [...Array(setupRules.poolLayout.rows)].map(row => []), 
        elementDeck: [], 
        itemDeck: []
    };
    cards.forEach(card => {
        let added = false;
        if (card.type === 'element') {
            setupData.elementPool.forEach(row => {
                if(!added) {
                    if(row.length < setupRules.poolLayout.columns) {
                        row.push(card);
                        added=true;
                    }
                }
            })                
            if(!added) {
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
    return setupData;
}