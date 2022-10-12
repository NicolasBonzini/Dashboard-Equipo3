//React
import React from "react";
//Css
import "../../components/Header/header.css";
//Componentes
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ children }) {
  return (
    <header className="header">
      <BurgerMenu />
      <div className="headerContent">{children}</div>
    </header>
  );
}

export default Header;
