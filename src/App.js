import React, { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import PickChoise from './components/PickChoise/PickChoise';
import './App.scss';
import { motion } from 'framer-motion';

function App() {

  //gameMode = true >> normal game mode
  //gameMode = false >>> bonus game mode
  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(true);

  return (

    <motion.div className="app"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}

    >
      <Header score={score} gameMode={gameMode} />
      <PickChoise setGameMode={setGameMode} score={score} setScore={setScore} gameMode={gameMode} />
      <motion.button
        className="rulles-button"
        onClick={() => setModal(true)}
        initial={{ x: '-30vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >rules</motion.button>
      {modal === true ? <Modal setModal={setModal} gameMode={gameMode} /> : null}
    </motion.div>
  );
}

export default App;