import React, { useState, useEffect } from "react";
import "./Result.scss";

const Game = ({ humanChoise, setHumanChoise, score, setScore, gameMode }) => {
  const [computerChoise, setComputerChoise] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [timer, setTimer] = useState(3);

  //NORMAL GAME MODE              //BONUS GAME MODE
  // 1. scissors                  1. scissors
  // 2. paper                     2. paper
  // 3. rock                      3. rock
  //                              4. lizard
  //                              5. spock

  /**
   * Generates a random number between 1 and 3 and sets it as the computer's choice.
   * @function
   * @returns {void}
   */
  const randomNormalModeChoise = () => {
    const choises = [1, 2, 3];
    setComputerChoise(choises[Math.floor(Math.random() * 3)]);
  };

  /**

Generates a random choice for the computer in bonus mode.
@function
@returns {void}
*/
  const randomBonusModeChoise = () => {
    const choises = [1, 2, 3, 4, 5];
    setComputerChoise(choises[Math.floor(Math.random() * 5)]);
  };

  /**
   * React hook that randomly chooses a computer's move based on the selected game mode.
   * @param {boolean} gameMode - Determines the game mode: true for Normal Mode and false for Bonus Mode.
   */
  useEffect(() => {
    gameMode && randomNormalModeChoise();
    !gameMode && randomBonusModeChoise();
  }, [gameMode]);

  /**

Calculates the game result based on the choices made by the human and the computer.
@returns {void}
*/

  const calculateResult = () => {
    //HUMAN CHOISE IS EVEN, COMPUTER CHOISE IS EVEN
    if (
      humanChoise % 2 === 0 &&
      computerChoise % 2 === 0 &&
      humanChoise > computerChoise
    ) {
      setResultMessage("you win");
      setScore(score + 1);
    } else if (
      humanChoise % 2 === 0 &&
      computerChoise % 2 === 0 &&
      humanChoise < computerChoise
    ) {
      setResultMessage("you lose");
      setScore(score - 1);
    } else if (
      humanChoise % 2 === 0 &&
      computerChoise % 2 === 0 &&
      humanChoise === computerChoise
    ) {
      setResultMessage("draw");
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS ODD
    else if (
      humanChoise % 2 !== 0 &&
      computerChoise % 2 !== 0 &&
      computerChoise > humanChoise
    ) {
      setResultMessage("you lose");
      setScore(score - 1);
    } else if (
      humanChoise % 2 !== 0 &&
      computerChoise % 2 !== 0 &&
      computerChoise < humanChoise
    ) {
      setResultMessage("you win");
      setScore(score + 1);
    }

    //HUMAN CHOISE IS EVEN, COMPUTER CHOISE IS ODD
    else if (
      humanChoise % 2 === 0 &&
      computerChoise % 2 !== 0 &&
      humanChoise < computerChoise
    ) {
      setResultMessage("you win");
      setScore(score + 1);
    } else if (
      humanChoise % 2 === 0 &&
      computerChoise % 2 !== 0 &&
      humanChoise > computerChoise
    ) {
      setResultMessage("you lose");
      setScore(score - 1);
    }

    //HUMAN CHOISE IS ODD, COMPUTER CHOISE IS EVEN
    else if (
      humanChoise % 2 !== 0 &&
      computerChoise % 2 === 0 &&
      humanChoise < computerChoise
    ) {
      setResultMessage("you win");
      setScore(score + 1);
    } else if (
      humanChoise % 2 !== 0 &&
      computerChoise % 2 === 0 &&
      humanChoise > computerChoise
    ) {
      setResultMessage("you lose");
      setScore(score - 1);
    } else if (humanChoise === computerChoise) {
      setResultMessage("draw");
    } else {
      console.log("ERROR");
    }
  };

  /**
   * Runs a countdown timer and calculates the result when the timer reaches zero.
   *
   * @param {number} timer - The remaining time on the countdown timer.
   * @returns {void}
   */
  useEffect(() => {
    const countDown =
      timer > 0
        ? setInterval(() => {
            setTimer(timer - 1);
          }, 1000)
        : calculateResult();
    return () => {
      clearInterval(countDown);
    };
  }, [timer]);

  /**

Renders the game display and result based on user and computer choice.
@returns {JSX.Element} The JSX code for the game display and result.
*/

  return (
    //Display result for human choise
    <React.Fragment>
      <div className="game">
        <div className="choise">
          <h4 className="choise-text">You picked</h4>
          <div className="choise-picked">
            {humanChoise === +`${humanChoise}` && (
              <div
                className={
                  timer > 0
                    ? `icon-${humanChoise}`
                    : resultMessage === "you win"
                    ? `icon-${humanChoise} win`
                    : `icon-${humanChoise}`
                }
              >
                <div className={`image-${humanChoise}`}></div>
              </div>
            )}
          </div>
        </div>

        <div
          className="message"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          <p className="message-text">{timer === 0 ? resultMessage : null}</p>
          {timer === 0 ? (
            <button
              className={
                resultMessage === "draw"
                  ? "play-again-btn"
                  : resultMessage === "you lose"
                  ? "play-again-btn lose"
                  : "play-again-btn win"
              }
              onClick={() => {
                setHumanChoise("");
              }}
            >
              play again
            </button>
          ) : null}
        </div>

        {/* Display result for house choise */}
        <div className="choise">
          <h4 className="choise-text">The House picked</h4>
          <div className="choise-picked house-picked">
            {timer > 0 && timer}

            {timer === 0 && computerChoise === +`${computerChoise}` && (
              <div
                className={
                  resultMessage === "you lose"
                    ? `icon-${computerChoise} win`
                    : `icon-${computerChoise}`
                }
              >
                <div className={` image-${computerChoise}`}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Game;
