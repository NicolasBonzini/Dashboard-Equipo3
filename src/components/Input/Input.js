//Css
import "../Input/input.css";

const Input = ({ tipo = "text", name, value, label, handler, handlerBlur }) => {

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
        type={tipo}
        name={name}
      />
    </div>
  );
};

export default Input;
