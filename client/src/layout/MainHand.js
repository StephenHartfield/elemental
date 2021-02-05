import React from 'react';
import styled from 'styled-components';
import ActionCard from '../cards/ActionCard';
import StandardHeader from '../Constants/StandardHeader';
import assets from '../assets/AssetImport';

const FixedHand = styled.div`
    position: fixed;
    bottom: 0%;
    width: 100%
    height: 150px;
    background-color: lightblue;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border: 1px solid black;
    opacity: 1;
    display: flex;
    left: 18%;
    right: 18%;
    justify-content: center;
    align-items: center;
`;

const DataContainer = styled.div`
    background-color: #ffffff;
    height: 90%;
    width: 160px;
    padding: 2px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ItemSection = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid darkblue;
    padding: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ItemName = styled.p`
    margin: 0px;
    font-size: 12px
`;
const Slots = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
`;
const ItemSlot = styled.img`
    margin: 0px;
    font-size: 10px;
    height: 20px;
    width: 20px;
`;

export default function MainHand({ cards, name, fieldData }) {

    return (
        <FixedHand>
            {cards && cards.map((card, idx) => <ActionCard card={card} key={`hand${idx}`} faceUp={true} />)}
            <DataContainer>
                <StandardHeader>{name}</StandardHeader>
                {fieldData && fieldData.map((itemSection, idx) => (
                    <ItemSection key={`itemSection${idx}`}>
                        <ItemName>{itemSection.item.displayName}</ItemName>
                        <Slots>
                            {itemSection.item.slots.map((slot, slIdx) => (
                                <ItemSlot key={`slot${idx + slIdx}`} src={assets[slot].inactive} />
                            ))}
                        </Slots>
                    </ItemSection>
                ))}
                <StandardHeader nomargin>0 VP</StandardHeader>
            </DataContainer>
        </FixedHand>
    )
}