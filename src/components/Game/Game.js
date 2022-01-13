import React, { useState, useEffect } from 'react';
import './Game.scss';

const Game = ({ humanChoise, score, setScore, playAgain }) => {

  const [computerChoise, setComputerChoise] = useState('');


  //generate random computer choise
  const randomComputerChoise = () => {
    const choises = ['paper', 'rock', 'scissors'];
    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  function incrementScore() {
    // updatePageState();
    setScore(score + 1);
  };

  function decrementScore() {
    // updatePageState();
    setScore(score - 1);
  }

  //call the function when the page loads
  useEffect(() => {
    randomComputerChoise()
  });

  return (

    <div className="game">
      <div className="choise">
        <h4 className="choise-text">You picked</h4>
        <div className="choise-picked">
          {humanChoise === 'paper' && <div className="parent-paper">
            <div className="child child-paper"></div>
          </div>}
          {humanChoise === 'rock' && <div className="parent-rock">
            <div className="child child-rock"></div>
          </div>}
          {humanChoise === 'scissors' && <div className="parent-scissors">
            <div className="child child-scissors"></div>
          </div>
          }
        </div>
      </div>

      <div className="message">
        <p className="message-text">
          {humanChoise === "paper" && computerChoise === "scissors" && "you lose"}
          {humanChoise === "paper" && computerChoise === "rock" && "you win"}
          {humanChoise === "paper" && computerChoise === "paper" && "draw"}

          {humanChoise === "rock" && computerChoise === "paper" && "you lose"}
          {humanChoise === "rock" && computerChoise === "scissors" && "you win"}
          {humanChoise === "rock" && computerChoise === "rock" && "draw"}

          {humanChoise === "scissors" && computerChoise === "rock" && "you lose"}
          {humanChoise === "scissors" && computerChoise === "paper" && "you win"}
          {humanChoise === "scissors" && computerChoise === "scissors" && "draw"}
        </p>
        <button className="play-again-btn" onClick={playAgain}>play again</button>

        {/* <button onClick={incrementScore}>increment</button>
        <button onClick={decrementScore}>decrement</button> */}
      </div>

      <div className="choise">
        <h4 className="choise-text">The House picked</h4>
        <div className="choise-picked">
          {computerChoise === "paper" &&
            <div className="parent-paper">
              <div className="child child-paper"></div>
            </div>}
          {computerChoise === "rock" &&
            <div className="parent-rock">
              <div className="child child-rock"></div>
            </div>}
          {computerChoise === "scissors" &&
            <div className="parent-scissors">
              <div className="child child-scissors"></div>
            </div>}
        </div>
      </div>

    </div>
  )
}
export default Game