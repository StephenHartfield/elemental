import React, { useState } from 'react';
import styled from 'styled-components';
import assets from '../assets/AssetImport';

const StyledContainer = styled.div`
    width: 150px;
    height: 200px;
    background-color: ${props => props.faceUp ? 'white' : 'gray'};
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;
`;

const Card = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    max-height: 40px;
    position: relative;
`;
const Slots = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100px;
`;
const Slot = styled.img`
    font-size: 8px;
    margin: 0px;
    height: 20px;
    width: 20px;
`;

const CardHeader = styled.h3`
    margin: 0px;
    font-size: 14px;
    flex: 8;
    margin-left: 24px;
`;

const TextContainer = styled.div`
    width: 90%;
    border-radius: 8px;
    padding: 8px 5px;
    background-color: #d9d5e5;
    height: 40px;
    max-height: 70px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CardText = styled.p`
    font-style: italic;
    font-size: 12px;
    margin: 0px;
    text-align: center;
`;

export default function ItemCard({card, faceUp}) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);

    //TODO: first long text and give it proper linebreaks
    // example: split text @ every \n and return <Fragment> {textLine} <br /> </Fragment>

    //TODO create popup modal when hovering over any card

    return (
        <StyledContainer faceUp={localFaceUp}>
            {localFaceUp && 
                <Card>
                    <Top>
                        <Slots>
                            {card.slots.map((slot, idx) => <Slot src={assets[slot].inactive} key={`card${card.number}Slot${idx}`} />)}
                        </Slots>
                        <CardHeader>{card.displayName}</CardHeader>
                    </Top>
                    <div style={{height: '100px'}}></div>
                    <TextContainer>
                        <CardText>{card.displayText}</CardText>
                    </TextContainer>
                </Card>
            }
        </StyledContainer>
    )
}