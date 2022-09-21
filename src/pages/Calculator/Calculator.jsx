import React from "react";
import { useState } from "react";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import "./Calculator.scss";

var valueStack = [];
function Calculator() {
  const [values, setValues] = useState("");

  const calculatorButtons = [
    [
      {
        text: "AC",
        type: "clear",
      },
      {
        text: "+/-",
        type: "transform",
      },
      {
        text: "%",
        type: "operator",
      },
      {
        text: "/",
        type: "operator",
      },
    ],
    [
      {
        text: "1",
        type: "numeric",
      },
      {
        text: "2",
        type: "numeric",
      },
      {
        text: "3",
        type: "numeric",
      },
      {
        text: "*",
        type: "operator",
      },
    ],
    [
      {
        text: "4",
        type: "numeric",
      },
      {
        text: "5",
        type: "numeric",
      },
      {
        text: "6",
        type: "numeric",
      },
      {
        text: "-",
        type: "operator",
      },
    ],
    [
      {
        text: "7",
        type: "numeric",
      },
      {
        text: "8",
        type: "numeric",
      },
      {
        text: "9",
        type: "numeric",
      },
      {
        text: "+",
        type: "operator",
      },
    ],
    [
      {
        text: "0",
        type: "numeric",
        customClass: "mergecell-right",
      },
      {
        text: ".",
        type: "numeric",
      },
      {
        text: "=",
        type: "output",
      },
    ],
  ];

  const handleButtonClick = (button) => {
    if (button.type === "numeric") {
      setValues(values + button.text);
    } else if (button.type === "operator") {
      valueStack.push(values);
      valueStack.push(button.text);
      setValues("");
    } else if (button.type === "output") {
      valueStack.push(values);
      calculateOutput();
    } else if (button.type === "clear") {
      valueStack = [];
      setValues("");
    } else if (button.type === "transform") {
      applyTransform(button.text);
    }
  };

  const applyTransform = (transformType) => {
    if (transformType === "+/-") {
      if (values.indexOf("-") > -1) {
        setValues(values.substring(1));
      } else {
        setValues("-" + values);
      }
    }
  };

  const calculateOutput = () => {
    const evalString = valueStack.reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, "");
    valueStack = [];
    setValues(eval(evalString).toString());
  };

  return (
    <div className="calculator-wrapper">
      <section className="calculator-output">{values}</section>
      {calculatorButtons.map((eachButtonRow, rowIndex) => (
        <div key={rowIndex} className="calculator-row">
          {eachButtonRow.map((eachButton, buttonIndex) => (
            <CalculatorButton
              key={buttonIndex}
              text={eachButton.text}
              customClass={eachButton.customClass}
              onButtonClick={handleButtonClick.bind(this, eachButton)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calculator;
