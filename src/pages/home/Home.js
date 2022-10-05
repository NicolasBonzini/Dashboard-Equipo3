import React from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import ContentContainer from '../../components/contentContainer'

function Home() {
  return (
    <ContentContainer className='home'>
      <Header>
        juancito
      </Header>
      <HomeContent />
    </ContentContainer>
  )
}

export default Home