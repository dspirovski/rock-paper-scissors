import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/ModalWindow/Modal';
import EasyGameMode from './components/EasyGameMode/EasyGameMode';
import HardGameMode from './components/HardGameMode/HardGameMode';
import './App.scss';

function App() {

  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(true);
  //gameMode = true >>> easy game mode
  //gameMode = false >>> hard game mode

  return (

    <div className="app">
      <Header score={score} gameMode={gameMode} />

      {gameMode === true ? <EasyGameMode setGameMode={setGameMode} score={score} setScore={setScore} gameMode={gameMode} /> : <HardGameMode setGameMode={setGameMode} score={score} setScore={setScore} gameMode={gameMode} />}
      <button className="rulles-button" onClick={() => setModal(true)}>rules</button>
      {modal === true ? <Modal setModal={setModal} gameMode={gameMode} /> : null}
    </div>
  );
}

export default App;