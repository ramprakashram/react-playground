import React from "react";
import { useState } from "react";
import "./InputForm.scss";

function InputForm(props) {
  const [focussed, setFocussed] = useState(false);
  const { label, onChange, errorText, ...otherProps } = props;

  return (
    <div className="input-form">
      <label htmlFor={otherProps.name}>{label}</label>
      <input
        {...otherProps}
        onChange={onChange}
        onFocus={() => setFocussed(true)}
        onBlur={() => setFocussed(true)}
        focussed={focussed.toString()}
      />
      <span className="error-text">{errorText}</span>
    </div>
  );
}

export default InputForm;
