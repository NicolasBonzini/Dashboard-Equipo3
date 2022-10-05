import React from 'react'
import ProductCard from '../../../components/ProductCard';
import Header from '../../../components/Header';

function ProductList() {
  return (
    <div className='productList'>
      <Header  />
      <ProductCard />
    </div>
  )
}

export default ProductList