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
                <div className="icon-paper">
                  <div className="image image-paper"></div>
                </div>
              </div>
              <div className="top-right" onClick={() => { setHumanChoise(1) }}>
                <div className="icon-scissors">
                  <div className="image image-scissors"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-center" onClick={() => { setHumanChoise(3) }}>
                <div className="icon-rock">
                  <div className="image image-rock"></div>
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


