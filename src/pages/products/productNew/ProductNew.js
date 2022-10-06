import React from 'react';
import ContentContainer from '../../../components/contentContainer';
import Header from '../../../components/Header';
import {Link} from 'react-router-dom'

//Mientras como molde
import HomeContent from '../../../components/HomeContent';
function ProductNew() { 
  return (
    <ContentContainer className='home'>
      <Header>
        <div className='title teCtn'>
          <Link className='title products' to='/products'>
            Productos
            <i className="fa-solid fa-greater-than"></i>
          </Link>
          <Link className='title' to='/products/new'>Nuevo Producto</Link>
        </div>
        
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default ProductNew