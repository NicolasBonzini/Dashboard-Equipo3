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
      className={`burger-menu ${toggle ? null : "change"}`}
      onClick={() => toggleSidebar()}
    >
      <div className={`bar1`}></div>
      <div className={`bar2`}></div>
      <div className={`bar3`}></div>
    </div>
  );
}

export default BurgerMenu;
