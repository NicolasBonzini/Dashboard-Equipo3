import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/ContentContainer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import CardStartPage from '../../components/CardStartPage'

function Home() {
  localStorage.setItem('user', JSON.stringify({name: 'Juanito'}))
  const id = JSON.parse(localStorage.getItem('user')).name
  return (
    <ContentContainer className='home'>
      <Header>
        <Link className='title' to='/profile'>¡Hola {id}!</Link>
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default Home