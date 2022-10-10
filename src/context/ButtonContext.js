import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ButtonContext = (props) => {

  const { toggle: toggleTheme } = useContext(ThemeContext)

  return (
    <label htmlFor="toggle_checkbox" className="button-context" onClick={() => toggleTheme()}>
        {props.children}
    </label>
  )
}

export default ButtonContext