import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100px;
    height: 150px;
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

export default function ActionCard({card, faceUp}) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);

    return (
        <StyledContainer faceUp={localFaceUp}>
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
        </StyledContainer>
    )
}