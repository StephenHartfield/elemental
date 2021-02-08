import React from 'react';
import styled from 'styled-components';
import assets from '../assets/AssetImport';

const StyledContainer = styled.div`
    display: flex;
    min-height: 600px;
    flex-direction: column;
    align-items: center;
`;

const StartBtn = styled.button`
    padding: 10px 20px;
    border-radius: 8px;
    background-color: lightblue;
    font-weight: 700;
`;

export default function StartGame({handleStartGame}) {

    return (
        <StyledContainer>
            <img src={assets.title} style={{height: '260px'}} alt='element logo' />
            <br />
            <br />
            <br />
            <br />
            <StartBtn onClick={handleStartGame} >Start Game</StartBtn>
        </StyledContainer>
    )
}