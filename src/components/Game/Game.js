import React, { useState, useEffect } from 'react';
import './Game.scss';

const Game = ({ humanChoise, score, setScore, playAgain }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [timer, setTimer] = useState(3);

  //Generate random computer choise
  const randomComputerChoise = () => {
    const choises = ['paper', 'scissors', 'rock'];

    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //Call calculateResult function when humanChoise changes
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
  };

  const countdown = () => {
    setTimeout(function () { setTimer(2) }, 1000);
    setTimeout(function () { setTimer(1) }, 2000);
    setTimeout(function () { setTimer(0) }, 3000);
    setTimeout(function () { calculateResult() }, 3000);
  };
  useEffect(() => {
    countdown();
  }, [computerChoise]);


  return (
    //Display result for human choise
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
          {timer === 0 ? resultMessage : null}
        </p>
        {timer === 0 ? <button className="play-again-btn" onClick={playAgain}>play again</button> : null}
      </div>

      <div className="choise">
        <h4 className="choise-text">The House picked</h4>
        <div className="choise-picked house-picked">
          {timer > 0 && timer}
          {timer === 0 && computerChoise === "paper" &&
            <div className="parent-paper"><div className="child child-paper"></div>
            </div>}

          {timer === 0 && computerChoise === "scissors" &&
            <div className="parent-scissors"><div className="child child-scissors"></div>
            </div>}
          {timer === 0 && computerChoise === "rock" &&
            <div className="parent-rock"><div className="child child-rock"></div>
            </div>}
        </div>
      </div>

    </div>
  )
}
export default Game;