import React from 'react'
import ProductView from '../pages/products/productView/ProductView'
import productCard from '../assets/styles/productCard.css';
import { NavLink } from 'react-router-dom';
import arrowImg from '../assets/images/chevron-right(1).svg';
import testIMG from '../assets/images/Historia-de-Coca-Cola.jpg';

function ProductCard() {
  return (
    <div className='productCard'>
      <NavLink className='productCardLink' to='/products/:id'>
        <section className='productCardInfo'>
          <figure className='productCardImg'>
            <img src={testIMG} alt=''></img>
          </figure>
          <div className='productCardTexts'>
            <h4 className='productCardTitle'>
              Aca va un titulo de producto
            </h4>
            <p className='productCardCode'>Aca va el #codigo</p>
          </div>
        </section>
        <figure className='productArrowImg'>
          <img src={arrowImg}></img>
        </figure>
      </NavLink>
    </div>
  )
}

export default ProductCard