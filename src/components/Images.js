import React from 'react'
import '../assets/styles/images.css'

const Images = ({images,handler}) => {

 
  return (
    <div className="eachInput">
    <label>Imágenes actuales</label>
    {images.map((image,id)=>{
      return (<div key={id + image} className='formImgs'>
                <div className='formImgs-img'>
                    <img src={image} alt="" />
                    <div className='urlContainer'>
                      <p>{image}</p>
                    </div>  
                </div>
                <button onClick={handler} value={image} className='quitar'>Quitar</button>
            </div>)
    })}
    </div>
  )
}

export default Images