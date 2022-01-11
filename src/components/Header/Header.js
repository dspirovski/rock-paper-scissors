import React from 'react';
import "./Header.scss";

function Header({ score, setScore }) {
  return (
    <div className="header">
      <div className="game-name">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="score-container">
        <p className="score">score</p>
        <p className="value">{score}</p>
      </div>


    </div>
  )
}

export default Header;
