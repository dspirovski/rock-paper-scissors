import React from 'react';
import './Home.scss'
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

const Home = ({ setHumanChoise }) => {

  const paperChoise = () => {
    setHumanChoise("paper");
  }

  const rockChoise = () => {
    setHumanChoise("rock");
  }

  const scissorsChoise = () => {
    setHumanChoise("scissors");
  }


  return (
    <div className="main-container">
      <div className="home">
        <main className="flex-container">
          <div className="top">
            <div className="top-left" onClick={rockChoise}>
              <div className="parent-rock">
                <div className="child child-rock"></div>
              </div>
            </div>
            <div className="top-right" onClick={paperChoise}>
              <div className="parent-paper">
                <div className="child child-paper"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-center" onClick={scissorsChoise}>
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


