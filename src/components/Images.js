import React from 'react'
import '../assets/styles/images.css'

const Images = (props) => {
  return (
    <div className='formImgs'>
              <div className='formImgs-img'>
              <img src={props.url} alt="" />
              <p>{props.url}</p>
              </div>
              <button className='quitar'>Quitar</button>
    </div>
  )
}

export default Images