import React, { useState } from 'react';
import styled from 'styled-components';
import CardContainer from '../Constants/CardContainer';

const Card = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default function ActionCard({card, faceUp, showOverlay, inOverlay}) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);
    const [localHover, setLocalHover] = useState(false);

    const handleHover = () => {
        setLocalHover(setTimeout(() => {
            showOverlay(card);
        }, 1500));
    }
    const removeHover = () => {
        clearTimeout(localHover)
    }

    return (
        <CardContainer 
            onMouseEnter={handleHover} 
            onMouseLeave={removeHover}
            faceUp={localFaceUp}
            isAction
            inOverlay={inOverlay}
        >
            {localFaceUp && 
                <Card>
                    <CardHeader>{card.displayName}</CardHeader>
                    <div style={{borderTop: 'solid black 2px', width: '100%'}}></div>
                    <CardSubHeader>{card.displaySubtitle}</CardSubHeader>
                    <TextContainer>
                        <CardText>{card.displayText}</CardText>
                    </TextContainer>
                </Card>
            }
        </CardContainer>
    )
}