import React from 'react';
import './Home.scss'
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="main-container">
      <div className="home">
        <main className="flex-container">
          <div className="top">
            <div className="top-left">
              <div className="body">
                <Link to="/game">
                  <img className="rock" src={rock} alt="rock" />
                </Link>
              </div>
            </div>
            <div className="top-right">
              <div className="body">
                <Link to="/game">
                  <img className="paper" src={paper} alt="paper" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-center">
              <div className="body">
                <Link to="/Game">
                  <img className="scissors" src={scissors} alt="scissors" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

}
export default Home


