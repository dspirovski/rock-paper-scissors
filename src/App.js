import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/ModalWindow/Modal';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import './App.scss';

function App() {

  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [humanChoise, setHumanChoise] = useState('');

  const playAgain = () => {
    setHumanChoise('');
  };

  return (

    <div className="app">
      <Header score={score} />
      {humanChoise === "" ? <Home setHumanChoise={setHumanChoise} />
        :
        <Game humanChoise={humanChoise} score={score} setScore={setScore} playAgain={playAgain} />}
      <button className="rulles-button" onClick={() => setModal(true)}>rules</button>
      {modal === true ? <Modal setModal={setModal} /> : null}
    </div>
  );
}
export default App;