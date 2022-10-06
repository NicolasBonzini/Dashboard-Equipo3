import React from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/contentContainer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function Home() {
  return (
    <ContentContainer className='home'>
      <Header>
        <Link className='title' to='/'>Productos</Link>
        <div className='headerGroup'>
          <form>
            <i className="fa-regular fa-x"></i>
            <input type='search'></input>
            
            <i className="fa-solid fa-magnifying-glass"></i>
          
          </form>
          <Link to='/products/new'>
            <Button text={'Agregar Producto'} personalClass={'desktopAdd'} ></Button>
          </Link>
        </div>
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default Home