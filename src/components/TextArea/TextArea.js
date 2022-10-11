import React from "react";
import "../Input/input.css";

const TextArea = ({ value, handler }) => {
  return (
    <div className="eachInput">
      <label htmlFor="description">Descripción</label>
      <textarea
        value={value}
        onChange={handler}
        className="input form-description"
        placeholder="inpuDescription"
        id="description"
        type="textArea"
        name="description"
      />
    </div>
  );
};

export default TextArea;
