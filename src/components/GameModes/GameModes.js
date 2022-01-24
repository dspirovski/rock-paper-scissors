import React from 'react';
import './GameModes.scss';
import { motion } from 'framer-motion';


function GameModes({ setGameMode }) {
  return <motion.div className="game-modes"
    initial={{ x: '30vw', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 150 }}
  >
    <button className='mode-btn' onClick={() => setGameMode(true)}>easy</button>
    <button className='mode-btn' onClick={() => setGameMode(false)}>hard</button>
  </motion.div>;
}

export default GameModes;
