import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/contentContainer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function Home() {
  const [isVisibleInput, setIsVisibleInput] = useState(false)
  const inputSearch = useRef(null)
  function searchProducts(){
    console.log('Buscando...')
  }
  function handlerSearchBar(){
    if (window.screen.width <= 600) setIsVisibleInput(!isVisibleInput)
  }
  return (
    <ContentContainer className='home'>
      <Header>
        {!isVisibleInput && <Link className='title' to='/'>Productos</Link>}
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
      <HomeContent />
    </ContentContainer>
  )
}

export default Home