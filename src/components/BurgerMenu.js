//CSS
import "../assets/styles/burgerMenu.css";
//React
import { useState, useContext } from "react";
//Context
//Context
import { ToggleContext } from '../context/ToggleContext';

function BurgerMenu() {
  const { toggleSidebar, toggle  } = useContext(ToggleContext);
  

  console.log(toggle);

  return (
    <div
      className={`burger-menu ${toggle ? null : "change"}`}
      // onClick={handleToggle}
      onClick={() => toggleSidebar()}
    >
      <div className={`bar1`}></div>
      <div className={`bar2`}></div>
      <div className={`bar3`}></div>
    </div>
  );
}

export default BurgerMenu;
