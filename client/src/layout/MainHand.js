import React from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';

const FixedHand = styled.div`
    position: fixed;
    bottom: 0%;
    width: 100%
    height: 150px;
    background-color: lightblue;
    opacity: 1;
    display: flex;
    left: 20%;
    right: 20%;
    justify-content: center;
    align-items: center;
`;

export default function MainHand({cards}) {

    return (
        <FixedHand>
            {cards && cards.map((card, idx) => <ActionCard card={card} key={`hand${idx}`} faceUp={true} />)}
        </FixedHand>
    )
}