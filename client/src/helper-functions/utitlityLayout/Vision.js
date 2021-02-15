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

export default function Vision({ card, pool }) {
  const gameContext = useContext(GameContext);
  const logContext = useContext(LogContext);

  const chooseCol = (col) => {
    logContext.addLog({
        type: `Look at the elements in the ${col}${col === 1 ? 'st' : col === 2 ? 'nd' : col === 3 ? 'rd' : 'th'} column`,
        key: gameContext.currentTurn.key,
        value: `${gameContext.currentTurn.name} plays ${card.displayName}`
    });
    gameContext.playAction(card, col);
  };

  return (
    <Cont>
      <Inner>
        <p style={{margin: '0px'}}>
          <b>Choose a Column:</b>
        </p>
        <Main>
          {pool[0].map((col, idx) => (
            <StyledButton
              key={`utilButton${idx}`}
              onClick={() => chooseCol(idx + 1)}
            >
              Column {idx + 1}
            </StyledButton>
          ))}
        </Main>
      </Inner>
    </Cont>
  );
}
