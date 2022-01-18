import React from 'react';
import "./Header.scss";
import logo from '../../images/logo.svg';
import bonus from '../../images/logo-bonus.svg';

function Header({ score, gameMode }) {
  return (
    <div className="header">
      <div className="game-name">
        {gameMode === true ? <img src={logo} alt="logo" /> : <img src={bonus} alt="bomus-logo" />}
      </div>
      <div className="score-container">
        <p className="score">score</p>
        <p className="value">{score}</p>
      </div>
    </div>
  )
}

export default Header;
