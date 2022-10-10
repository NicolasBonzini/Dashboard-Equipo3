import React from 'react';
import '../assets/styles/ContentContainer.css'

export default function contentContainer({children}) {
  return (
    <main className='contentContainer'>
        {children}
    </main>
  )
}
