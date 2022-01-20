import React, { useState } from 'react';
import Game from '../Game/Game';
import './EasyGameMode.scss';
import { motion } from 'framer-motion';

function EasyGameMode({ gameMode, setGameMode, score, setScore }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <div className="easy-mode">
      {humanChoise === "" ?
        <div className="easy-mode-container">
          <motion.div className="game-modes"
            initial={{ x: '30vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
          >
            <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
            <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
          </motion.div>
          <main className="easy-mode-body">
            <div className="top">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="top-left" onClick={() => { setHumanChoise(2) }}>
                <div className="parent-paper">
                  <div className="child child-paper"></div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="top-right" onClick={() => { setHumanChoise(1) }}>
                <div className="parent-scissors">
                  <div className="child child-scissors"></div>
                </div>
              </motion.div>
            </div>
            <div className="bottom">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bottom-center" onClick={() => { setHumanChoise(3) }}>
                <div className="parent-rock">
                  <div className="child child-rock"></div>
                </div>
              </motion.div>
            </div>
          </main>
        </div >
        :
        <Game humanChoise={humanChoise} setHumanChoise={setHumanChoise} gameMode={gameMode} score={score} setScore={setScore} />}
    </div >
  )

}
export default EasyGameMode;


