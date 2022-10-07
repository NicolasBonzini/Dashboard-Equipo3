//CSS
import "../assets/styles/burgerMenu.css";
//React
import { useState } from "react";

function BurgerMenu() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`burger-menu ${isActive ? "change" : null}`}
      onClick={handleToggle}
    >
      <div className={`bar1`}></div>
      <div className={`bar2`}></div>
      <div className={`bar3`}></div>
    </div>
  );
}

export default BurgerMenu;
