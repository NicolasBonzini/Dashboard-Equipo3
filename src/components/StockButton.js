import React from 'react'
import '../assets/styles/stockButton.css'
const StockButton = () => {
  return (
    <div className='eachInput'>
          <label>Stock</label>
          <div className="counter">
            <button type="number" data-name="<%= title %>" data-id="<%= id %> " className="decrement">-</button>
            <p className="result">5</p>
            <button type="number" data-id="<%= id%> " className="increment">+</button>
        </div>
          </div>
  )
}

export default StockButton