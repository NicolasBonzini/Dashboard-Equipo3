import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import ProductCard from '../../../components/ProductCard';
import Header from '../../../components/Header';
import ContentContainer from '../../../components/contentContainer';
import Button from '../../../components/Button'

import '../../../assets/styles/mainContent.css'

function ProductList() {
  const [isVisibleInput, setIsVisibleInput] = useState(false)
  const inputSearch = useRef(null)
  function searchProducts(){
    console.log('Buscando...')
  }
  function handlerSearchBar(){
    console.log(window.screen.width)
    if (window.screen.width <= 600) setIsVisibleInput(!isVisibleInput)
  }
  return (
    <ContentContainer className='productList '>
            <Header>
        {!isVisibleInput && <Link className='title' to='/products'>Productos</Link>}
        <div className='headerGroup'>
        <i onClick={handlerSearchBar} className={`fa-regular fa-x ${isVisibleInput ? 'setVisible xVisible': ' '}`}></i>
        <div className='formContainer'>
          <form>
            <input ref={inputSearch} className={isVisibleInput ? 'setVisible inputVisible' : ''} placeholder='Buscar productos' type='search'></input>
            
            <i  onClick={() => {
              return inputSearch.current.value ? searchProducts() : handlerSearchBar()
              }} className={
                `fa-solid fa-magnifying-glass
                ${isVisibleInput ? 'inputSearchOpen' : ''}`}>
            </i>
          
          </form>
          {!isVisibleInput &&
          <Link to='/products/new'>
            { !isVisibleInput && <Button text='+' personalClass='mobileAdd' ></Button>}
            <Button text='Agregar Producto' personalClass='desktopAdd' ></Button>
          </Link>
          }
        </div>
        </div>
      </Header>
      <ProductCard />
    </ContentContainer>
  )
}

export default ProductList