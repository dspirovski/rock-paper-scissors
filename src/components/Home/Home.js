import React, { useState } from 'react';

import './Home.scss'

function Home({ setHumanChoise }) {

  //true = easy game mode
  //false = hard game mode
  const [gameMode, setGameMode] = useState(true);

  return (
    <div className="main-container">
      <div className="game-modes">
        <div className='test'>
          <button className="mode-option" onClick={() => { setGameMode(true) }}>easy</button>
          <button className="mode-option" onClick={() => { setGameMode(false) }}>hard</button>
        </div>
      </div>
      <div className="home">
        {gameMode === true ?
          <main className="flex-container">
            <div className="top">
              <div className="top-left" onClick={() => { setHumanChoise('rock') }}>
                <div className="parent-rock">
                  <div className="child child-rock"></div>
                </div>
              </div>
              <div className="top-right" onClick={() => { setHumanChoise('paper') }}>
                <div className="parent-paper">
                  <div className="child child-paper"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-center" onClick={() => { setHumanChoise('scissors') }}>
                <div className="parent-scissors">
                  <div className="child child-scissors"></div>
                </div>
              </div>
            </div>
          </main>
          : <p>hard mode</p>}
      </div >
    </div >
  )

}
export default Home;


