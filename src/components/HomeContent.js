import React from 'react'
import '../assets/styles/mainContent.css'
import Button from './Button'

function HomeContent() {
  return (
    <div className='homeContent header_top containerMain'>
      <div className='pruebita'>Tarjetas<Button text='Agregar Producto' personalClass></Button></div>
      <div className='pruebita'>Tarjetas</div>
      <div className='pruebita'>Tarjetas</div>
      <div className='pruebita'>Tarjetas</div>
      <div className='pruebita'>Tarjetas</div>
    </div>
  )
}

export default HomeContent