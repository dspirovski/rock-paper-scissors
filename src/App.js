import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [humanChoise, setHumanChoise] = useState('');

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (

    <div className="App">
      <Header score={score} setScore={setScore} />
      {humanChoise === "" ? <Home setHumanChoise={setHumanChoise} /> : <Game humanChoise={humanChoise} setScore={setScore} />}
      {<button
        className="rulles-button"
        onClick={() => modalOpen ? close() : open()}
      >
        rules
      </button>}

      {<AnimatePresence>
        initial={false}
        exitBefoteEnter={true}
        {modalOpen ? <Modal modalOpen={modalOpen} handleClose={close} /> : null}
      </AnimatePresence>}
    </div>
  );
}
export default App;