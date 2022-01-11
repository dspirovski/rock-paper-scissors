import React, { useState, useEffect } from 'react';
import './Game.scss';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

const Game = ({ humanChoise }) => {

  const [computerChoise, setComputerChoise] = useState('');

  //generate random computer choise
  const randomComputerChoise = () => {
    const choises = ['paper', 'rock', 'scissors'];
    setComputerChoise(choises[Math.floor(Math.random() * 3)])
  }

  //call the function when the page loads
  useEffect(() => {
    randomComputerChoise()
  });

  return (
    <div className="game">
      <div className="picked-text">
        <h4>You picked</h4>
        <h4>House picked</h4>
      </div>
      <div className="container">

        <div className="human-picked">{humanChoise}</div>

        <div className="house-picked">
          {computerChoise === "paper" ?
            <div className="body">
              <img className="paper" src={paper} alt="paper" />
            </div>
            : console.log('ERROR')}

          {computerChoise === "rock" ?
            <div className="body">
              <img className="rock" src={rock} alt="rock" />
            </div> : console.log('ERROR')}
          {computerChoise === "scissors" ?
            <div className="body">
              <img className="scissors" src={scissors} alt="scissors" />
            </div> : console.log('ERROR')}
        </div>
      </div>
    </div>
  )
}
export default Game