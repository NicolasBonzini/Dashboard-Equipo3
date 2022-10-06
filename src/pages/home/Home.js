import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/contentContainer'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function Home() {
  return (
    <ContentContainer className='home'>
      <Header>
        <Link to='/'>Picante</Link>
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default Home