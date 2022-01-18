import React, { useState } from 'react';
import Game from '../Game/Game';
import './HardGameMode.scss';

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
            <div className="item scissors-position" onClick={() => { setHumanChoise('scissors') }}>
              <div className="parent-scissors">
                <div className="child child-scissors"></div>
              </div>
            </div>
            <div className="item paper-position" onClick={() => { setHumanChoise('paper') }}>
              <div className="parent-paper">
                <div className="child child-paper"></div>
              </div>
            </div>
            <div className="item rock-position" onClick={() => { setHumanChoise('rock') }}>
              <div className="parent-rock">
                <div className="child child-rock"></div>
              </div>
            </div>
            <div className="item lizard-position" onClick={() => { setHumanChoise('lizard') }}>
              <div className="parent-lizard">
                <div className="child child-lizard"></div>
              </div>
            </div>
            <div className="item spock-position" onClick={() => { setHumanChoise('spock') }}>
              <div className="parent-spock">
                <div className="child child-spock"></div>
              </div>
            </div>
          </div>
        </div>
        : <Game humanChoise={humanChoise} gameMode={gameMode} score={score} setScore={setScore} />}
    </div>

  )
}

export default HardGameMode;
