import React from 'react';
import Game from './screens/Game';
import { GameProvider } from './context/gameContext';
import { LogProvider } from './context/logContext';

function App() {
  return (
    <LogProvider>
      <GameProvider>
        <Game />
      </GameProvider>
    </LogProvider>
  );
}

export default App;
