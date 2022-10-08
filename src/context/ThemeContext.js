import { useState, createContext, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export const ThemeContext = createContext('dark')

export const ThemeProvider = ({children}) => {

  const [ theme, setTheme ] = useState('dark')

  useEffect(() =>{
    if (cookies.get('darkMode') == 'dark') {
      console.log(cookies.get('darkMode'))
      setTheme('dark')
    } else {
      setTheme('')
    }
  }, [])


  const value = {
    theme,
    toggle: () => {   
      cookies.set('darkMode', theme === 'dark' ? '' : 'dark', {path: '/'}) 

      setTheme(prev => prev === 'dark' ? '' : 'dark');
    }
  }




  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}