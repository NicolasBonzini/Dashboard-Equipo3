import React from "react";
import '../assets/styles/inputs.css'

const Input = ({ name, value, label, handler, handlerBlur }) => {
  return (
    <div className="eachInput">
      <label htmlFor="title">{label}</label>
      <input
        value={value}
        onChange={handler}
        onBlur={handlerBlur}
        className="input"
        placeholder="input"
        id={name}
        type="text"
        name={name}
      />
    </div>
  );
};

export default Input;
