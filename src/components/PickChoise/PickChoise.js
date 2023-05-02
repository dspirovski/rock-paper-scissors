import React, { useState } from "react";
import Result from "../Result/Result";
import "./PickChoise.scss";
import Button from "../Button/Button";
import { motion } from "framer-motion";

/**

Renders a component that allows the user to pick a game mode and their choice of rock-paper-scissors game,
and displays the result.
@param {Object} props - The props object that contains the properties passed to the component.
@param {boolean} props.gameMode - A boolean that indicates whether the game is in normal or bonus mode.
@param {number} props.score - The current score of the game.
@param {function} props.setScore - A function that updates the score.
@param {function} props.setGameMode - A function that toggles between normal and bonus mode.
@returns {JSX.Element} - Returns the JSX code that displays the game.
*/

const PickChoise = ({ gameMode, score, setScore, setGameMode }) => {
  const [humanChoise, setHumanChoise] = useState("");

  const gameModeHandler = () => {
    setGameMode(!gameMode);
  };

  const gameModeText = gameMode ? "Bonus" : "Normal";

  return (
    <React.Fragment>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {humanChoise === "" ? (
          <div>
            <motion.div
              className="game-modes"
              initial={{ x: "30vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <Button className="game-mode-btn" onClick={gameModeHandler}>
                {gameModeText} Game mode
              </Button>
            </motion.div>
            {/* // Normal mode */}
            <div className={gameMode === true ? "normal-mode" : "bonus-mode"}>
              {gameMode === true ? (
                <div>
                  <div className="normal-top">
                    <div className="top-left">
                      <div
                        className="icon-paper"
                        onClick={() => {
                          setHumanChoise(2);
                        }}
                      >
                        <div className="image-paper"></div>
                      </div>
                    </div>
                    <div className="top-right">
                      <div
                        className="icon-scissors"
                        onClick={() => {
                          setHumanChoise(1);
                        }}
                      >
                        <div className="image image-scissors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="normal-bottom">
                    <div
                      className="icon-rock"
                      onClick={() => {
                        setHumanChoise(3);
                      }}
                    >
                      <div className="image image-rock"></div>
                    </div>
                  </div>
                </div>
              ) : (
                //  Bonus mode
                <div className="bonus-mode">
                  <div className="bonus-top">
                    <div
                      className="icon-scissors"
                      onClick={() => {
                        setHumanChoise(1);
                      }}
                    >
                      <div className="image image-scissors"></div>
                    </div>
                  </div>
                  <div className="bonus-middle">
                    <div className="left">
                      <div
                        className="icon-spock"
                        onClick={() => {
                          setHumanChoise(5);
                        }}
                      >
                        <div className="image image-spock"></div>
                      </div>
                    </div>
                    <div className="right">
                      <div
                        className="icon-paper"
                        onClick={() => {
                          setHumanChoise(2);
                        }}
                      >
                        <div className="image-paper"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bonus-bottom">
                    <div className="left">
                      <div
                        className="icon-lizard"
                        onClick={() => {
                          setHumanChoise(4);
                        }}
                      >
                        <div className="image image-lizard"></div>
                      </div>
                    </div>
                    <div className="right">
                      <div
                        className="icon-rock"
                        onClick={() => {
                          setHumanChoise(3);
                        }}
                      >
                        <div className="image image-rock"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Result
            humanChoise={humanChoise}
            setHumanChoise={setHumanChoise}
            gameMode={gameMode}
            score={score}
            setScore={setScore}
          />
        )}
      </motion.div>
    </React.Fragment>
  );
};
export default PickChoise;
