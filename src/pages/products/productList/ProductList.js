import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from '../../../components/ProductCard';
import Header from '../../../components/Header';
import ContentContainer from '../../../components/ContentContainer';
import Button from '../../../components/Button'
import '../../../assets/styles/mainContent.css'
import '../../../assets/styles/filter.css'
import './productList.css'
import getProducts from '../../../utils/getProducts';
import MainContainer from '../../../components/MainContainer';

function ProductList() {
  const [isVisibleInput, setIsVisibleInput] = useState(false)
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const inputSearch = useRef(null)

  function filterForValue(array, value) {
    return array.filter(x => x.title.toLowerCase().includes(value.toLowerCase()))
  }
  function searchProducts(e) {
    e?.preventDefault()
    setProductsFilter(filterForValue(products, inputSearch.current.value))
  }

  //Filtros
  function handlerCategory(e){
    setProductsFilter(products.filter(x => x.category.includes(e.target.value) || x.category === ''))
  }
  function handlerPriceInput(e){
    console.log(e.target.value)
  }

  function handlerSearchBar() {
    if (window.screen.width <= 500) setIsVisibleInput(!isVisibleInput)
  }


  useEffect(() => {
    getProducts()
      .then(data => {
        setProductsFilter(data)
        setProducts(data)
        setAllCategory([...new Set(data.map((item) => item.category === '' ? 'Sin categoria' : item.category))])
      });
  }, [])



  return (
    <ContentContainer className='productList '>
      <Header>
        {!isVisibleInput && <Link className='title title_special' to='/products'>Productos</Link>}
        <div className='headerGroup'>
          <i onClick={handlerSearchBar} className={`fa-regular fa-x ${isVisibleInput ? 'setVisible xVisible' : ' '}`}></i>
          <div className='formContainer'>
            <form onSubmit={searchProducts}>
              <input name='search' type='search' ref={inputSearch} onChange={searchProducts} 
                className={isVisibleInput ? 'setVisible inputVisible' : ''} placeholder='Buscar productos'></input>

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
      <MainContainer >

        <div className='header_top'>
          {/* filtros */}

            <div className='filter'>
              <select onChange={handlerCategory} name="category" id="category">
                <option value='' >
                  Categorias
                </option>
                {allCategory?.map(cat => <option key={cat} value={cat} >{cat}</option>)}
              </select>
              <label className='price_filter'>
                Precio:
                <div>
                  <input min='0' onChange={handlerPriceInput} name="category" id="category" type='number' placeholder='Min' />
                  <input min='0' onChange={handlerPriceInput} name="category" id="category" type='number' placeholder='Max' />
                </div>
              </label>
              <button className="btn btn-secondary">Limpiar</button>
            </div>

          <div className='products'>
            {products.length ?
              productsFilter.length ?
                productsFilter.map((product) => <ProductCard key={product.id} id={product.id} title={product.title} image={product.images[0]} />) :
                <p className='header_top containerMain void'>No hay coincidencias</p> :
              <p className='header_top containerMain void'>Cargando...</p>
            }
          </div>
        </div>
      </MainContainer>
    </ContentContainer>
  )
}

export default ProductList