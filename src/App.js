import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import './App.scss';

function App() {

  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [humanChoise, setHumanChoise] = useState('');

  const openModal = () => {
    setModal(true);
  }

  return (

    <div className="App">
      <Header score={score} setScore={setScore} />
      {humanChoise === "" ? <Home setHumanChoise={setHumanChoise} /> : <Game humanChoise={humanChoise} setScore={setScore} />}
      <button className="rulles-button" onClick={openModal}>rules</button>
      {modal === true ? <Modal setModal={setModal} /> : null}
    </div>
  );
}
export default App;