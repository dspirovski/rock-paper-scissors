import React from 'react';
import './Home.scss'

const Home = ({ setHumanChoise }) => {

  return (
    <div className="main-container">
      <div className="home">
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
      </div >
    </div >
  )

}
export default Home;


