import React from 'react';
import ContentContainer from '../../../components/contentContainer';
import Header from '../../../components/Header';
import {Link, useParams} from 'react-router-dom';

//Mientras de relleno
import HomeContent from '../../../components/HomeContent';
import Button from '../../../components/Button';

function ProductView() {
  const id = useParams().id
  return (
    <ContentContainer className='home'>
      <Header>
        
        <div className='title textCtn'>
          <Link className='title products' to='/products'>
            Productos
            <i className="fa-solid fa-greater-than"></i>
          </Link>
          <Link className='title' to='/products/new'>{id}</Link>
        </div>
        <Button text='Eliminar' personalClass='btnDelete'/>
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default ProductView