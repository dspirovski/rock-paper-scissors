import React, { useState, useEffect } from 'react';
import './Game.scss';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

const Game = ({ humanChoise, score, setScore, playAgain }) => {

  const [computerChoise, setComputerChoise] = useState('');

  const [message, setMessage] = useState('');

  //generate random computer choise
  const randomComputerChoise = () => {
    const choises = ['paper', 'rock', 'scissors'];
    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //call the function when the page loads
  useEffect(() => {
    randomComputerChoise()
  });

  return (

    <div className="game">
      <div className="choise">
        <h4 className="choise-text">You picked</h4>
        <div className="choise-picked">{humanChoise}</div>
      </div>

      <div className="message">
        <p className="message-text">{message}
          {humanChoise === "paper" && computerChoise === "scissors" && "you lose!"}
          {humanChoise === "paper" && computerChoise === "rock" && 'you win!'}
          {humanChoise === "paper" && computerChoise === "paper" && "draw"}

          {humanChoise === "rock" && computerChoise === "paper" && 'you lose!'}
          {humanChoise === "rock" && computerChoise === "scissors" && 'you win!'}
          {humanChoise === "rock" && computerChoise === "rock" && "draw"}

          {humanChoise === "scissors" && computerChoise === "rock" && 'you lose!'}
          {humanChoise === "scissors" && computerChoise === "paper" && 'you win!'}
          {humanChoise === "scissors" && computerChoise === "scissors" && "draw"}
        </p>
        <button className="play-again-btn" onClick={playAgain}>play again</button>

      </div>

      <div className="choise">
        <h4 className="choise-text">House picked</h4>
        <div className="choise-picked">
          {computerChoise === "paper" &&
            <div className="body">
              <img className="paper" src={paper} alt="paper" />
            </div>}
          {computerChoise === "rock" &&
            <div className="body">
              <img className="rock" src={rock} alt="rock" />
            </div>}
          {computerChoise === "scissors" &&
            <div className="body">
              <img className="scissors" src={scissors} alt="scissors" />
            </div>}
        </div>
      </div>
    </div>
  )
}
export default Game