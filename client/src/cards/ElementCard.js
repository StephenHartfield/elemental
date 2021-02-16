import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import assets from "../assets/AssetImport";
import CardContainer from "../Constants/CardContainer";
import GameContext from "../context/gameContext";
import LogContext from "../context/logContext";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default function ElementCard({ card }) {
  const [localFaceUp, setLocalFaceUp] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { elements } = assets.cards;
  const gameContext = useContext(GameContext);
  const logContext = useContext(LogContext);

  useEffect(() => {
    setLocalFaceUp(card.isFaceUp);
  }, [card.isFaceUp]);

  useEffect(() => {
    if (gameContext.fadeCard.length > 0) {
      gameContext.fadeCard.forEach((fCard) => {
        if (fCard.id === card.id) {
          setIsFading(true);
          setTimeout(() => {
            setLocalFaceUp(card.isFaceUp);
            setIsFading(false);
          }, 1000);
        }
      });
    }
  }, [gameContext.fadeCard]);

  const handleClick = () => {
    if (gameContext.typeInPlay === "draw") {
      setLocalFaceUp(!localFaceUp);
    }
    logContext.addLog({
      type: "pickElement",
      key: gameContext.currentTurn.key,
      value: `${gameContext.currentTurn.name} draws ${card.displayName}`,
    });
    gameContext.pickElement(card);
  };

  return (
    <CardContainer
      highlight={card.highlight && !card.disabled}
      isFading={isFading}
      noborder
      onClick={card.highlight && !card.disabled ? handleClick : null}
      faceUp={localFaceUp}
    >
      {card.displayName ? (
        <Card>
          {localFaceUp ? (
            <>
              {elements[card.value] ? (
                <img
                  src={elements[card.value]}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              ) : (
                <p>{card.displayName}</p>
              )}
            </>
          ) : (
            <img
              src={elements.back}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </Card>
      ) : (
        <p style={{textAlign: 'center', margin: '0px'}}>{card.number}</p>
      )}
    </CardContainer>
  );
}
