import React, { useState, useEffect } from 'react';

import './Game.scss';

const Game = ({ humanChoise, setHumanChoise, score, setScore, gameMode, }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [timer, setTimer] = useState(3);
  //HARD GAME MODE            EASY GAME MODE
  // 1 >>> scissors           1 >>> paper
  // 2 >>> paper              2 >>> scissors
  // 3 >>> rock               3 >>> rock
  // 4 >>> lizard
  // 5 >>> spock 

  //Generate random computer choise for easy mode 
  const randomEasyModeChoise = () => {
    // const choises = [1,2,3];
    // setComputerChoise(choises[Math.floor(Math.random() * 3)])
    setComputerChoise(1)
  }

  //Generate random computer choise for hard mode 
  const randomHardModeChoise = () => {
    const choises = [1, 2, 3, 4, 5];
    setComputerChoise(choises[Math.floor(Math.random() * 5)])
  }

  //Invoke function regarding user choise (easy or hard mode)

  useEffect(() => {
    gameMode && randomEasyModeChoise();
    !gameMode && randomHardModeChoise();
  }, [humanChoise]);


  const calculateResult = () => {
    //HUMAN CHOISE IS EVEN, COMPUTER CHOISE IS EVEN
    if ((humanChoise % 2 === 0 && computerChoise % 2 === 0) && (humanChoise > computerChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);

    } else if ((humanChoise % 2 === 0 && computerChoise % 2 === 0) && (humanChoise < computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);

    } else if ((humanChoise % 2 === 0 && computerChoise % 2 === 0) && (humanChoise === computerChoise)) {
      setResultMessage('draw');
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS ODD
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 !== 0) && (computerChoise > humanChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    } else if ((humanChoise % 2 !== 0 && computerChoise % 2 !== 0) && (computerChoise < humanChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    }

    //HUMAN CHOISE IS EVEN, COMPUTER CHOISE IS ODD
    else if ((humanChoise % 2 === 0 && computerChoise % 2 !== 0) && (humanChoise < computerChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    } else if ((humanChoise % 2 === 0 && computerChoise % 2 !== 0) && (humanChoise > computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS EVEN
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 === 0) && (humanChoise < computerChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    }
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 === 0) && (humanChoise > computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
      console.log(`Human choise ${humanChoise}`);
      console.log(`Computer choise ${computerChoise}`);
    } else if (humanChoise === computerChoise) {
      setResultMessage('draw');
    } else {
      console.log('ERROR');
    }
  };

  useEffect(() => {
    const countDown = timer > 0 ? setInterval(() => {
      setTimer(timer - 1)
    }, 1000) : calculateResult();
    return () => {
      clearInterval(countDown)
    }

  }, [timer]);

  // const countdown = () => {
  //   setTimeout(function () { setTimer(2) }, 1000);
  //   setTimeout(function () { setTimer(1) }, 2000);
  //   setTimeout(function () { setTimer(0) }, 3000);
  //   setTimeout(function () { calculateResult() }, 3000);
  // };

  // useEffect(() => {
  //   countdown();
  // }, [computerChoise]);

  const playAgain = () => {
    setHumanChoise("");
  }

  return (
    //Display result for human choise
    <div className="game">
      <div className="choise">
        <h4 className="choise-text">You picked</h4>
        <div className="choise-picked">
          {humanChoise === 2 && <div className="parent-paper">
            <div className="child child-paper"></div>
          </div>}
          {humanChoise === 3 && <div className={timer > 0 ? "parent-rock" : (resultMessage === "you win" ? "parent-rock win" : "parent-rock")}>
            <div className="child child-rock"></div>
          </div>}
          {humanChoise === 1 && <div className="parent-scissors">
            <div className="child child-scissors"></div>
          </div>
          }

          {humanChoise === 4 && <div className="parent-lizard">
            <div className="child child-lizard"></div>
          </div>
          }

          {humanChoise === 5 && <div className="parent-spock">
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
          {timer === 0 && computerChoise === 2 &&
            <div className="parent-paper"><div className="child child-paper"></div>
            </div>}

          {timer === 0 && computerChoise === 1 &&
            <div className="parent-scissors"><div className="child child-scissors"></div>
            </div>}

          {timer === 0 && computerChoise === 3 &&
            <div className="parent-rock"><div className="child child-rock"></div>
            </div>}

          {timer === 0 && computerChoise === 5 &&
            <div className="parent-spock"><div className="child child-spock"></div>
            </div>}

          {timer === 0 && computerChoise === 4 &&
            <div className="parent-lizard"><div className="child child-lizard"></div>
            </div>}
        </div>
      </div>

    </div>
  )
}
export default Game;