import React from 'react'
import '../assets/styles/editProduct.css'
import StockButton from './StockButton'

const editProduct = () => {
  return (
    <div className='editProduct'>

        <div className='editProduct__img'>
            <img src='https://play-lh.googleusercontent.com/SK5XKAgwe7rL3JisRwDhf4KqUj7Ngc8-ZXliUjympr928hSgpv8b6lzayv4CuHu3diFn' alt="" />
        </div>    

        <div className='editProduct__container'>
            <div className='editProduct__name'>
                <h2>Coca Cola Lata 200ml Original Pack x8</h2>
            </div>    
            <div className='editProduct__info'>
                <div className='eachInfo'>
                    <h2>19.900</h2>
                    <div>
                        <p>PUNTOS SUPERCLUB</p>
                    </div>
                </div>
                <div className='eachInfo'>
                    <h2>19.900</h2>
                    <div>
                        <p>PUNTOS SUPERCLUB</p>
                    </div>
                </div>
                
            </div>    
        </div>    

    </div>
  )
}

export default editProduct