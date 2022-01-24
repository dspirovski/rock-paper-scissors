import React from 'react';
import './Modal.scss';
import rulesImage from '../../images/image-rules.svg';
import bonusRulesImage from '../../images/image-rules-bonus.svg';
import closeButton from '../../images/icon-close.svg';
import { motion } from 'framer-motion';


const Modal = ({ setModal, gameMode }) => {

  return (
    <div className="modal">
      <div className={gameMode === true ? "container" : "container bonus"}>
        <header className="modal-header">
          <h4 className="text">rules</h4>
          <motion.img
            animate={{ rotateZ: -360 }}
            transition={{ duration: 1 }}
            src={closeButton} alt="close-btn" onClick={() => { setModal(false) }} className="close-btn">
          </motion.img>
        </header>
        <div className='rules-img'>
          {gameMode === true ?
            <motion.img src={rulesImage} alt="rules-img"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 1 }}
            />
            :
            <motion.img src={bonusRulesImage} alt="bonus-rules-img" animate={{ rotateZ: 360 }} />}
        </div>

      </div>

    </div >

  )
}

export default Modal
