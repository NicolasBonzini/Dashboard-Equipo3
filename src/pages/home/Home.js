import React from 'react'
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import CardStartPage from '../../components/CardStartPage'

function Home() {
  return (
    <div className='home'>
      <Header />
      <HomeContent />
      <CardStartPage/>
    </div>
  )
}

export default Home