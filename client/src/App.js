import React from 'react';
import Game from './screens/Game';
import {GameProvider} from './context/gameContext';

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
