import React, { useState } from 'react';
import Game from '../Game/Game';
import './EasyGameMode.scss';

function EasyGameMode({ gameMode, setGameMode, score, setScore }) {

  const [humanChoise, setHumanChoise] = useState('');

  return (
    <div className="easy-mode">
      {humanChoise === "" ?
        <div className="easy-mode-container">
          <div className="game-modes">
            <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
            <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
          </div>
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
    </div >
  )

}
export default EasyGameMode;


