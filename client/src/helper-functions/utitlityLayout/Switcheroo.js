

import React, { useContext } from "react";
import styled from "styled-components";
import GameContext from "../../context/gameContext";
import LogContext from "../../context/logContext";

const Cont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  height: 20%;
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 50px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: darkgreen;
  color: white;
  height: 40px;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 20px;
`;

export default function Switcheroo({ card, players }) {
  const gameContext = useContext(GameContext);
  const logContext = useContext(LogContext);

  const chooseCol = (name) => {
    // logContext.addLog({
    //     type: ``,
    //     key: gameContext.currentTurn.key,
    //     value: `${gameContext.currentTurn.name} plays ${card.displayName}`
    // });
    gameContext.playAction(card, name);
  };

  return (
    <Cont>
      <Inner>
        <p style={{margin: '0px'}}>
          <b>Choose a Player:</b>
        </p>
        <Main>
          {players && players.map(player => {
              if(player.name != gameContext.yourName) {
                  return <StyledButton onClick={() => chooseCol(player.name)}>{player.name}</StyledButton>
              }
          })}
        </Main>
      </Inner>
    </Cont>
  );
}
