import React from 'react';
import './Modal.scss';
import rulesImage from '../../images/image-rules.svg';
import bonusRulesImage from '../../images/image-rules-bonus.svg';
import closeButton from '../../images/icon-close.svg';
import { motion } from 'framer-motion';


const Modal = ({ setModal, gameMode }) => {

  const closeModal = () => {
    setModal(false);
  }
  return (
    <div className="modal" onClick={closeModal}>
      <div className="container">
        <header className="modal-header">
          <h4 className="text">rules</h4>
          <img src={closeButton} alt="close-btn" onClick={closeModal} className="close-btn" />
        </header>
        <div className="rules-img">
          {gameMode === true ?
            <motion.img src={rulesImage} alt="rules-img"
              animate={{ rotateZ: 360 }}
              transition={{ delay: 0, duration: 0.2 }}

            />
            :
            <motion.img src={bonusRulesImage} alt="bonus-rules-img" animate={{ rotateZ: 360 }} />}
        </div>

      </div>

    </div >

  )
}

export default Modal
