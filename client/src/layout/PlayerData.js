import React, { useState } from 'react';
import styled from 'styled-components';
import StandardHeader from '../Constants/StandardHeader';
import assets from '../assets/AssetImport';

const Fixed = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpandButton = styled.div`
    width: 200px;
    background-color: lightgray;
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

export default function PlayerData({ playerData }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <Fixed>
            <ExpandButton onClick={handleExpand}>Player Data</ExpandButton>
            {expanded && playerData.map((player, idx) => (
                <DataContainer key={`player${idx}`}>
                    <StandardHeader>{player.name}</StandardHeader>
                    {player.field && player.field.map((itemSection, idx) => (
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
            ))}
        </Fixed>
    )
}