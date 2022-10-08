import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from '../../../components/ProductCard';
import Header from '../../../components/Header';
import ContentContainer from '../../../components/ContentContainer';
import Button from '../../../components/Button'
import '../../../assets/styles/mainContent.css'
import getProducts from '../../../utils/getProducts';

function ProductList() {
  const [isVisibleInput, setIsVisibleInput] = useState(false)
  const [products, setProducts] = useState([]);

  const inputSearch = useRef(null)
  function searchProducts() {
    console.log('Buscando...')
  }
  function handlerSearchBar() {
    if (window.screen.width <= 500) setIsVisibleInput(!isVisibleInput)
  }

  useEffect(() => {
    getProducts()
    .then(data => setProducts(data));
    console.log(products);
  }, [])

  console.log(products);
  
  

  return (
    <ContentContainer className='productList '>
      <Header>
        {!isVisibleInput && <Link className='title' to='/products'>Productos</Link>}
        <div className='headerGroup'>
          <i onClick={handlerSearchBar} className={`fa-regular fa-x ${isVisibleInput ? 'setVisible xVisible' : ' '}`}></i>
          <div className='formContainer'>
            <form>
              <input ref={inputSearch} className={isVisibleInput ? 'setVisible inputVisible' : ''} placeholder='Buscar productos' type='search'></input>

              <i onClick={() => {
                return inputSearch.current.value ? searchProducts() : handlerSearchBar()
              }} className={
                `fa-solid fa-magnifying-glass
                ${isVisibleInput ? 'inputSearchOpen' : ''}`}>
              </i>

            </form>
            {!isVisibleInput &&
              <Link to='/products/new'>
                {!isVisibleInput && <Button text='+' personalClass='mobileAdd' ></Button>}
                <Button text='Agregar Producto' personalClass='desktopAdd' ></Button>
              </Link>
            }
          </div>
        </div>
      </Header>
      {products.map((product) => <ProductCard key={product.id} id={product.id} title={product.title} image={product.images[0]} />)}
      <ProductCard />
    </ContentContainer>
  )
}

export default ProductList