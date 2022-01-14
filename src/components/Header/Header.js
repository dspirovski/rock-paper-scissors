import React from 'react';
import "./Header.scss";
import logo from '../../images/logo.svg';

function Header({ score }) {
  return (
    <div className="header">
      <div className="game-name">
        <img src={logo} alt="logo" />
      </div>
      <div className="score-container">
        <p className="score">score</p>
        <p className="value">{score}</p>
      </div>


    </div>
  )
}

export default Header;
