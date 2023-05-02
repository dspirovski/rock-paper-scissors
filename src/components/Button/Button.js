import React from "react";
import "./Button.scss";

const Button = (props) => {
  /**

Renders a button component with the provided text and onClick event listener.
@param {object} props - The props object containing the onClick event listener and the children text.
@param {function} props.onClick - The function to be executed when the button is clicked.
@param {string|ReactNode} props.children - The text or ReactNode to be rendered inside the button.
@returns {JSX.Element} The button component.
*/

  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
