
const Stock = ({ handlerD, handlerI, stock }) => {
  return (
    <div className="eachInput">
      <label>Stock</label>
      <div className="counter">
        <button type="number" onClick={handlerD} className="decrement">
          -
        </button>
        <p className="result">{stock}</p>
        <button type="number" onClick={handlerI} className="increment">
          +
        </button>
      </div>
    </div>
  );
};

export default Stock;
