import React from 'react';
import '../assets/styles/contentContainer.css'

export default function contentContainer({children}) {
  return (
    <main className='contentContainer'>
        {children}
    </main>
  )
}
