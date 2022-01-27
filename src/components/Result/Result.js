import React, { useState, useEffect } from 'react';
import './Result.scss';

const Game = ({ humanChoise, setHumanChoise, score, setScore, gameMode, }) => {

  const [computerChoise, setComputerChoise] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [timer, setTimer] = useState(3);

  //NORMAL GAME MODE              //BONUS GAME MODE                
  // 1. scissors                  1. scissors
  // 2. paper                     2. paper
  // 3. rock                      3. rock
  //                              4. lizard
  //                              5. spock 

  //Generate random computer choise for normal mode 
  const randomNormalModeChoise = () => {
    const choises = [1, 2, 3];
    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //Generate random computer choise for bonus mode 
  const randomBonusModeChoise = () => {
    const choises = [1, 2, 3, 4, 5];
    setComputerChoise(choises[Math.floor(Math.random() * 5)]);
  }

  //Invoke function regarding user choise (normal or bonus mode)
  useEffect(() => {
    gameMode && randomNormalModeChoise();
    !gameMode && randomBonusModeChoise();
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

  return (
    //Display result for human choise
    <div className="game">
      <div className="choise">
        <h4 className="choise-text">You picked</h4>
        <div className="choise-picked">

          {humanChoise === +`${humanChoise}` && <div className={timer > 0 ? `icon-${humanChoise}`
            :
            (resultMessage === "you win" ? `icon-${humanChoise} win` : `icon-${humanChoise}`)}>
            <div className={`image-${humanChoise}`}></div>
          </div>}

        </div>
      </div>

      <div className="message"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}

      >
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
          onClick={() => { setHumanChoise("") }}>play again</button> : null}
      </div>

      {/* Display result for house choise */}
      <div className="choise">
        <h4 className="choise-text">The House picked</h4>
        <div className="choise-picked house-picked">
          {timer > 0 && timer}

          {timer === 0 && computerChoise === +`${computerChoise}` &&
            <div className={resultMessage === "you lose" ? `icon-${computerChoise} win` : `icon-${computerChoise}`}><div className={` image-${computerChoise}`}></div>
            </div>}

        </div>
      </div>
    </div>
  )
}
export default Game;