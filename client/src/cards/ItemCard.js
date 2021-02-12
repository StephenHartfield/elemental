import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import assets from '../assets/AssetImport';
import CardContainer from '../Constants/CardContainer';
import GameContext from '../context/gameContext';
import LogContext from '../context/logContext';

const Card = styled.div`
    padding: ${props => props.full ? '0px' : '8px'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.full ? 'flex-start' : 'center'};
    width: ${props => props.full ? '100%' : ''};
    height: ${props => props.full ? '100%' : ''};
`;

const Top = styled.div`
    display: flex;
    width: 100%;
    margin-left: ${props => props.full ? props.inOverlay ? '18px' : '11px' : ''};
    align-items: center;
    max-height: 40px;
    position: relative;
`;
const Slots = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${props => props.full ? props.inOverlay ? '20px' : '10px' : 0};
    left: 0;
    min-height: 100px;
`;
const Slot = styled.img`
    font-size: 8px;
    margin: 0px;
    height: ${props => props.inOverlay ? '50px' : '24px'};
    width: ${props => props.inOverlay ? '50px' : '24px'};
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

export default function ItemCard({ card, faceUp, showOverlay, inOverlay, selectCard }) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);
    const [localHover, setLocalHover] = useState(false);
    const { icons } = assets;
    const { items } = assets.cards;

    const handleHover = () => {
        setLocalHover(setTimeout(() => {
            showOverlay(card);
        }, 1500));
    }
    const handlePickCard = () => {
        selectCard(card);
    }
    const handleClick = () => {
        showOverlay(card);
    }
    const removeHover = () => {
        clearTimeout(localHover)
    }
    

    //TODO: first long text and give it proper linebreaks
    // example: split text @ every \n and return <Fragment> {textLine} <br /> </Fragment>

    //TODO create popup modal when hovering over any card

    //TODO resize images to be smaller

    return (
        <CardContainer
            inOverlay={inOverlay}
            highlight={card.highlight}
            onMouseEnter={!inOverlay ? handleHover : null}
            onMouseLeave={!inOverlay ? removeHover : null}
            onClick={card.highlight ? handlePickCard : !inOverlay ? handleClick : null}
            faceUp={localFaceUp}
            item
        >
            {localFaceUp &&
                <>
                    {items[card.value] ?
                        <Card full>
                            <Top full inOverlay={inOverlay}>
                                <Slots full inOverlay={inOverlay}>
                                    {card.slots.map((slot, idx) => 
                                        <Slot
                                            src={icons[slot.name][slot.isActive ? 'active' : 'inactive']}
                                            key={`card${card.number}Slot${idx}`}
                                            inOverlay={inOverlay}
                                        />)}
                                </Slots>
                            </Top>
                            <img src={items[card.value]} style={{ height: '100%', width: '100%' }} />
                        </Card>
                        :
                        <Card>
                            <Top>
                                <Slots>
                                    {card.slots.map((slot, idx) =>
                                        <Slot
                                            src={icons[slot.name][slot.isActive ? 'active' : 'inactive']}
                                            key={`card${card.number}Slot${idx}`}
                                            inOverlay={inOverlay}
                                        />)}
                                </Slots>
                                <CardHeader>{card.displayName}</CardHeader>
                            </Top>
                            <div style={{ height: '100px' }}></div>
                            <TextContainer>
                                <CardText>{card.displayText}</CardText>
                            </TextContainer>
                        </Card>
                    }
                </>
            }
        </CardContainer>
    )
}