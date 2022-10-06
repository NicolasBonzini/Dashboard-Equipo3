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
        <div>
          <Link to='/products'>
            Productos
            <i class="fa-solid fa-greater-than"></i>
          </Link>
          <Link to='/products/new'>Nuevo Producto</Link>
        </div>
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default ProductNew