import React from 'react';
import './Modal.scss';

import rulesImage from '../../images/image-rules.svg';
import closeButton from '../../images/icon-close.svg';


const Modal = ({ setModal }) => {

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
          <img src={rulesImage} alt="rules-img" />
        </div>

      </div>

    </div >

  )
}

export default Modal
