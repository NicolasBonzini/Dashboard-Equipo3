import React from 'react'
import ProductCard from '../../../components/ProductCard';
import Header from '../../../components/Header';
import ContentContainer from '../../../components/contentContainer';
import '../../../assets/styles/mainContent.css'

function ProductList() {
  return (
    <ContentContainer className='productList '>
      <Header  />
      <ProductCard />
    </ContentContainer>
  )
}

export default ProductList