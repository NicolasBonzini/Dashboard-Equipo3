import React from 'react';
import '../assets/styles/header.css'

function Header({ children }) {

  return (
    <header className='header'>
      <i className="fa-solid fa-bars"></i>
      <div className='headerContent'>
        { children }
      </div>
    </header>
  )
}

export default Header