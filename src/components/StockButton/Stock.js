//Css
import "./stockButton.css";

const Stock = ({ handlerD, handlerI, stock, handleStock }) => {
  return (
    <div className="eachInput">
      <label htmlFor="stock">Stock</label>
      <div className="counter">
        <button
          type="number"
          onClick={(e) => {
            handlerD(e);
            console.log("probando");
          }}
          className="decrement"
        >
          -
        </button>
        <input
          className="result"
          type="number"
          name="stock"
          onChange={handleStock}
          defaultValue={stock}
          id="stock"
        />

        <button type="number" onClick={handlerI} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Stock;
