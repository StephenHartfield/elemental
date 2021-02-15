import React from "react";
import Game from "./screens/Game";
import { GameProvider } from "./context/gameContext";
import { LogProvider } from "./context/logContext";
import { AIProvider } from "./context/aIContext";

function App() {
  return (
    <LogProvider>
      <AIProvider>
        <GameProvider>
          <Game />
        </GameProvider>
      </AIProvider>
    </LogProvider>
  );
}

export default App;
