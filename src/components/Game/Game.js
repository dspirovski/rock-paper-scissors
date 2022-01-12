import React, { useState, useEffect } from 'react';
import './Game.scss';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

const Game = ({ humanChoise, setScore }) => {

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

  const incrementScore = () => {
    setScore(+1)
  }

  const decrementScore = () => {
    setScore(-1)
  }
  return (

    <div className="game">
      <div className="picked-text">
        <h4>You picked</h4>
        <h4>House picked</h4>
      </div>

      <div className="container">
        <div className="human-picked">{humanChoise}</div>
        <div className="result">
          <div className="message">

            {humanChoise === "paper" && computerChoise === "scissors" && decrementScore() && "you lose!"}
            {humanChoise === "paper" && computerChoise === "rock" && incrementScore() && "you win!"}
            {humanChoise === "paper" && computerChoise === "paper" && "draw"}

            {humanChoise === "rock" && computerChoise === "paper" && decrementScore() && "you lose!"}
            {humanChoise === "rock" && computerChoise === "scissors" && incrementScore() && "you win!"}
            {humanChoise === "rock" && computerChoise === "rock" && "draw"}

            {humanChoise === "scissors" && computerChoise === "rock" && decrementScore() && "you lose!"}
            {humanChoise === "scissors" && computerChoise === "paper" && incrementScore() && "you win!"}
            {humanChoise === "scissors" && computerChoise === "scissors" && "draw"}
          </div>

          <button className="play-again-btn">play again</button>
        </div>
        <div className="house-picked">
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