import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 60px;
    height: 100px;
    background-color: ${props => props.faceUp ? 'white' : 'gray'};
    border: 2px solid black;
`;

const Card = styled.div`
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
        <StyledContainer onClick={handleClick} faceUp={localFaceUp}>
            <Card>
                {localFaceUp ?
                    <>
                        <CardHeader>{card.displayName}</CardHeader>
                        <div style={{borderTop: 'solid black 2px'}}></div>
                        <img src="" style={{height: '60px', width: '100%', backgroundColor: "lightgray"}} />
                    </>
                :
                    <p>{number}</p>
                }
            </Card>

        </StyledContainer>
    )
}