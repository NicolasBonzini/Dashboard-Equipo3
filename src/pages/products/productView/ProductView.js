import React from 'react'
import Images from '../../../components/Images'
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
          className='input'
          placeholder='inputName'
          id='name'
          type="text"
          name='nombre'
          />
          </div>
          <div className='eachInput'> 
            
          <label htmlFor='value'>Valor</label>
          <input
          className='input'
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
          <label  htmlFor='description'>Descripción</label>
            
          <textarea className='input form-description'
          placeholder='inpuDescription'
          id='description'
          type="textArea"
          name='descriptiom'
          />
          </div>
          <div className='eachInput'>
            <label htmlFor="store">Tienda</label>
            <select name="select" className='input' id="stores">
                <option selected='true'>Tienda</option>
                <option value="easy">Easy</option>
                <option value="disco">Disco</option>
                <option value="jumbo">Jumbo</option>
                <option value="paris">Paris</option>
            </select>
          </div>
        </div>


        <div>
          <h3>Galeria de Imágenes</h3>
          <div className='eachInput'>
            <label htmlFor="image">Nueva Imagen</label>
            <input className='input'
            placeholder='inputImg'
              id='image'
              name='image'
              type='text' />
          </div>
          <div className='eachInput'>
            <label>Imágenes actuales</label>
            <Images />
            <Images />
            <Images />
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