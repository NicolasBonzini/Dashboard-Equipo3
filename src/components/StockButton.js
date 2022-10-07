import React from 'react'
import '../assets/styles/stockButton.css'
import { useEffect, useState } from 'react';
const StockButton = (props) => {
  const [counter,setCounter] = useState(0);

  const handleDecrement = (e)=>{
    e.preventDefault()

   if(counter>0){

     setCounter(counter-1)
   } 
  }
  const handleIncrement = (e)=>{
    e.preventDefault()

    setCounter(counter+1)
  }
  return (
    <div className='eachInput'>
          <label>Stock</label>
          <div className="counter">
            <button type="number" data-name="<%= title %>" data-id="<%= id %> " onClick={handleDecrement} className="decrement">-</button>
            <p className="result">{counter}</p>
            <button type="number" data-id="<%= id%> " onClick={handleIncrement} className="increment">+</button>
        </div>
          </div>
  )
}

export default StockButton