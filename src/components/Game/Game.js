import React, { useState, useEffect } from 'react';
import App from '../../App';
import EasyGameMode from '../EasyGameMode/EasyGameMode';
import HardGameMode from '../HardGameMode/HardGameMode';

import './Game.scss';

const Game = ({ humanChoise, setHumanChoise, score, setScore, gameMode, }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [timer, setTimer] = useState(3);
  // const [test, setTest] = useState(false);

  //Generate random computer choise for easy mode 
  const randomEasyModeChoise = () => {
    const choises = ['paper', 'scissors', 'rock'];
    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //Generate random computer choise for hard mode 
  const randomHardModeChoise = () => {
    const choises = ['paper', 'scissors', 'rock', 'lizard', 'spock'];
    setComputerChoise(choises[Math.floor(Math.random() * 5)])
  }

  //Invoke function regarding user choise (easy or hard mode)
  useEffect(() => {
    gameMode && randomEasyModeChoise();
    !gameMode && randomHardModeChoise();
  }, [humanChoise]);

  // 'paper', 'scissors', 'rock', 'lizard', 'spock'
  const calculateResult = () => {
    if (humanChoise === "scissors" && computerChoise === "paper") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "scissors" && computerChoise === "lizard") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "paper" && computerChoise === "rock") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "paper" && computerChoise === "spock") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "rock" && computerChoise === "lizard") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "lizard" && computerChoise === "spock") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "lizard" && computerChoise === "paper") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "spock" && computerChoise === "scissors") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (humanChoise === "spock" && computerChoise === "rock") {
      setResultMessage('you win');
      setScore(score + 1);
    } else if (computerChoise === "scissors" && humanChoise === "paper") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "scissors" && humanChoise === "lizard") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "paper" && humanChoise === "rock") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "paper" && humanChoise === "spock") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "rock" && humanChoise === "lizard") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "rock" && humanChoise === "scissors") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "lizard" && humanChoise === "spock") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "lizard" && humanChoise === "paper") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "spock" && humanChoise === "scissors") {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if (computerChoise === "spock" && humanChoise === "rock") {
      setResultMessage('you lose');
      setScore(score - 1);
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

  const playAgain = () => {
    setHumanChoise("");
  }

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

          {humanChoise === 'lizard' && <div className="parent-lizard">
            <div className="child child-lizard"></div>
          </div>
          }

          {humanChoise === 'spock' && <div className="parent-spock">
            <div className="child child-spock"></div>
          </div>
          }

        </div>
      </div>

      <div className="message">
        <p className="message-text">
          {timer === 0 ? resultMessage : null}
        </p>
        {timer === 0 ? <button className={
          resultMessage === 'draw' ? "play-again-btn"
            :
            resultMessage === 'you lose' ? 'play-again-btn lose'
              :
              'play-again-btn win'
        }
          onClick={playAgain}>play again</button> : null}
      </div>

        {/* display result for house choise */}
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

            {timer === 0 && computerChoise === "spock" &&
            <div className="parent-spock"><div className="child child-spock"></div>
            </div>}

            {timer === 0 && computerChoise === "lizard" &&
            <div className="parent-lizard"><div className="child child-lizard"></div>
            </div>}
        </div>
      </div>

    </div>
  )
}
export default Game;