import React from 'react';
import "./Header.scss";
import logo from '../../images/logo.svg';
import logoBonus from '../../images/logo-bonus.svg';


function Header({ score, gameMode }) {
  return (
    <React.Fragment>
      <div
        className="header">
        <div className="game-name">
          {gameMode === true ? <img src={logo} alt="logo" className="logo-initial" />
            :
            <img src={logoBonus} alt="bonus-logo" className="logo-bonus" />
          }
        </div>
        <div className="score-container">
          <p className="score">score</p>
          <p className="value">{score}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;
