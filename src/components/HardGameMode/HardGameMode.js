import React, { useState } from 'react';
import Game from '../Game/Game';
import './HardGameMode.scss';
import { motion } from 'framer-motion';


function HardGameMode({ gameMode, setGameMode, score, setScore }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <div className="hard-mode">
      {humanChoise === "" ?
        <div className="hard-mode-container">
          <div className="game-modes">
            <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
            <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
          </div>
          <div className="hard-mode-body">

            {/* TOP position */}
            <div className='position-top'>
              <div className="scissors-position" onClick={() => { setHumanChoise(1) }}>
                <div className="icon-scissors">
                  <div className="image image-scissors"></div>
                </div>
              </div>
            </div>

            {/* MIDDLE POSITION */}
            <div className='position-middle'>

              <div className="spock-position" onClick={() => { setHumanChoise(5) }}>
                <div className="icon-spock">
                  <div className="image image-spock"></div>
                </div>
              </div>
              <div className="paper-position" onClick={() => { setHumanChoise(2) }}>
                <div className="icon-paper">
                  <div className="image image-paper"></div>
                </div>
              </div>
            </div>

            {/* position bottom */}
            <div className='position-bottom'>
              <div className="lizard-position" onClick={() => { setHumanChoise(4) }}>
                <div className="icon-lizard">
                  <div className="image image-lizard"></div>
                </div>
              </div>
              <div className="rock-position" onClick={() => { setHumanChoise(3) }}>
                <div className="icon-rock">
                  <div className="image image-rock"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <Game humanChoise={humanChoise} setHumanChoise={setHumanChoise} gameMode={gameMode} score={score} setScore={setScore} setGameMode={setGameMode} />}
    </div>

  )
}

export default HardGameMode;