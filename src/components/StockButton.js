import React from 'react'
import '../assets/styles/stockButton.css'
import { useEffect, useState } from 'react';
 



const StockButton = (props) => {
  const [counter,setCounter] = useState(props.stock);
  

  //Que se renderice cuando se actualice la props
  useEffect(()=>{
    setCounter(props.stock)
  }, [props.stock])

  //Funciones incremento y decremento
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
            <button type="number"  onClick={handleDecrement} className="decrement">-</button>
            <p className="result"
            value={counter}
            
            >{counter}</p>
            <button type="number"  onClick={handleIncrement} className="increment">+</button>
        </div>
    </div>
  )
}

export default StockButton