import React from 'react'
import '../assets/styles/editProduct.css'
import Avatar from './Avatar'
import StockButton from './StockButton'
import { NavLink } from "react-router-dom";

const editProduct = (props) => {
  return (
   
    
    <div className='editProduct'>

        <div className='editProduct__img'>
            <img src={props.img} alt="" />
        </div>    

        <div className='editProduct__container'>
            <div className='editProduct__name'>
                <h2>{props.name}</h2>
            </div>    
            <div className='editProduct__info'>
                <div className='eachInfo'>
                    <h2>{props.valor}</h2>
                    <div>
                        <p>PUNTOS SUPERCLUB</p>
                    </div>
                </div>
                <div className='eachInfo'>
                    <h2>{props.stock}</h2>
                    <div>
                        <p>STOCK DISPONIBLE</p>
                    </div>
                </div>
                
        <Avatar/>
            </div>    
        </div>    
        

    </div>
  )
}

export default editProduct