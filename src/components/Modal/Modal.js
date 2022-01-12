import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';
import { motion } from 'framer-motion';
import rulesImage from '../../images/image-rules.svg';
import closeButton from '../../images/icon-close.svg';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 1000,
    }
  },

  exit: {
    y: "100vh",
    opacity: 0,
  },
}



const Modal = ({ setModal }) => {

  const closeModal = () => {
    setModal(false);
  }
  return (
    <motion.div>
      <Backdrop onClick={closeModal}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          alt="rules-img"
          animate='visible'
          initial="hidden"
          variants={dropIn}
          exit="exit"
        >
          <div className="modal-container">
            <div className="header">
              <p className="top-text">Rules</p>
              <img src={closeButton} alt="close-btn" className="close-btn" onClick={closeModal} />
            </div>
            <img src={rulesImage} alt="rules-img" />
          </div>

        </motion.div>
      </Backdrop>
    </motion.div>

  )
}

export default Modal
