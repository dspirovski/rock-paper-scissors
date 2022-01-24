import React, { useState } from 'react';
import Game from '../Game/Game';
import './EasyGameMode.scss';
import { motion } from 'framer-motion';

function EasyGameMode({ gameMode, score, setScore }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="easy-mode">
      {humanChoise === "" ?
        <div className="easy-mode-container">
          <main className="easy-mode-body">
            <div className="top">
              <div className="top-left" onClick={() => { setHumanChoise(2) }}>
                <div className="parent-paper">
                  <div className="child child-paper"></div>
                </div>
              </div>
              <div className="top-right" onClick={() => { setHumanChoise(1) }}>
                <div className="parent-scissors">
                  <div className="child child-scissors"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-center" onClick={() => { setHumanChoise(3) }}>
                <div className="parent-rock">
                  <div className="child child-rock"></div>
                </div>
              </div>
            </div>
          </main>
        </div >
        :
        <Game humanChoise={humanChoise} setHumanChoise={setHumanChoise} gameMode={gameMode} score={score} setScore={setScore} />}
    </motion.div >
  )

}
export default EasyGameMode;


