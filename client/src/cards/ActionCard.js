import React, { useState } from 'react';
import styled from 'styled-components';
import CardContainer from '../Constants/CardContainer';
import {actions} from '../assets/AssetImport';

const Card = styled.div`
    padding: ${props => props.full ? '0px' : '8px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.full ? '100%' : ''};
    height: ${props => props.full ? '100%' : ''};
`;

const CardHeader = styled.h3`
    text-align: center;
    margin: 0px;
    font-size: 14px;
`;

const CardSubHeader = styled.p`
    font-size: 16px;
    margin: 0px;
    text-align: center;
    font-size: 12px;
`;

const TextContainer = styled.div`
    width: 90%;
    border-radius: 8px;
    padding: 2px;
    background-color: #d9d5e5;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardText = styled.p`
    font-style: italic;
    font-size: 10px;
    margin: 0px;
    text-align: center;
`;

export default function ActionCard({ card, faceUp, showOverlay, inOverlay }) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);
    const [localHover, setLocalHover] = useState(false);

    const handleHover = () => {
        setLocalHover(setTimeout(() => {
            showOverlay(card);
        }, 1500));
    }
    const handleClick = () => {
        showOverlay(card);
    }
    const removeHover = () => {
        clearTimeout(localHover)
    }

    return (
        <CardContainer
            onMouseEnter={!inOverlay && !card.disabled ? handleHover : null}
            onMouseLeave={!inOverlay ? removeHover : null}
            onClick={!inOverlay && !card.disabled ? handleClick : null}
            faceUp={localFaceUp}
            isAction
            inOverlay={inOverlay}
        >
            {localFaceUp &&
                <>
                    {
                        actions[card.value] ?
                            <Card full>
                                <img src={actions[card.value]} style={{ height: '100%', width: '100%' }} />
                            </Card>
                            :
                            <Card>
                                <CardHeader>{card.displayName}</CardHeader>
                                <div style={{ borderTop: 'solid black 2px', width: '100%' }}></div>
                                <CardSubHeader>{card.displaySubtitle}</CardSubHeader>
                                <TextContainer>
                                    <CardText>{card.displayText}</CardText>
                                </TextContainer>
                            </Card>
                    }
                </>
            }
        </CardContainer >
    )
}