//CSS
import "../../components/BurgerMenu/burgerMenu.css";
//React
import { useContext } from "react";
//Context
import { ToggleContext } from "../../context/ToggleContext";

function BurgerMenu() {
  const { toggleSidebar, toggle } = useContext(ToggleContext);

  return (
    <div
      role="button"
      aria-label="menuButton"
      data-testid={`burger-menu ${toggle ? "change" : null}`}
      className={`burger-menu ${toggle ? "change" : null}`}
      onClick={() => toggleSidebar()}
    >
      <div className={`bar1`}></div>
      <div className={`bar2`}></div>
      <div className={`bar3`}></div>
    </div>
  );
}

export default BurgerMenu;
