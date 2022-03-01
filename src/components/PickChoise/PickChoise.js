import React, { useState } from 'react';
import Result from '../Result/Result';
import './PickChoise.scss';
import { motion } from 'framer-motion';

function PickChoise({ gameMode, score, setScore, setGameMode }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <React.Fragment>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}>
        {humanChoise === "" ?
          <div>
            <motion.div className="game-modes"
              initial={{ x: '30vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
              <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
            </motion.div>
            {/* // Normal mode */}
            <div className={gameMode === true ? "normal-mode" : "bonus-mode"}>
              {gameMode === true ?
                <div>
                  <div className='normal-top'>
                    <div className='top-left'>
                      <div className="icon-paper" onClick={() => { setHumanChoise(2) }}>
                        <div className="image-paper"></div>
                      </div>
                    </div>
                    <div className='top-right' >
                      <div className="icon-scissors" onClick={() => { setHumanChoise(1) }}>
                        <div className="image image-scissors"></div>
                      </div>
                    </div>
                  </div>
                  <div className='normal-bottom'>
                    <div className="icon-rock" onClick={() => { setHumanChoise(3) }}>
                      <div className="image image-rock"></div>
                    </div>
                  </div>
                </div>
                :
                <div className='bonus-mode'>
                  <div className="bonus-top">
                    <div className="icon-scissors" onClick={() => { setHumanChoise(1) }}>
                      <div className="image image-scissors"></div>
                    </div>
                  </div>
                  <div className="bonus-middle">
                    <div className='left'>
                      <div className="icon-spock" onClick={() => { setHumanChoise(5) }}>
                        <div className="image image-spock"></div>
                      </div>
                    </div>
                    <div className='right'>
                      <div className="icon-paper" onClick={() => { setHumanChoise(2) }}>
                        <div className="image-paper"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bonus-bottom">
                    <div className='left'>
                      <div className="icon-lizard" onClick={() => { setHumanChoise(4) }}>
                        <div className="image image-lizard"></div>
                      </div>
                    </div>
                    <div className='right'>
                      <div className="icon-rock" onClick={() => { setHumanChoise(3) }}>
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
    </React.Fragment>
  )
}
export default PickChoise;


