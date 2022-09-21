import React from "react";
import "./CalculatorButton.scss";

function CalculatorButton({ text, onButtonClick, customClass = "" }) {
  return (
    <button
      className={`calculator-button ${customClass}`}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

export default CalculatorButton;
