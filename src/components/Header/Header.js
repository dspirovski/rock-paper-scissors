import React from "react";
import "./Header.scss";
import logo from "../../images/logo.svg";
import logoBonus from "../../images/logo-bonus.svg";

/**

Renders the header component displaying the game logo and the player's score.
@param {object} props - The props object containing the score and gameMode boolean.
@param {number} props.score - The score to be displayed.
@param {boolean} props.gameMode - A boolean representing whether the game is in normal or bonus mode.
@returns {JSX.Element} The header component.
*/

const Header = ({ score, gameMode }) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="game-name">
          {gameMode === true ? (
            <img src={logo} alt="logo" className="logo-initial" />
          ) : (
            <img src={logoBonus} alt="bonus-logo" className="logo-bonus" />
          )}
        </div>
        <div className="score-container">
          <p className="score">score</p>
          <p className="value">{score}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
