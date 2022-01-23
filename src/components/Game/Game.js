import React, { useState, useEffect } from 'react';

import './Game.scss';

const Game = ({ humanChoise, setHumanChoise, score, setScore, gameMode, }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [timer, setTimer] = useState(2);
  //HARD GAME MODE            EASY GAME MODE
  // 2 >>> paper              1 >>> scissors
  // 1 >>> scissors           2 >>> paper
  // 3 >>> rock               3 >>> rock
  // 4 >>> lizard
  // 5 >>> spock 

  //Generate random computer choise for easy mode 
  const randomEasyModeChoise = () => {
    // const choises = [1, 2, 3];
    // setComputerChoise(choises[Math.floor(Math.random() * 3)])
    setComputerChoise(1);
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

    } else if ((humanChoise % 2 === 0 && computerChoise % 2 === 0) && (humanChoise < computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);

    } else if ((humanChoise % 2 === 0 && computerChoise % 2 === 0) && (humanChoise === computerChoise)) {
      setResultMessage('draw');
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS ODD
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 !== 0) && (computerChoise > humanChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
    } else if ((humanChoise % 2 !== 0 && computerChoise % 2 !== 0) && (computerChoise < humanChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
    }

    //HUMAN CHOISE IS EVEN, COMPUTER CHOISE IS ODD
    else if ((humanChoise % 2 === 0 && computerChoise % 2 !== 0) && (humanChoise < computerChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
    } else if ((humanChoise % 2 === 0 && computerChoise % 2 !== 0) && (humanChoise > computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS EVEN
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 === 0) && (humanChoise < computerChoise)) {
      setResultMessage('you win');
      setScore(score + 1);
    }
    else if ((humanChoise % 2 !== 0 && computerChoise % 2 === 0) && (humanChoise > computerChoise)) {
      setResultMessage('you lose');
      setScore(score - 1);
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

  const playAgain = () => {
    setHumanChoise("");
  }

  return (
    //Display result for human choise
    <div className="game">
      <div className="choise">
        <h4 className="choise-text">You picked</h4>
        <div className="choise-picked">

          {humanChoise == `${humanChoise}` && <div className={timer > 0 ? `parent-${humanChoise}` : (resultMessage === "you win" ? `parent-${humanChoise} win` : `parent-${humanChoise}`)}>
            <div className={`child child-${humanChoise}`}></div>
          </div>}

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

          {timer === 0 && computerChoise == `${computerChoise}` &&
            <div className={resultMessage === "you lose" ? `parent-${computerChoise} win` : `parent-${computerChoise}`}><div className={`child child-${computerChoise}`}></div>
            </div>}

        </div>
      </div>

    </div>
  )
}
export default Game;