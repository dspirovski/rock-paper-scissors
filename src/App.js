import React, { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import PickChoise from "./components/PickChoise/PickChoise";
import { motion } from "framer-motion";
import Button from "../src/components/Button/Button";
import "./App.scss";

const App = () => {
  //gameMode = true >> normal game mode
  //gameMode = false >>> bonus game mode
  const [modal, setModal] = useState(false);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(true);

  /**
   * Renders the main application interface, including the Header, PickChoise,
   * and Modal components. Displays the current score and game mode, as well
   * as a button to open the rules modal. If the modal is open, also displays
   * the Modal component.
   *
   * @returns {JSX.Element} The React component that displays the main interface.
   */

  return (
    <React.Fragment>
      <motion.div
        className="app"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header score={score} gameMode={gameMode} />
        <PickChoise
          setGameMode={setGameMode}
          score={score}
          setScore={setScore}
          gameMode={gameMode}
        />
        <motion.section
          className="rules-btn"
          initial={{ x: "-30vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button onClick={() => setModal(true)}>Rules</Button>
        </motion.section>
        {modal === true ? (
          <Modal setModal={setModal} gameMode={gameMode} />
        ) : null}
      </motion.div>
    </React.Fragment>
  );
};

export default App;
