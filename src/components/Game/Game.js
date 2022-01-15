import React, { useState, useEffect } from 'react';
import './Game.scss';

const Game = ({ humanChoise, score, setScore, playAgain }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  //generate random computer choise
  const randomComputerChoise = () => {
    const choises = ['scissors', 'paper', 'scissors'];

    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //call the function when the page loads
  useEffect(() => {
    randomComputerChoise()
  }, [humanChoise]);


  const calculateResult = () => {
    if (humanChoise === "paper" && computerChoise === "scissors") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (humanChoise === "paper" && computerChoise === "rock") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "rock" && computerChoise === "paper") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
      setResultMessage('you win');
      setScore(score + 1);
    } else {
      setResultMessage('draw');
    }
  }


  // useEffect(() => {
  //   const timer =
  //     score > 0
  //       ? setInterval(() => {
  //         setScore(score - 1);
  //       }, 1000)
  //       : calculateResult();

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  useEffect(() => {
    calculateResult();
  }, [computerChoise]);



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
          {resultMessage}
        </p>
        <button className="play-again-btn" onClick={playAgain}>play again</button>

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
export default Game;