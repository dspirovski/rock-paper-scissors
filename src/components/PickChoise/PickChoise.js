import React, { useState } from 'react';
import Result from '../Result/Result';
import './PickChoise.scss';
import { motion } from 'framer-motion';

function EasyGameMode({ gameMode, score, setScore, setGameMode }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}>
      {humanChoise === "" ?
        <div>
          <motion.div className="game-modes"
            initial={{ x: '30vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
          >
            <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
            <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
          </motion.div>
          {/* // Normal mode */}
          <div className={gameMode === true ? "normal-mode" : "bonus-mode"}>
            {gameMode === true ?
              <div>
                <div className='normal-top'>
                  <div className='top-left' onClick={() => { setHumanChoise(2) }}>
                    <div className="icon-paper">
                      <div className="image-paper"></div>
                    </div>
                  </div>
                  <div className='top-right' onClick={() => { setHumanChoise(1) }}>
                    <div className="icon-scissors">
                      <div className="image image-scissors"></div>
                    </div>
                  </div>
                </div>
                <div className='normal-bottom' onClick={() => { setHumanChoise(3) }}>
                  <div className="icon-rock">
                    <div className="image image-rock"></div>
                  </div>
                </div>
              </div>
              :
              <div className='bonus-mode'>
                <div className="bonus-top" onClick={() => { setHumanChoise(1) }}>
                  <div className="icon-scissors">
                    <div className="image image-scissors"></div>
                  </div>
                </div>
                <div className="bonus-middle">
                  <div className='left' onClick={() => { setHumanChoise(5) }}>
                    <div className="icon-spock">
                      <div className="image image-spock"></div>
                    </div>
                  </div>
                  <div className='right' onClick={() => { setHumanChoise(2) }}>
                    <div className="icon-paper">
                      <div className="image-paper"></div>
                    </div>
                  </div>
                </div>
                <div className="bonus-bottom">
                  <div className='left' onClick={() => { setHumanChoise(4) }}>
                    <div className="icon-lizard">
                      <div className="image image-lizard"></div>
                    </div>
                  </div>
                  <div className='right' onClick={() => { setHumanChoise(3) }}>
                    <div className="icon-rock">
                      <div className="image image-rock"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        :
        <Result humanChoise={humanChoise} setHumanChoise={setHumanChoise} gameMode={gameMode} score={score} setScore={setScore} />
      }
    </motion.div >
  )
}
export default EasyGameMode;


