import React from 'react';
import '../assets/styles/header.css'

function Header({ children }) {

  return (
    <header className='header'>
      <i class="fa-solid fa-bars"></i>
      <div>
        { children }
      </div>
      
    </header>
  )
}

export default Header