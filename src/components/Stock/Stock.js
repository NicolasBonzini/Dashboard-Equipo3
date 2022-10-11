import React from "react";
import Input from "../Input/Input";
import '../StockButton/stockButton.css'

const Stock = ({ handlerD, handlerI, stock, handleStock }) => {
  return (
    <div className="eachInput">
      <label>Stock</label>
      <div className="counter">
        <button type="number" onClick={handlerD} className="decrement">
          -
        </button>
        {/* <p className="result">{stock}</p> */}
      
        <input
        className="result"
        type='number'
        name='stock'
        onChange={handleStock}
        defaultValue={stock}
        id="stock"/>
        <button type="number" onClick={handlerI} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Stock;
