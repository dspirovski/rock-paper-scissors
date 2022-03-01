import React from 'react';
import { motion } from 'framer-motion';
import "./Button.scss";

const Button = props => {
  return (
    <React.Fragment>
      <motion.button
        className="rulles-button"
        onClick={() => props.setModal(true)}
        initial={{ x: '-30vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >rules</motion.button>
    </React.Fragment>
  )
}

export default Button;