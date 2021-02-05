import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    min-height: 600px;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 50px;
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
            <Header>elemental</Header>
            <br />
            <br />
            <br />
            <StartBtn onClick={handleStartGame} >Start Game</StartBtn>
        </StyledContainer>
    )
}