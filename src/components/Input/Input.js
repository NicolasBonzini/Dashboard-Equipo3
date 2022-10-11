import React from "react";
import "../Input/input.css";
import { useRef } from "react";

const Input = ({ tipo = "text",refe,name,value, label, handler, handlerBlur }) => {



  return (
    <div className="eachInput">
      <label htmlFor="title">{label}</label>
      <input
        value={value}
        onChange={handler}
        onBlur={handlerBlur}
        className="input"
        placeholder={label}
        id={name}
        type={tipo}
        name={name}
      />
    </div>
  );
};

export default Input;
