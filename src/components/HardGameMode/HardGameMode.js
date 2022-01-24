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
                <div className="parent-scissors">
                  <div className="child child-scissors"></div>
                </div>
              </div>
            </div>

            {/* MIDDLE POSITION */}
            <div className='position-middle'>
              <div className="paper-position" onClick={() => { setHumanChoise(2) }}>
                <div className="parent-paper">
                  <div className="child child-paper"></div>
                </div>
              </div>
              <div className="rock-position" onClick={() => { setHumanChoise(3) }}>
                <div className="parent-rock">
                  <div className="child child-rock"></div>
                </div>
              </div>
            </div>

            {/* position bottom */}
            <div className='position-bottom'>
              <div className="lizard-position" onClick={() => { setHumanChoise(4) }}>
                <div className="parent-lizard">
                  <div className="child child-lizard"></div>
                </div>
              </div>
              <div className="spock-position" onClick={() => { setHumanChoise(5) }}>
                <div className="parent-spock">
                  <div className="child child-spock"></div>
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
