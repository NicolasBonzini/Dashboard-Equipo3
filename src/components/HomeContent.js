import React from 'react'
import '../assets/styles/mainContent.css'
import Button from './Button'
import Header from './Header'
import CardStartPage from "./CardStartPage";

function HomeContent() {
  return (
    <div className='homeContent header_top containerMain'>
      <CardStartPage />
    </div>
  )
}

export default HomeContent