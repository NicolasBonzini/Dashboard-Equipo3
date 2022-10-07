import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ButtonContext = () => {

  const { toggle: toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => toggleTheme()}>Button</button>
  )
}

export default ButtonContext