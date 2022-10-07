import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ButtonContext = () => {

  const { toggle: toggleTheme } = useContext(ThemeContext)

  return (
    <label className="button-context" onClick={() => toggleTheme()}>Switch</label>
  )
}

export default ButtonContext