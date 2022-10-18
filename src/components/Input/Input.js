//Css
import "../Input/input.css";

const Input = ({ tipo = "text", name, value, label, handler, handlerBlur }) => {
  return (
    <div className="eachInput">
      <label htmlFor={name}>{label}</label>
      <input
        defaultValue={value}
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
