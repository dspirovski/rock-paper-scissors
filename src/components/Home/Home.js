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
        {/* Easy mode */}
        {gameMode === true ?
          <main className="easy-mode-container">
            <div className="top">
              <div className="top-left" onClick={() => { setHumanChoise('paper') }}>
                <div className="parent-paper">
                  <div className="child child-paper"></div>
                </div>
              </div>
              <div className="top-right" onClick={() => { setHumanChoise('scissors') }}>
                <div className="parent-scissors">
                  <div className="child child-scissors"></div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-center" onClick={() => { setHumanChoise('rock') }}>
                <div className="parent-rock">
                  <div className="child child-rock"></div>
                </div>
              </div>
            </div>
          </main>
          // Hard mode
          : <main className="hard-mode-container">
            <div className="possition possition1" onClick={() => { setHumanChoise('scissors') }}>     <div className="parent-paper">
              <div className="child child-paper"></div>
            </div></div>
            <div className="possition possition2">possition2</div>
            <div className="possition possition3">possition3</div>
            <div className="possition possition4">possition4</div>
            <div className="possition possition5">possition5</div>
            <div className="possition possition6">possition6</div>
          </main>
        }
      </div >
    </div >
  )

}
export default Home;


