import React from 'react'
import '../assets/styles/mainContent.css'

export default function MainContainer({children}) {
  return (
    <main className='main_container'>
        {children}
    </main>
  )
}
