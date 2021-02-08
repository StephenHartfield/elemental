import React, { useState } from 'react';
import styled from 'styled-components';
import assets from '../assets/AssetImport';
import CardContainer from '../Constants/CardContainer';

const Card = styled.div`
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const CardHeader = styled.h3`
    text-align: center;
    margin: 0px;
    font-size: 14px;
`;

export default function ElementCard({ card, faceUp, number }) {
    const [localFaceUp, setLocalFaceUp] = useState(faceUp);

    const handleClick = () => {
        setLocalFaceUp(!localFaceUp);
    }

    return (
        <CardContainer onClick={handleClick} faceUp={localFaceUp}>
            <Card>
                {localFaceUp ?
                    <>
                        <CardHeader>{card.displayName}</CardHeader>
                        <div style={{borderTop: 'solid black 2px'}}></div>
                        <img src={assets[card.value].active} style={{height: '60px', width: '100%', backgroundColor: "lightgray"}} />
                    </>
                :
                    <p>{number}</p>
                }
            </Card>

        </CardContainer>
    )
}