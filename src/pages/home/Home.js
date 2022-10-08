import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/ContentContainer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import CardStartPage from '../../components/CardStartPage'

function Home() {
  const [id, setId] = useState('Anonimo')
  useEffect(() =>{
    if (!JSON.parse(localStorage.getItem('user'))?.name){
      const user = prompt('Ingrese su nombre:')
      localStorage.setItem('user', JSON.stringify({name: user}))
    }
    setId(JSON.parse(localStorage.getItem('user'))?.name || id)

  }, [])
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