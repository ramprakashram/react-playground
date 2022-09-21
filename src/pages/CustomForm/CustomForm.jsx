import React from "react";
import { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import "./CustomForm.scss";

function CustomForm() {
  const [formData, updateFormData] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorText:
        "Username should be 3-20 characters and shouldn't include any special characters!",
      required: true,
      pattern: "^[a-z0-9A-Z]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorText: "Please enter valid email address",
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorText:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      errorText: "Passwords don't match!",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="custom-form-wrapper">
      <form onSubmit={onSubmit}>
        {inputs.map((eachForm) => (
          <InputForm
            key={eachForm.id}
            {...eachForm}
            value={formData[eachForm.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CustomForm;
