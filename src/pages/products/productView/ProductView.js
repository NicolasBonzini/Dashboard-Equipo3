import React from 'react'
import './productView.css'

function ProductView() {
  return (
    <div className='productView'>
      <div></div>
      <form className='newForm' action="">
        <div>
          <div className='eachInput'>

          <h3>Información</h3>
          <label htmlFor='name'>Nombre</label>
          <input
          placeholder='inputName'
          id='name'
          type="text"
          name='nombre'
          />
          </div>
          <div className='eachInput'> 
            
          <label htmlFor='value'>Valor</label>
          <input
          placeholder='inputValue'
          id='value'
          type="text"
          name='value'
          />
          </div>
          <div className='eachInput'>
          <label>Stock</label>
          <div className="counter">
            <button type="number" data-name="<%= title %>" data-id="<%= id %> " className="decrement">-</button>
            <p className="result">5</p>
            <button type="number" data-id="<%= id%> " className="increment">+</button>
        </div>
          </div>
          <div className='eachInput'>
          <label htmlFor='description'>Descripción</label>
            
          <textarea
          placeholder='inpuDescription'
          id='description'
          type="textArea"
          name='descriptiom'
          />
          </div>
          <div className='eachInput'>
            <label htmlFor="store">Tienda</label>
            <select name="cars" id="cars" >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
          </div>
        </div>


        <div>
          <h3>Galeria de Imágenes</h3>
          <div className='eachInput'>
            <label htmlFor="image">Nueva Imagen</label>
            <input className='inputs'
            placeholder='inputImg'
              id='image'
              name='image'
              type='text' />
          </div>
          <div className='eachInput'>
            <label>Imágenes actuales</label>
            <div className='formImgs'>
              <div className='formImgs-img'>
              <img src='https://play-lh.googleusercontent.com/SK5XKAgwe7rL3JisRwDhf4KqUj7Ngc8-ZXliUjympr928hSgpv8b6lzayv4CuHu3diFn' alt="" />
              <p>aaksdsakdjldjksajdksljdl !!</p>
              </div>
              <button className='quitar'>Quitar</button>
            </div>
            <div className='formImgs'>
              <div className='formImgs-img'>
              <img src='https://play-lh.googleusercontent.com/SK5XKAgwe7rL3JisRwDhf4KqUj7Ngc8-ZXliUjympr928hSgpv8b6lzayv4CuHu3diFn' alt="" />
              <p>aaksdsakdjldjksajdksljdl !!</p>
              </div>
              <button className='quitar'>Quitar</button>
            </div>
            <div className='formImgs'>
              <div className='formImgs-img'>
              <img src='https://play-lh.googleusercontent.com/SK5XKAgwe7rL3JisRwDhf4KqUj7Ngc8-ZXliUjympr928hSgpv8b6lzayv4CuHu3diFn' alt="" />
              <p>aaksdsakdjldjksajdksljdl !!</p>
              </div>
              <button className='quitar'>Quitar</button>
            </div>
           
          </div>
        </div>

        <div className='sendForm'>
          <button >Cancelar</button>
          <button >Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default ProductView